# Ronin Automotiva - Landing Page

A professional landing page for Ronin Automotiva, a specialized Honda classic car maintenance shop in Brazil. Built with React, TypeScript, and styled-components.

![Ronin Automotiva Landing Page](https://github.com/user-attachments/assets/e2e64a34-cbdc-4cd7-a6f9-b3c429b8b1be)

## 🚗 About

Ronin Automotiva specializes in classic Honda vehicles from the 70s to 2000s, including:
- Honda Prelude
- Honda Civic
- Honda CRX
- Honda Del Sol

The landing page showcases their services, team expertise, and provides a contact form for appointment scheduling.

## 🛠 Tech Stack

- **Framework**: React 18.3.1
- **Language**: TypeScript 5.6.2
- **Styling**: styled-components 6.1.14
- **Icons**: react-icons 5.4.0
- **Build Tool**: Vite 6.0.5
- **Linting**: ESLint with TypeScript support

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/guim0/ronin-lp.git
cd ronin-lp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Project Structure

```
src/
├── components/
│   ├── Header.tsx      # Navigation header with mobile menu
│   ├── About.tsx       # Hero section with company description
│   ├── Services.tsx    # Services list with promotional video
│   ├── Team.tsx        # Team information section
│   ├── Footer.tsx      # Contact form and quote request
│   └── Social.tsx      # Social media links and footer
├── assets/
│   ├── banner.png      # Hero section background
│   ├── logo.png        # Company logo
│   ├── instagram.png   # Instagram icon
│   └── video.mp4       # Services promotional video
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 📱 Features

### Responsive Design
- Mobile-first approach with hamburger menu
- Responsive breakpoints for desktop and mobile
- Optimized layout for all screen sizes

### Interactive Components
- **Header**: Navigation with smooth scrolling to sections
- **About**: Hero section with company branding
- **Services**: Service list with embedded video player
- **Team**: Professional team description
- **Footer**: Contact form with WhatsApp integration
- **Social**: Instagram links and company social media

### WhatsApp Integration
The contact form automatically formats and sends messages to WhatsApp with:
- Customer name
- Car model
- Service request details

## 🎭 Component API

### Header Component
- Responsive navigation menu
- Mobile hamburger menu
- Smooth scroll navigation links
- Call-to-action button

### Services Component
- Service list with descriptions
- Embedded MP4 video player
- Responsive video sizing

### Footer Component
```tsx
// Contact form with state management
const [name, setName] = useState<string>("");
const [car, setCar] = useState<string>("");
const [problem, setProblem] = useState<string>("");
```

### Social Component
- Instagram profile links
- Company branding
- Contact information

## 🎨 Styling

The project uses styled-components for CSS-in-JS styling with:
- Consistent color scheme (dark theme)
- Typography using Alegreya Sans SC font
- Responsive breakpoints at 768px
- Hover effects and transitions

### Color Palette
- Background: `#0a0a0a` (Dark black)
- Text: `#fff` (White)
- Accent: `#9f0b0b` (Red for CTA buttons)
- Form: `#007bff` (Blue for form elements)

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 🔧 Configuration

### SEO Optimization
The `index.html` includes:
- Meta descriptions for Honda classic car services
- Keywords for search engine optimization
- Google site verification
- Social media meta tags

### Performance
- Video preloading with controls
- Optimized image assets
- Code splitting with Vite
- Font loading optimization

## 📞 Contact Integration

The contact form integrates with WhatsApp Business API:
- Phone: +55 11 99004-7545
- Automatic message formatting
- Opens WhatsApp in new window

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is proprietary software for Ronin Automotiva.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)
