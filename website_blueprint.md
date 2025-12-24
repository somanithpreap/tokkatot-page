# Tokkatot Website - Complete Documentation

## Project Overview
This is a React + TypeScript landing page for **Tokkatot**, a smart automation chicken farming solution for Cambodia. The project uses Vite with Rolldown for fast builds and development, Express.js backend for API, and features a modern iOS-inspired glassmorphism design throughout.

## Latest Updates (December 2025)

### Major Design Overhaul
1. **Navbar**: Redesigned with iOS-style glassmorphism
   - Frosted glass background with 20px backdrop blur
   - Modern button styling with equal proportions
   - iOS segmented control for language switcher
   - Enhanced mobile menu with glassmorphic styling

2. **Features Section**: Completely redesigned
   - Zigzag timeline layout (alternating left-right)
   - Multi-column background image grid
   - Smoky dark overlay for atmosphere
   - Content elevated above background (z-index layering)

3. **About Section**: Horizontal scrolling redesign
   - Auto-scrolling card carousel on left
   - Static visual with farm image on right
   - Heavy smoky overlay on award_night.jpg background
   - Glowing, bright content for 3D spatial illusion

4. **Team Section**: Dark greenish theme transformation
   - Changed from white to atmospheric dark green
   - Floating portrait effect with yellow glowing platforms
   - Internal smoke effect for smooth image fading
   - Light green/white background glow for depth
   - Removed portrait hard cuts with mask-image fading

5. **Contact Section**: Modern glassmorphic redesign
   - Chickenfarm_khmer.jpg as faded background
   - Smoky greenish animated overlay
   - iOS-style glassmorphism form (40px blur, 180% saturation)
   - Animated SVG icons (email, phone, location)
   - Interactive contact cards with hover effects
   - Click-to-copy phone number with visual feedback
   - Enhanced, fully-fitted input fields

6. **Footer**: Consistent dark theme
   - Dark greenish gradient background
   - Animated social media icons with pulse effects
   - Matching atmospheric styling

7. **Language Switcher**: iOS segmented control
   - Equal-sized buttons with min-width
   - Glassmorphic container with backdrop blur
   - Active state with frosted white pill
   - Smooth animations and transitions

### Technical Improvements
- Enhanced z-index management for layering
- Advanced CSS mask-image for edge fading
- Complex gradient combinations (radial + linear)
- Backdrop-filter for glassmorphism effects
- Keyframe animations for atmospheric effects
- Clipboard API integration for phone copy
- Form state management with loading states

## Key Information

### About Tokkatot
- **Mission**: Student-led initiative to make IoT, AI, and automation accessible to small and medium-sized chicken farms in Cambodia
- **Goal**: Reduce dependency on expensive imported agri-tech solutions
- **Target Market**: Small to medium-sized chicken farms in Cambodia
- **Value Proposition**: Affordable alternative to industrial-grade components

### Core Features (4 main systems)
1. **Climate Control** - Temperature and humidity monitoring with automatic regulation
2. **Auto Feeding & Watering** - Programmable feeding schedules and water level monitoring
3. **Manure Conveyor System** - Automated waste removal for improved hygiene
4. **AI Disease Detection** - Real-time fecal image analysis to detect disease outbreaks early

### Central Hub System
- Locally hosted on each farm
- Accessible via smartphone through web dashboard
- Real-time monitoring and control

## Design System

### Brand Colors
```css
--primary-color: #20A39E   /* Teal - main brand color */
--secondary-color: #FFBA49 /* Gold - CTAs and highlights */
--accent-color: #EF5B5B    /* Coral - alerts and attention */
--white: #FEFEFE           /* Power white - softer than pure white */
```

### Typography
- **Font Families**: Language-specific fonts for optimal readability
  - **English**: 'Inter' - Clean, modern sans-serif perfect for tech/professional content
  - **Khmer (ខ្មែរ)**: 'Kontumruy' - Designed specifically for Khmer script
  - **Chinese (中文)**: 'Noto Sans SC' - Google's open-source font optimized for Simplified Chinese
- **Weights Used**: 300, 400, 500, 600, 700, 800 (all fonts)
- **Implementation**: CSS uses `html[lang="xx"]` selector to apply appropriate font based on active language
- **Fallbacks**: 
  - English: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
  - Khmer: 'Noto Sans Khmer'
  - Chinese: 'PingFang SC', 'Microsoft YaHei'

### Design Principles
- Clean, modern, professional aesthetic
- Mobile-first responsive design
- Smooth animations and transitions
- Accessibility-focused (ARIA labels, semantic HTML)
- Glassmorphism effects with backdrop filters
- Parallax backgrounds for depth
- Scroll-based animations for engagement
- Multi-layered color overlays matching brand theme

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx/.css             - Fixed navigation with mobile menu + language switcher
│   ├── Hero.tsx/.css               - Modern hero with badges, parallax, animated scroll indicator
│   ├── About.tsx/.css              - Company story with animated stat cards & SVG illustrations
│   ├── Features.tsx/.css           - 4 color-coded feature cards + central hub with glassmorphism
│   ├── AnimatedIcons.tsx/.css      - Professional animated SVG icons (5 components)
│   ├── Team.tsx/.css               - Team showcase with scroll animations (6 members)
│   ├── Contact.tsx/.css            - Contact form with Telegram integration & loading states
│   ├── Footer.tsx/.css             - Footer with links and SVG social icons
│   └── LanguageSwitcher.tsx/.css   - Language selector (EN/KM/ZH)
├── assets/
│   ├── tokkatot_logo.png                      - Company logo (also used as favicon)
│   ├── farmer_with_chicken_background_image.jpg - Hero section background
│   ├── chicken_background_image.jpg            - Team section background
│   ├── yung_sreyneang.png                     - CEO portrait
│   ├── preap_somanith.png                     - CTO portrait
│   ├── sophea_darika.png                      - COO portrait
│   ├── virak_rangsey.png                      - CFO portrait
│   ├── sun_heng.png                           - AI Engineer portrait
│   └── kaem_sreyneath.png                     - Embedded Systems Engineer portrait
├── i18n.ts                        - i18next configuration with 3 languages
├── App.tsx                        - Main app component
├── App.css                        - Global styles and variables
├── index.css                      - Base reset styles
└── main.tsx                       - Entry point

### Supported Languages
- **English (en)** - Default language
- **Khmer (km)** - Native Cambodian language
- **Chinese (zh)** - Simplified Chinese for broader regional appeal

### Implementation, language switcher
- **Logo Import**: `import tokkatotLogo from '../assets/tokkatot_logo.png'`
- **Languages**: Desktop switcher (top-right), mobile switcher (in menu)
- **Translation**: All nav items use t('nav.*')
- **Translation Files**: Located in `src/i18n.ts` as embedded resources
- **Language Switcher**: Available in navbar (desktop) and mobile menu
- **Persistent**: Can be enhanced to save language preference to localStorage

### Translation Structure
All translations are organized by section:
- `nav.*` - Navigation items (includes Team link)
- `hero.*` - Hero section content
- `about.*` - About section content
- `features.*` - All 4 features + central hub
- `team.*` - Team section with all 6 member details
  - `member1-6.name` - Member names
  - `member1-6.role` - Member positions
  - `member1-6.bio` - Member responsibilities
- `contact.*` - Contact section + form labels
- `footer.*` - Footer content

### Usage in Components
```typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t('nav.home')}</h1>;
};
```

##  main.tsx                       - Entry point
```

## Component Details

### Navbar
- **Design**: iOS-style glassmorphism with frosted glass effect
- **Background**: `rgba(255, 255, 255, 0.7)` with 20px backdrop blur
- **Features**: 
  - Equal-sized nav buttons with consistent padding (0.625rem × 1.25rem)
  - Hover effects: lift animation + glassmorphic background
  - Mobile hamburger menu with full glassmorphic overlay
  - Sticky positioning with enhanced shadow on scroll
- **State**: `isScrolled` prop from parent, `mobileMenuOpen` local state
- **Logo**: `tokkatot_logo.png` at 40px height

### Language Switcher
- **Design**: iOS segmented control style
- **Container**: Glassmorphic background with backdrop blur
- **Buttons**: 
  - Min-width: 60px for equal sizing
  - Active state: frosted white pill with shadow
  - Smooth transitions and hover lift effects
- **Implementation**: Each button has `::before` pseudo-element for pill effect

### Hero
- **Background**: Farmer with chicken image with parallax particles effect
- **Modern Elements**: 
  - Feature badge with glassmorphism and shimmer animation
  - Quick features inline (24/7 Monitoring, AI-Powered, Locally Hosted) with icons
  - Animated gradient text effects on headings
  - Interactive buttons with ripple effects and animated underlines
  - Animated scroll indicator with mouse icon and pulsing animations
- **CTAs**: "Explore Features" (gradient primary) and "Contact Us" (glass border)
- **Effects**: 
  - Parallax background with floating particles
  - Glassmorphism cards with backdrop blur
  - Gradient text animations (shimmer, pulse)
  - Button hover effects (lift, ripple, underline expand)
  - Scroll mouse animation (wheel scroll + bounce)

### About
- **Layout**: Horizontal split - scrolling cards (left) + static visual (right)
- **Scrolling Cards**: 
  - Auto-scrolling carousel with infinite loop
  - Each card has glassmorphic styling
  - Smooth animation with CSS transforms
- **Static Visual**: 
  - Right side with our_testing.JPG image
  - Heavy smoky overlay for atmospheric effect
  - Glowing content for 3D spatial depth
- **Background**: award_night.jpg with heavy smoky greenish overlay
- **Effects**: Bright, glowing text and cards appear to float above dark background

### Features
- **Layout**: Zigzag timeline (alternating left-right)
- **Background**: Multi-column grid of chicken farm images
  - Images: award_night.jpg, chickenfarm_khmer.jpg, our_testing.jpg, etc.
  - Dark smoky overlay for cohesion
  - Lower z-index to keep content sharp
- **Animation**: Intersection Observer for fade-in on scroll
- **Icons**: Professional animated SVG icons (AnimatedIcons.tsx)
  - ClimateControlIcon: Thermometer with rising mercury animation
  - AutoFeedingIcon: Rotating dispenser with falling particles
  - ManureConveyorIcon: Moving conveyor belt animation
  - AIDiseaseDetectionIcon: Scanning beam with neural network nodes
  - CentralHubIcon: Expanding connectivity waves
- **Color Coding**:
  - Climate Control: Primary (#20A39E) - Teal
  - Auto Feeding: Secondary (#FFBA49) - Gold  
  - Manure Conveyor: Accent (#EF5B5B) - Coral
  - AI Disease Detection: Purple gradient
- **Card Effects**:
  - Glassmorphism with backdrop blur
  - Hover lift animation (translateY -10px)
  - Color-coded borders that expand on hover
  - Glow effects matching icon colors
- **Content Z-index**: Set to 5 to stay above background images

### Team
- **Theme**: Dark greenish atmospheric design
- **Background**: Chicken background with parallax + dark green gradient overlay
- **Layout**: Alternating left/right grid for visual interest
- **Members**: 6 co-founders with portrait images
- **Portrait Effects**:
  - Floating appearance on yellow glowing platforms
  - Internal smoke effect (bottom 45%, fades at edges with mask-image)
  - Light green/white radial gradient glow behind image
  - Yellow platform bar at bottom (100% width, 8px height)
  - Smooth edge fading with linear gradient masks
- **Cards**: 
  - Glassmorphism with backdrop blur
  - Dark teal/green background (rgba(20, 40, 39, 0.6))
  - Enhanced text contrast with white color
- **Hover Effects**: 
  - Portrait lift and scale
  - Smoke effect translation
  - Card shadow enhancement
- **Team Members**:
  1. Yung Sreyneang - Co-Founder & CEO
  2. Preap Somanith - Co-Founder & CTO
  3. Sophea Darika - COO
  4. Virak Rangsey - Co-Founder & CFO
  5. Sun Heng - Co-Founder & AI Engineer
  6. Kaem Sreyneath - Co-Founder & Embedded Systems Engineer

### Contact
- **Background**: chickenfarm_khmer.jpg with smoky greenish overlay
  - Animated smoky flow effect (15s infinite)
  - Radial gradients for atmospheric depth
- **Form Design**: Premium iOS glassmorphism
  - Background: `rgba(20, 40, 39, 0.4)` with 40px backdrop blur
  - Enhanced shadow and border for depth
  - Gradient border effect with pseudo-element
- **Contact Cards**: Interactive glassmorphic cards
  - Glassmorphic background matching form
  - Animated SVG icons (email, phone, location)
  - Hover effects: slide right, glow, lift
  - Email: Opens mailto link
  - Phone: Copies to clipboard with "Copied!" notification
  - Location: Static display
- **Form Fields**: 
  - Larger padding (1rem × 1.25rem)
  - Enhanced font size (1.05rem)
  - White text on dark glassmorphic background
  - Yellow glow on focus
  - Proper box-sizing for full width
  - Textarea: 150px minimum height
- **State Management**: 
  - `formData` for input values
  - `isSubmitting` for loading state
  - `submitStatus` for success/error messages
  - `phoneCopied` for clipboard feedback
- **API Integration**: 
  - POST to `/api/telegram`
  - Telegram Bot sends to group's "Messages" topic
  - Modern glassmorphic submit button with:
    - Gradient background with blur effect
    - Shimmer animation on hover
    - Professional SVG icons (no emojis)
    - Color states: Gold (ready) → Teal (sending)
    - Smooth cubic-bezier transitions
  - Status messages with glassmorphic cards and slide-down animation
  - Loading spinner and success/error alerts

### Footer
- **Design**: Dark greenish theme matching site
- **Background**: Linear gradient (#0a1d1d to #0d2626)
- **Effects**: 
  - Glowing top border (green gradient)
  - Radial gradient overlays for atmosphere
- **Social Links**: 
  - Glassmorphic circular buttons
  - Animated pulse effect on hover
  - Gradient glow animation
  - Facebook (active), LinkedIn (coming soon)
- **Layout**: Three columns - company info, quick links, social
- **Styling**: Consistent with overall dark greenish aesthetic

## CSS Techniques & Modern Features

### Glassmorphism Implementation
```css
/* iOS-style frosted glass */
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(20px) saturate(180%);
-webkit-backdrop-filter: blur(20px) saturate(180%);
border: 1px solid rgba(255, 255, 255, 0.3);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
```

### Edge Fading with Mask
```css
/* Smooth edge fading for images */
mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
```

### Z-Index Layering Strategy
```
Layer 5: Content (text, cards, buttons)
Layer 3: Floating elements (platforms, badges)
Layer 2: Overlays (smoke, gradients)
Layer 1: Images (portraits, backgrounds)
Layer 0: Base backgrounds
Layer -1: Glow effects behind elements
```

### Multi-Layer Backgrounds
```css
background: 
    linear-gradient(overlay gradient),
    radial-gradient(atmospheric glow),
    url('background-image.jpg');
```

### Animated Atmospheric Effects
```css
@keyframes smokyFlow {
    0%, 100% { opacity: 1; transform: translateY(0); }
    50% { opacity: 0.8; transform: translateY(-10px); }
}
```

### Hover Lift Pattern
```css
.element {
    transition: all 0.3s ease;
}
.element:hover {
    transform: translateY(-2px);
    box-shadow: enhanced shadow;
}
```

### Glassmorphic Borders
```css
/* Gradient border effect with pseudo-element */
.element::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}
```

### Dependencies
```json
"dependencies": {
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "i18next": "^23.x",
  "react-i18next": "^14.x",
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1"
}
```
- Currently using local component state (useState)
- No global state management needed yet
- Consider Context API or Zustand if adding user authentication or complex state

### Styling Approach
- CSS Modules per component (component-specific styles)
- Global CSS variables in App.css
- No CSS-in-JS library to keep bundle small
- Mobile-first responsive design with media queries

## Development Notes

### Running the Project
```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Build React app for production (outputs to dist/)
npm start        # Start Express production server (serves dist/ + API)
npm run server   # Alias for npm start
```

### Production Server (Express)
- Serves built React app from `/dist` folder
- API endpoints:
  - `POST /api/telegram` - Contact form submissions
  - `GET /api/telegram/test` - Test Telegram connection
  - `GET /api/health` - Server health check
- Default port: 3000 (configurable via PORT env variable)
- Uses PM2 for process management in production

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features used
- CSS Grid and Flexbox for layout

### Performance Considerations
- Intersection Observer for animation triggers (better than scroll events)
- Lazy loading can be added for images in future
- SVG icons are inline (no extra HTTP requests)

## Future Enhancements

### High Priority
1. **Team Member Links**: Add LinkedIn/social profiles to team member cards
2. **Video Background**: Consider video backgrounds for Hero/Team sections
3. **Testimonials**: Add section with farmer testimonials
4. **Case Studies**: Showcase successful implementations
5. **Rate Limiting**: Add rate limiting to contact form API to prevent spam

### Medium Priority (track language usage)
2. **Chat Widget**: Live chat for immediate support (multilingual)
3. **Pricing Page**: If offering different tiers
4. **Dashboard Preview**: Screenshots or demo of the farmer dashboard
5. **More Languages**: Thai, Vietnamese for regional expansion
6. **Translation Management**: Move to external JSON files or CMS
4. **FAQ Section**: Common questions about installation, pricing, support
5. **Multi-language**: Khmer language support for local farmers

### Low Priority
1. **Analytics**: Google Analytics or similar
2. **Chat Widget**: Live chat for immediate support
3. **Pricing Page**: If offering different tiers
4. **Dashboard Preview**: Screenshots or demo of the farmer dashboard

## SEO Recommendations
- Add meta descriptions to index.html
- Include Open Graph tags for social sharing
- Add structured data (Schema.org) for local business
- Create sitemap.xml
- Optimize images (WebP format, proper sizing)
- Add robots.txt

## Backend Integration (Telegram Bot) ✅

### Status: CONFIGURED AND TESTED
- **Bot**: @tokkatot_pigeon_bot
- **Target**: Tokkatot Team → Messages topic
- **Test Status**: ✅ Passed

### Architecture
- **Server**: Express.js (server.js)
- **Deployment**: Home server with Cloudflare (DNS, CDN, SSL, DDoS protection)
- **Process Manager**: PM2 for production (auto-restart, logging, monitoring)
- **Environment**: `.env` file for sensitive configuration (not committed to Git)

### Configuration (COMPLETED)
The Telegram bot is fully configured with:
- Bot Token: ✅ Configured in `.env`
- Chat ID: ✅ Configured in `.env`
- Topic ID: 10431 (Messages topic)

### Development Configuration
**Vite Proxy Setup** (vite.config.ts):
```typescript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
    }
  }
}
```
This forwards API requests from Vite dev server (5173) to Express backend (3000).

**For Deployment**: Simply copy the `.env` file to production server.

### API Implementation
- **Endpoint**: `POST /api/telegram`
- **Method**: Direct HTTPS request to Telegram Bot API (no external libraries)
- **Format**: Markdown-formatted message with emoji icons
- **Response**: JSON with success/error status
- **Error Handling**: Graceful degradation with user-friendly messages

### Message Format
```
🔔 New Contact Form Submission

👤 Name: [name]
📧 Email: [email]
📱 Phone: [phone]

💬 Message:
[message]

🕐 Time: [timestamp]
🌐 Source: Tokkatot Website
```

### Security
- Environment variables for sensitive data
- CORS configured for production domain
- Bot token never exposed to client
- HTTPS enforced via Cloudflare

## Contact Information
Official contact details:
- **Email**: tokkatot.info@gmail.com
- **Phone**: +855 61 747 269 (click-to-copy on website)
- **CEO**: Yung Sreyneang
- **Location**: Phnom Penh, Cambodia
- **Social Media**: 
  - Facebook: https://www.facebook.com/profile.php?id=61562440490014
  - LinkedIn: Coming Soon

## Key Image Assets

### Background Images
- `farmer_with_chicken_background_image.jpg` - Hero section
- `chickenfarm_khmer.jpg` - Contact section background + Features grid
- `award_night.jpg` - About section background + Features grid
- `chicken_background_image.jpg` - Team section (deprecated, now using gradient)
- `our_testing.JPG` - About section right side + Features grid

### Team Portraits
- `yung_sreyneang.png` - CEO
- `preap_somanith.png` - CTO
- `sophea_darika.png` - COO
- `virak_rangsey.png` - CFO
- `sun_heng.png` - AI Engineer
- `kaem_sreyneath.png` - Embedded Systems Engineer

### Logo & Branding
- `tokkatot_logo.png` - Used in navbar and as favicon

## Design Philosophy

### Color Psychology
- **Teal (#20A39E)**: Trust, technology, innovation
- **Gold (#FFBA49)**: Premium quality, success, energy
- **Coral (#EF5B5B)**: Urgency, attention, warmth
- **Dark Green Background**: Natural, sustainable, professional

### Visual Hierarchy
1. **Bright glowing content** on dark backgrounds (3D spatial illusion)
2. **Glassmorphism** for modern premium feel
3. **Animated elements** for engagement and interactivity
4. **Consistent spacing** and proportions throughout

### Animation Principles
- **Subtle and purposeful**: Enhance UX without distraction
- **Performance-first**: GPU-accelerated transforms
- **Accessible**: Respects user motion preferences
- **Consistent timing**: 0.3s for most transitions

---

**Last Updated**: December 24, 2025
**Version**: 2.1.0
**Tech Stack**: React 19.2, TypeScript 5.9, Vite 7.2, Express 4.18, i18next
**Sections**: Navbar, Hero, About, Features, Team, Contact, Footer
**Languages**: English, Khmer (ខ្មែរ), Chinese (中文)
**Design**: iOS-inspired glassmorphism with dark greenish atmospheric theme
**Features**: Animated SVG icons, Telegram bot, click-to-copy phone, horizontal carousel, zigzag timeline
**Deployment**: Home server + Cloudflare with PM2 process management
