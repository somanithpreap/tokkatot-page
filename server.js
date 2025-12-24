// Tokkatot Website Backend Server
// Handles contact form submissions and Telegram notifications
// For home server deployment with Cloudflare

import express from 'express';
import cors from 'cors';
import https from 'https';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const API_PORT = process.env.API_PORT || 3001;

// Telegram configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
const TELEGRAM_TOPIC_ID = process.env.TELEGRAM_TOPIC_ID; // Optional: For topic/thread in groups

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from dist folder
app.use(express.static(join(__dirname, 'dist')));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    telegram: TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID ? 'configured' : 'not configured'
  });
});

// Telegram message sender function
async function sendToTelegram(formData) {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    throw new Error('Telegram credentials not configured. Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env file');
  }

  const telegramMessage = `
🔔 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}

💬 *Message:*
${formData.message}

🕐 *Time:* ${new Date().toLocaleString('en-US', { 
    timeZone: 'Asia/Phnom_Penh',
    dateStyle: 'full',
    timeStyle: 'short'
  })}

🌐 *Source:* Tokkatot Website
  `.trim();

  return new Promise((resolve, reject) => {
    const payload = {
      chat_id: TELEGRAM_CHAT_ID,
      text: telegramMessage,
      parse_mode: 'Markdown',
    };

    // Add message_thread_id if topic is configured
    if (TELEGRAM_TOPIC_ID) {
      payload.message_thread_id = parseInt(TELEGRAM_TOPIC_ID);
    }

    const postData = JSON.stringify(payload);

    const options = {
      hostname: 'api.telegram.org',
      path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const response = JSON.parse(data);
          if (response.ok) {
            resolve(response);
          } else {
            reject(new Error(`Telegram API error: ${JSON.stringify(response)}`));
          }
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

// Contact form submission endpoint
app.post('/api/telegram', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        required: ['name', 'email', 'message']
      });
    }

    // Log the submission (optional)
    console.log(`📨 New contact form submission from: ${name} <${email}>`);

    // Send to Telegram
    await sendToTelegram({ name, email, phone, message });

    console.log('✅ Message sent to Telegram successfully');

    // Success response
    res.json({ 
      success: true, 
      message: 'Message sent successfully to Telegram' 
    });

  } catch (error) {
    console.error('❌ Error sending to Telegram:', error.message);

    res.status(500).json({ 
      error: 'Failed to send message',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Test endpoint for Telegram connection
app.get('/api/telegram/test', async (req, res) => {
  try {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return res.status(500).json({ 
        error: 'Telegram not configured',
        message: 'Please set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env file'
      });
    }

    const testMessage = {
      name: 'Test User',
      email: 'test@tokkatot.com',
      phone: '+855 12 345 678',
      message: 'This is a test message to verify the Telegram integration is working correctly.'
    };

    await sendToTelegram(testMessage);

    res.json({ 
      success: true, 
      message: 'Test message sent to Telegram! Check your group.' 
    });

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    res.status(500).json({ 
      error: 'Test failed',
      details: error.message
    });
  }
});

// Serve React app for all other routes (SPA support)
// Temporarily disabled for testing - will enable after build
// app.get('/*', (req, res) => {
//   res.sendFile(join(__dirname, 'dist', 'index.html'));
// });

// Start server
app.listen(PORT, () => {
  console.log('');
  console.log('🚀 Tokkatot Website Server');
  console.log('================================');
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`🌐 Website: http://localhost:${PORT}`);
  console.log(`📡 API: http://localhost:${PORT}/api/telegram`);
  console.log('');
  
  if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
    console.log('🤖 Telegram Bot: ✅ Configured');
    console.log(`   Token: ${TELEGRAM_BOT_TOKEN.substring(0, 20)}...`);
    console.log(`   Chat ID: ${TELEGRAM_CHAT_ID}`);
    if (TELEGRAM_TOPIC_ID) {
      console.log(`   Topic ID: ${TELEGRAM_TOPIC_ID} (Sending to specific topic)`);
    } else {
      console.log(`   Topic ID: Not set (Sending to main chat)`);
    }
    console.log('');
    console.log('💡 Test Telegram: http://localhost:' + PORT + '/api/telegram/test');
  } else {
    console.log('⚠️  Telegram Bot: Not configured');
    console.log('   Run: setup-telegram.bat');
  }
  
  console.log('================================');
  console.log('');
  console.log('Press Ctrl+C to stop');
  console.log('');
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
