# Tokkatot Website - Copilot Notes

## Project Overview
This is a React + TypeScript landing page for **Tokkatot**, a smart automation chicken farming solution for Cambodia. The project uses Vite with Rolldown for fast builds and development.

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
│   ├── Navbar.tsx/.css           - Fixed navigation with mobile menu + language switcher
│   ├── Hero.tsx/.css             - Hero section with farmer background image & color effects
│   ├── About.tsx/.css            - Company story and stats
│   ├── Features.tsx/.css         - 4 feature cards + central hub
│   ├── Team.tsx/.css             - Team showcase with scroll animations (6 members)
│   ├── Contact.tsx/.css          - Contact info + form
│   ├── Footer.tsx/.css           - Footer with links and SVG social icons
│   └── LanguageSwitcher.tsx/.css - Language selector (EN/KM/ZH)
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
- **State**: `isScrolled` prop from parent, `mobileMenuOpen` local state
- **Features**: Smooth scroll to sections, mobile hamburger menu
- **Logo Import**: `import tokkatotLogo from '../assets/tokkatot_logo.png'`

### Hero
- **Background**: Farmer with chicken image with parallax effect (fixed attachment)
- **Color Overlays**: Multi-layered gradients using brand colors (teal, gold, coral) with animated glow
- **Content Card**: Glassmorphism container with backdrop blur for hero text
- **Key Elements**: Scroll indicator with bounce animation, gradient overlays, animated radial glows
- **CTAs**: "Explore Features" (secondary-color) and "Get in Touch" (white border)
- **Effects**: Gold text-shadow on highlights, overlay blend mode on dots pattern

### About
- **Layout**: Two-column grid (text + placeholder image)
- **Stats**: 3 stat items with emoji icons
- **Responsive**: Single column on mobile

### Features
- **Grid**: Auto-fit grid with 280px minimum
- **Animation**: Intersection Observer for fade-in on scroll
- **Icons**: Custom SVG icons per feature (color-coded)
- **Central Hub**: Special section with gradient background

### Team
- **Layout**: Alternating left/right grid layout for visual interest
- **Background**: Chicken background image with parallax (fixed attachment) and color overlay
- **Members**: 6 co-founders with transparent portrait PNGs
- **Animation**: Scroll-based reveal - images become clearest when centered on screen
- **Effects**: 
  - Glassmorphism cards with backdrop-filter blur and multi-layered shadows
  - Pulsing glow halos around portraits (5s animation with rotation)
  - Animated gradient timeline down center (teal → gold → coral)
  - Hover effects: card lift, image scale+lift, border glow, underline expand
  - Gradient fade at portrait bottom to hide cut-off (follows image on hover)
- **Styling**: Enhanced with gradients, decorative elements, and smooth transitions
- **Team Members**:
  1. Yung Sreyneang - Co-Founder & CEO (Media/PR, executive decisions)
  2. Preap Somanith - Co-Founder & CTO (Technical decisions, embedded systems)
  3. Sophea Darika - COO (Operations, admin, R&D, frontend dev)
  4. Virak Rangsey - Co-Founder & CFO (Financial planning, business dev)
  5. Sun Heng - Co-Founder & AI Engineer (R&D hardware/systems, AI, frontend)
  6. Kaem Sreyneath - Co-Founder & Embedded Systems Engineer

### Contact
- **Form State**: Managed with React useState
- **Validation**: HTML5 required attributes
- **TODO**: Backend integration needed (currently logs to console)

### Footer
- **Sections**: Company info, quick links, social links
- **Styling**: Dark background with secondary-color headings
- **Social Icons**: Custom SVG icons for Facebook (active) and LinkedIn (coming soon)
- **Links**: Smooth scroll navigation to all sections including Team

## TechnKontumruy Font?
- **Khmer Support**: Designed specifically for Khmer script with excellent readability
- **Multi-script**: Works well with Latin (English) and Chinese characters
- **Professional**: Modern, clean appearance suitable for tech companies
- **Google Fonts**: Easy to implement and free to use

### Why i18next?
- **Industry Standard**: Most popular i18n library for React
- **Lightweight**: Minimal bundle size impact
- **Flexible**: Easy to add more languages in the future
- **React Integration**: Seamless hooks-based API
- **No Backend Required**: Translations embedded in app (can move to separate files later)

### Why ical Decisions

### Why Vite + React + TypeScript?
- **Vite**: Lightning-fast HMR and optimized builds
- **React**: Component reusability, potential for future expansion (dashboard, auth)
- **TypeScript**: Type safety, better IDE support, fewer runtime errors

### Dependencies
```json
"dependencies": {
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "i18next": "^23.x",
  "react-i18next": "^14.x"
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
npm run dev      # Start dev server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

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
1. **Backend Integration**: Connect contact form to email service or API
2. **Team Member Links**: Add LinkedIn/social profiles to team member cards
3. **Video Background**: Consider video backgrounds for Hero/Team sections
4. **Testimonials**: Add section with farmer testimonials
5. **Case Studies**: Showcase successful implementations

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

## Contact Information
Official contact details:
- **Email**: tokkatot@outlook.com
- **Phone**: +855 61 747 269
- **CEO**: Yung Sreyneang
- **Location**: Phnom Penh, Cambodia
- **Social Media**: 
  - Facebook: https://www.facebook.com/profile.php?id=61562440490014
  - LinkedIn: Coming Soon

## IMultilingual Content
- All user-facing text uses translation keys (t('key'))
- To add new language: Add to `resources` object in `i18n.ts`
- Translation keys are organized by section for easy maintenance
- Khmer translations use proper Unicode Khmer script
- Chinese uses Simplified Chinese (可以改为繁体中文 if needed)- **Font Switching**: Automatic based on language - App.tsx updates `html[lang]` attribute, CSS applies appropriate font
### Language Switcher
- Desktop: Displays horizontally in navbar next to navigation links
- Mobile: Displays in mobile menu below navigation items
- Active language highlighted with primary color background
- Buttons show native script (EN, ខ្មែរ, 中文) for clarity

### mportant Notes for Future Development

### Logo & Branding
- Logo file: `src/assets/tokkatot_logo.png`
- Imported in Navbar component (Height: 40px)
- Used as favicon in index.html
- Page title: "Tokkatot - Smart Chicken Farming"

### Color Usage Guidelines
- Primary (#20A39E): Main headings, icons, hover states
- Secondary (#FFBA49): CTAs, important highlights
- Accent (#EF5B5B): Alerts, disease detection icon
- Use CSS variables consistently

### Form Submission
The contact form currently:
1. Prevents default submission
2. Logs data to console
3. Shows browser alert
4. Resets form

**TODO**: Implement actual backend
- Options: Formspree, EmailJS, custom API endpoint
- Add loading state during submission
- Add success/error toast notifications
- Consider CAPTCHA for spam prevention

### Responsive Breakpoints
- Mobile: 0-640px
- Tablet: 641-968px
- Desktop: 969px+

### Animation Timings
- Page transitions: 0.3s ease
- Hover effects: 0.3s ease
- Scroll animations: 0.6s ease with staggered delays
- Bounce animation: 2s infinite

## Deployment Recommendations

### Build Output
```bash
npm run build
# Outputs to: dist/
```


## Maintenance

### Regular Updates
- Keep dependencies updated (`npm update`)
- Monitor security vulnerabilities (`npm audit`)
- Test on different devices and browsers
- Backup before major changes

### Content Updates
Most content can be updated directly in component files:
- Hero text: `Hero.tsx`
- About content: `About.tsx`
- Features: `Features.tsx` (featuresData array)
- Contact info: `Contact.tsx`

---

**Last Updated**: December 22, 2025
**Version**: 1.0.0
**Tech Stack**: React 19.2, TypeScript 5.9, Vite 7.2 (Rolldown), i18next
**Sections**: Navbar, Hero, About, Features, Team, Contact, Footer
**Languages**: English, Khmer (ខ្មែរ), Chinese (中文)
