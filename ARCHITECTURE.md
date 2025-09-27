# Architecture Documentation

## Overview

The Ronin Automotiva landing page is built using a modern React architecture with TypeScript and styled-components. This document outlines the architectural decisions and component structure.

## Component Architecture

### Component Hierarchy
```
App
├── Header (Navigation)
├── About (Hero Section)
├── Services (Service List + Video)
├── Team (Team Information)
├── Footer (Contact Form)
├── Social (Social Media Links)
└── Copyright Footer
```

### Data Flow

The application follows a simple top-down data flow pattern:

1. **Static Content**: Most content is hardcoded within components for simplicity
2. **Form State**: Managed locally within the Footer component using React hooks
3. **Navigation**: Uses anchor links for smooth scrolling between sections

## Component Details

### Header Component
```
Features:
- Responsive navigation menu
- Mobile hamburger menu (768px breakpoint)
- Smooth scroll navigation
- Company logo display
- Call-to-action button

State Management:
- isMobile: boolean (window resize listener)
- isOpen: boolean (mobile menu toggle)
```

### About Component
```
Features:
- Hero section with background image
- Company tagline and specialization
- Responsive typography

Assets:
- banner.png (hero background image)
```

### Services Component
```
Features:
- Service list with detailed descriptions
- Embedded video player
- Responsive layout (mobile: column, desktop: row)

Assets:
- video.mp4 (promotional video)
```

### Team Component
```
Features:
- Company expertise description
- Professional team information
- Responsive text sizing
```

### Footer Component
```
Features:
- Contact form with validation
- WhatsApp integration
- Appointment scheduling information

State Management:
- name: string
- car: string  
- problem: string

External Integration:
- WhatsApp Business API
- Phone: +55 11 99004-7545
```

### Social Component
```
Features:
- Instagram profile links
- Company branding
- Thank you message

External Links:
- @ronin_automotiva
- @vzdrs
```

## Styling Architecture

### Styled Components Pattern
```typescript
// Component definition
const StyledComponent = styled.div`
  /* Base styles */
  
  @media (max-width: 768px) {
    /* Mobile styles */
  }
`;
```

### Responsive Breakpoints
- **Mobile**: max-width: 768px
- **Desktop**: min-width: 769px

### Design System

#### Colors
```css
--primary-bg: #0a0a0a;    /* Dark background */
--text-primary: #fff;      /* White text */
--accent-red: #9f0b0b;     /* CTA buttons */
--accent-blue: #007bff;    /* Form elements */
```

#### Typography
- **Font Family**: Alegreya Sans SC
- **Weights**: 100, 300, 400, 500, 700, 800, 900
- **Responsive Scaling**: Desktop → Mobile (50px → 30px for headers)

#### Spacing
- **Container Max Width**: 1920px
- **Mobile Padding**: 1rem
- **Desktop Padding**: 2rem

## Performance Considerations

### Image Optimization
- PNG format for logos and icons
- Background images loaded via CSS
- Responsive image sizing

### Video Optimization
- MP4 format for compatibility
- Preload attribute for faster loading
- Controls and muted for user experience
- Responsive sizing based on screen size

### Code Splitting
- Component-based architecture allows for future code splitting
- Vite handles bundling optimization

## SEO & Accessibility

### SEO Features
- Semantic HTML structure
- Meta descriptions and keywords
- Google site verification
- Structured section IDs for navigation

### Accessibility
- Semantic HTML elements (header, main, footer)
- Alt text for images
- Keyboard navigation support
- Screen reader friendly structure

## Future Improvements

### Potential Enhancements
1. **Content Management**
   - Add CMS integration for dynamic content
   - Environment-based configuration

2. **Performance**
   - Image lazy loading
   - Video lazy loading
   - Progressive Web App features

3. **Analytics**
   - Google Analytics integration
   - Form submission tracking

4. **Internationalization**
   - Multi-language support
   - Locale-based content

5. **Enhanced Interactions**
   - Smooth animations
   - Scroll-triggered animations
   - Enhanced form validation

## Development Workflow

### Component Development
1. Create styled components
2. Implement responsive breakpoints
3. Add TypeScript interfaces if needed
4. Test on multiple screen sizes

### Asset Management
- Store static assets in `src/assets/`
- Optimize images before adding
- Use appropriate file formats

### State Management
- Use local component state for simple interactions
- Consider Context API for complex shared state