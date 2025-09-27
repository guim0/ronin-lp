# Development Guide

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Git

### Local Development Setup

1. **Clone and install**:
```bash
git clone https://github.com/guim0/ronin-lp.git
cd ronin-lp
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Open browser**: Navigate to `http://localhost:5173`

### Development Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload
npm run preview      # Preview production build locally

# Building
npm run build        # Build for production
npm run lint         # Run ESLint

# Dependencies
npm install          # Install all dependencies
npm audit            # Check for security vulnerabilities
```

## Code Style & Standards

### TypeScript Configuration
- Strict mode enabled
- Path mapping configured
- React types included

### ESLint Rules
- TypeScript ESLint recommended rules
- React hooks rules
- React refresh rules

### Component Structure
```typescript
import React from "react";
import styled from "styled-components";

// Interfaces (if needed)
interface ComponentProps {
  // prop definitions
}

// Main component
const ComponentName: React.FC<ComponentProps> = ({ props }) => {
  // hooks and state
  // event handlers
  // render logic
  
  return (
    <Container>
      {/* JSX */}
    </Container>
  );
};

// Styled components
const Container = styled.div`
  /* styles */
  
  @media (max-width: 768px) {
    /* mobile styles */
  }
`;

export default ComponentName;
```

### Styling Guidelines

#### Responsive Design
- Mobile-first approach
- Breakpoint at 768px
- Use max-width for mobile, min-width for desktop

```css
/* Mobile first - base styles */
font-size: 24px;

/* Desktop styles */
@media (min-width: 768px) {
  font-size: 32px;
}
```

#### Naming Conventions
- PascalCase for components
- camelCase for props and variables
- kebab-case for CSS classes (when needed)

## File Organization

### Directory Structure
```
src/
├── components/     # React components
├── assets/        # Static assets (images, videos)
├── App.tsx        # Root component
├── main.tsx       # Application entry
└── index.css      # Global styles
```

### Asset Management
- **Images**: PNG format for icons/logos, JPG for photos
- **Videos**: MP4 format for web compatibility
- **Naming**: Descriptive names in camelCase

## Component Development

### Creating New Components

1. **Create component file**:
```typescript
// src/components/NewComponent.tsx
import React from "react";
import styled from "styled-components";

const NewComponent: React.FC = () => {
  return (
    <Container>
      <Title>New Component</Title>
    </Container>
  );
};

const Container = styled.div`
  /* Component styles */
`;

const Title = styled.h2`
  /* Title styles */
`;

export default NewComponent;
```

2. **Import in App.tsx**:
```typescript
import NewComponent from "./components/NewComponent";

function App() {
  return (
    <>
      {/* other components */}
      <NewComponent />
    </>
  );
}
```

### Component Props Pattern
```typescript
interface ComponentProps {
  title?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Component: React.FC<ComponentProps> = ({
  title = "Default Title",
  children,
  onClick
}) => {
  return (
    <Container onClick={onClick}>
      <h2>{title}</h2>
      {children}
    </Container>
  );
};
```

## State Management

### Local State (useState)
```typescript
const [value, setValue] = useState<string>("");
const [isOpen, setIsOpen] = useState<boolean>(false);
```

### Form Handling
```typescript
const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
```

## Testing Guidelines

### Manual Testing Checklist
- [ ] All sections scroll smoothly
- [ ] Mobile menu opens/closes correctly
- [ ] Contact form submits to WhatsApp
- [ ] Video plays correctly
- [ ] All links work (external and internal)
- [ ] Responsive design works on multiple screen sizes

### Browser Testing
Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Mobile Safari (iOS)
- Chrome Mobile (Android)

## Performance Optimization

### Image Optimization
```bash
# Compress images before adding
# Use appropriate formats (PNG for logos, JPG for photos)
```

### Code Optimization
- Remove unused imports
- Optimize bundle size
- Use appropriate React patterns

### Loading Optimization
```typescript
// Video with preload
<video preload="auto" controls muted>
  <source src={videoSrc} type="video/mp4" />
</video>
```

## Debugging

### Common Issues

1. **Build Errors**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

2. **TypeScript Errors**:
- Check import paths
- Verify type definitions
- Ensure all dependencies are installed

3. **Styling Issues**:
- Check styled-components syntax
- Verify media query breakpoints
- Test on different screen sizes

### Development Tools
- React DevTools browser extension
- Styled Components DevTools
- Browser developer tools for responsive testing

## Deployment

### Production Build
```bash
npm run build
```

### Build Output
- Generated in `dist/` directory
- All assets optimized and bundled
- Ready for static hosting

### Deployment Platforms
- **Vercel**: Zero-config deployment
- **Netlify**: Continuous deployment from Git
- **GitHub Pages**: Free static hosting
- **Firebase Hosting**: Google's hosting platform

### Environment Variables
Currently no environment variables needed, but for future:
```bash
# .env.local
VITE_API_URL=your_api_url
VITE_PHONE_NUMBER=your_phone_number
```

## Git Workflow

### Commit Messages
- Use descriptive commit messages
- Follow conventional commits format when possible
- Examples:
  - `feat: add new contact form validation`
  - `fix: resolve mobile menu scroll issue`
  - `style: update button hover effects`

### Branch Strategy
- `main`: Production-ready code
- `develop`: Development branch
- `feature/feature-name`: New features
- `fix/issue-description`: Bug fixes

## Troubleshooting

### Common Problems
1. **Port already in use**: Change port in vite.config.ts
2. **Module not found**: Check import paths and dependencies
3. **Styling not applied**: Verify styled-components syntax
4. **Mobile menu not working**: Check state management and event handlers

### Getting Help
- Check browser console for errors
- Review TypeScript compiler messages
- Use React DevTools for component debugging