# Component API Reference

This document provides detailed information about all React components in the Ronin Automotiva landing page.

## Component Overview

The application consists of 6 main components:
- `Header` - Navigation and branding
- `About` - Hero section with company introduction
- `Services` - Service listings with video
- `Team` - Team information and expertise
- `Footer` - Contact form and quote request
- `Social` - Social media links and branding

## Components

### Header Component

**File**: `src/components/Header.tsx`

#### Purpose
Responsive navigation header with company logo, menu items, and call-to-action button.

#### Props
```typescript
// No props - self-contained component
```

#### State
```typescript
const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
const [isOpen, setIsOpen] = useState<boolean>(false);
```

#### Features
- Responsive design with mobile hamburger menu
- Smooth scroll navigation to page sections
- Window resize event listener for responsive behavior
- Company logo display
- Call-to-action button

#### Navigation Items
```typescript
const headerOptions = [
  { title: "Sobre", link: "#sobre" },
  { title: "Serviços", link: "#servicos" },
  { title: "Profissionais", link: "#time" },
  { title: "Contato", link: "#contato" },
  { title: "Orçamento", link: "#orcamento" },
];
```

#### Styled Components
- `HeaderContainer` - Main header wrapper
- `LogoContainer` - Logo wrapper with sizing
- `Links` - Desktop navigation menu
- `MobileLinks` - Mobile navigation menu with slide animation
- `Link` - Individual navigation items
- `MobileMenuIcon` - Hamburger menu toggle
- `TalkToUs` - Call-to-action button

#### Usage
```typescript
import Header from "./components/Header";

<Header />
```

---

### About Component

**File**: `src/components/About.tsx`

#### Purpose
Hero section with background image and company introduction text.

#### Props
```typescript
// No props - self-contained component
```

#### Features
- Full-width background image
- Responsive typography
- Company tagline and specialization
- Semantic HTML structure

#### Content Structure
```typescript
<Container banner={BannerIMG} id="sobre">
  <TextContainer>
    <Title>Especialistas em Veículos <b>Honda</b> Clássicos</Title>
    <SubTitle>
      Cuidado, Performance e Excelência para o seu <b>Prelude</b>,{" "}
      <b>Civic</b>, <b>CRX</b> e <b>Del Sol</b>!
    </SubTitle>
  </TextContainer>
</Container>
```

#### Styled Components
- `Container` - Main wrapper with background image prop
- `TextContainer` - Content wrapper with responsive margins
- `Title` - Main heading with responsive font sizing
- `SubTitle` - Secondary heading with responsive font sizing

#### Assets Required
- `banner.png` - Hero background image (1920x680px recommended)

#### Usage
```typescript
import About from "./components/About";

<About />
```

---

### Services Component

**File**: `src/components/Services.tsx`

#### Purpose
Service listings with promotional video in responsive layout.

#### Props
```typescript
// No props - self-contained component
```

#### Features
- Service list with descriptions
- Embedded video player with controls
- Responsive layout (stacked mobile, side-by-side desktop)
- Video preloading and muting

#### Service List Content
```typescript
const services = [
  "Manutenção",
  "Upgrades (swap de câmbio, mini-me, barra de torção de fabrição propria e muito mais!)",
  "Recuperação",
  "Avaliação Pré-compra",
  "Consultoria",
  "E Muito Mais"
];
```

#### Styled Components
- `Container` - Main flex container with responsive direction
- `TextSection` - Service list wrapper
- `VideoSection` - Video player wrapper
- `Video` - Styled video element with responsive sizing

#### Assets Required
- `video.mp4` - Promotional video (under 50MB recommended)

#### Usage
```typescript
import Services from "./components/Services";

<Services />
```

---

### Team Component

**File**: `src/components/Team.tsx`

#### Purpose
Company team information and expertise description.

#### Props
```typescript
// No props - self-contained component
```

#### Features
- Professional team description
- Responsive typography
- Company expertise highlighting

#### Content
```typescript
const teamDescription = `
  Nossa equipe é formada por especialistas em veículos Honda clássicos,
  unindo tradição e inovação. O conhecimento técnico é um legado passado
  por gerações, garantindo que cada serviço seja realizado com excelência
  e respeito à história dos modelos icônicos da Honda. Na Ronin
  Automotiva, seu Honda está nas mãos de quem realmente entende e valoriza
  sua essência.
`;
```

#### Styled Components
- `Container` - Main content wrapper with responsive padding
- `Title` - Section heading with responsive font sizing
- `Text` - Content paragraph with responsive font sizing

#### Usage
```typescript
import Team from "./components/Team";

<Team />
```

---

### Footer Component

**File**: `src/components/Footer.tsx`

#### Purpose
Contact form with WhatsApp integration for quote requests.

#### Props
```typescript
// No props - self-contained component
```

#### State
```typescript
interface FooterState {
  name: string;
  car: string;
  problem: string;
}

const [name, setName] = useState<string>("");
const [car, setCar] = useState<string>("");
const [problem, setProblem] = useState<string>("");
```

#### Features
- Three-field contact form
- WhatsApp integration with formatted messages
- Form validation and message formatting
- Responsive layout

#### Form Fields
1. **Name** (`name`): Customer name (optional)
2. **Car Model** (`car`): Vehicle information (optional)
3. **Problem** (`problem`): Service request description (optional)

#### WhatsApp Integration
```typescript
const sendMessage = (name: string, car: string, problem: string) => {
  const message = `Olá! sou ${name !== "" ? `sou ${name}` : "cliente"}, ${
    car !== "" ? `meu carro é um ${car}` : ""
  }e gostaria de um orçamento ${problem !== "" ? `sobre ${problem}` : ""}`;
  
  const url = `https://api.whatsapp.com/send?phone=5511990047545&text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
```

#### Configuration
- **Phone Number**: `5511990047545` (Brazilian WhatsApp Business format)
- **Message Template**: Dynamic based on form inputs

#### Styled Components
- `FooterContainer` - Main footer wrapper with responsive flex layout
- `Form` - Form container with column layout
- `InputContainer` - Individual input field wrapper
- `Label` - Input labels with consistent styling
- `Input` - Form inputs with border styling
- `SubmitButton` - Form submit button with hover effects
- `Title` - Section heading
- `Text` - Informational text content

#### Event Handlers
```typescript
const handleSubmit = () => {
  sendMessage(name, car, problem);
};

const handleInputChange = (setter: Function) => (e: React.ChangeEvent<HTMLInputElement>) => {
  setter(e.target.value);
};
```

#### Usage
```typescript
import Footer from "./components/Footer";

<Footer />
```

---

### Social Component

**File**: `src/components/Social.tsx`

#### Purpose
Social media links and company branding footer.

#### Props
```typescript
// No props - self-contained component
```

#### Features
- Instagram profile links
- Company logo display
- Thank you message
- Responsive layout

#### Social Media Configuration
```typescript
const socials = [
  { title: "Ronin Automotiva", link: "ronin_automotiva" },
  { title: "VZDRS", link: "vzdrs" },
  // Commented out: { title: "Ninja Custom Cars", link: "ninjacustomcars" },
];
```

#### Link Generation
```typescript
const instagramUrl = `https://www.instagram.com/${items.link}`;
```

#### Styled Components
- `Container` - Main wrapper with responsive flex layout
- `LogoContainer` - Company logo and text wrapper
- `SocialContainer` - Social links container
- `SocialLinks` - Individual social link styling
- `Instagram` - Instagram icon styling
- `Text` - Thank you message styling

#### Assets Required
- `logo.png` - Company logo
- `instagram.png` - Instagram icon (50px recommended)

#### Usage
```typescript
import Social from "./components/Social";

<Social />
```

---

## Styling System

### Responsive Breakpoints
All components use consistent breakpoints:
```css
/* Mobile styles (base) */
@media (max-width: 768px) {
  /* Mobile-specific styles */
}

/* Desktop styles */
@media (min-width: 768px) {
  /* Desktop-specific styles */
}
```

### Typography Scale
Font sizes follow a consistent scale:
- **Large Headers**: 50px desktop, 30px mobile
- **Medium Headers**: 42px desktop, 24px mobile  
- **Body Text**: 38px desktop, 18px mobile
- **Small Text**: 24px desktop, 16px mobile

### Color Palette
```css
--background: #0a0a0a;     /* Primary background */
--text-primary: #fff;       /* Primary text */
--accent-red: #9f0b0b;      /* CTA buttons */
--accent-blue: #007bff;     /* Form elements */
--hover-blue: #0056b3;      /* Form hover state */
```

### Layout System
- **Max Width**: 1920px for large screens
- **Mobile Padding**: 1rem
- **Desktop Padding**: 2rem
- **Flex Layout**: Most components use flexbox

## Integration Points

### WhatsApp API
- **Endpoint**: `https://api.whatsapp.com/send`
- **Parameters**: `phone`, `text` (URL encoded)
- **Phone Format**: Country code + area code + number (no formatting)

### External Links
- Instagram profiles open in new tabs
- All external links use `target="_blank"`

### Asset Loading
- Images imported as ES modules
- Video uses HTML5 video element with fallback
- Responsive asset sizing

## Performance Considerations

### Component Optimization
- All components are functional components
- Minimal state usage
- Event listeners properly cleaned up
- Responsive images and videos

### Bundle Size
- Styled-components for CSS-in-JS
- React Icons for minimal icon bundle
- No unnecessary dependencies

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy
- Form labels and inputs
- List structures for navigation
- Semantic sectioning elements

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Form elements have proper tab order
- Mobile menu keyboard support

### Screen Reader Support
- Alt text for all images
- Proper form labeling
- Semantic markup structure

## Browser Compatibility

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

### Polyfills/Fallbacks
- HTML5 video fallback message
- Responsive design fallbacks
- ES6+ feature support via Vite/TypeScript compilation