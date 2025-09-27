# Content Management Guide

This guide explains how to update content on the Ronin Automotiva landing page.

## Quick Content Updates

### Company Information

#### Header/Navigation
**File**: `src/components/Header.tsx`
```typescript
const headerOptions = [
  { title: "Sobre", link: "#sobre" },
  { title: "Serviços", link: "#servicos" },
  { title: "Profissionais", link: "#time" },
  { title: "Contato", link: "#contato" },
  { title: "Orçamento", link: "#orcamento" },
];
```

#### Company Logo
**File**: `src/assets/logo.png`
- Replace the existing logo file
- Keep the same filename for consistency
- Recommended size: 80px width

### Hero Section (About)

**File**: `src/components/About.tsx`

```typescript
<Title>
  Especialistas em Veículos <b>Honda</b> Clássicos
</Title>
<SubTitle>
  Cuidado, Performance e Excelência para o seu <b>Prelude</b>,{" "}
  <b>Civic</b>, <b>CRX</b> e <b>Del Sol</b>!
</SubTitle>
```

#### Background Image
**File**: `src/assets/banner.png`
- Replace with new hero image
- Keep same filename
- Recommended size: 1920x680px

### Services Section

**File**: `src/components/Services.tsx`

```typescript
<ul>
  <li>Manutenção</li>
  <li>
    Upgrades
    <span>
      (swap de câmbio, mini-me, barra de torção de fabrição propria e
      muito mais!)
    </span>
  </li>
  <li>Recuperação</li>
  <li>Avaliação Pré-compra</li>
  <li>Consultoria</li>
  <li>E Muito Mais</li>
</ul>
```

#### Promotional Video
**File**: `src/assets/video.mp4`
- Replace with new promotional video
- Keep MP4 format for web compatibility
- Recommended: Under 50MB for fast loading

### Team Information

**File**: `src/components/Team.tsx`

```typescript
<Text>
  Nossa equipe é formada por especialistas em veículos Honda clássicos,
  unindo tradição e inovação. O conhecimento técnico é um legado passado
  por gerações, garantindo que cada serviço seja realizado com excelência
  e respeito à história dos modelos icônicos da Honda. Na Ronin
  Automotiva, seu Honda está nas mãos de quem realmente entende e valoriza
  sua essência.
</Text>
```

### Contact Information

#### WhatsApp Phone Number
**File**: `src/components/Footer.tsx`

```typescript
const url = `https://api.whatsapp.com/send?phone=5511990047545&text=${encodeURIComponent(message)}`;
```

To change the phone number:
1. Replace `5511990047545` with your WhatsApp Business number
2. Keep the format: Country code + area code + number (no spaces or special characters)

#### Contact Form Text
**File**: `src/components/Footer.tsx`

```typescript
<Text>
  <b>
    Atenção: Somos uma mecânica especializada e atendemos exclusivamente
    com agendamento.
  </b>
  <br /> Use este espaço para nos contar como podemos ajudar você e seu
  Honda. Nossa equipe está pronta para oferecer o cuidado que seu
  veículo merece!
</Text>
```

### Social Media Links

**File**: `src/components/Social.tsx`

```typescript
const socials = [
  { title: "Ronin Automotiva", link: "ronin_automotiva" },
  { title: "VZDRS", link: "vzdrs" },
  // { title: "Ninja Custom Cars", link: "ninjacustomcars" },
];
```

To add or modify social media accounts:
1. Add/edit entries in the `socials` array
2. `link` should be the Instagram username (without @)
3. `title` is the display name

### Copyright Information

**File**: `src/App.tsx`

```typescript
<p style={{ textAlign: "center", color: "#FFF" }}>
  @Ronin Automotiva - 2026
</p>
```

## SEO Content Updates

### Page Title and Meta Tags
**File**: `index.html`

```html
<title>
  Ronin Automotiva | Oficina Especialistas em Honda Clássicos (70-2000)
</title>

<meta
  name="description"
  content="Na Ronin Automotiva, cuidamos de Honda clássicos dos anos 70 a 2000. Especialistas em Prelude, Civic, CRX e Del Sol. Agende seu atendimento personalizado!"
/>

<meta
  name="keywords"
  content="mecânica especializada Honda, manutenção Honda clássicos, Honda Prelude, Honda Civic, Honda CRX, Honda Del Sol, Ronin Automotiva, restauração de carros antigos"
/>
```

## Advanced Content Changes

### Adding New Sections

To add a new section between existing ones:

1. Create a new component in `src/components/`
2. Import it in `src/App.tsx`
3. Add it to the component hierarchy
4. Update navigation in `Header.tsx` if needed

Example:
```typescript
// src/components/Gallery.tsx
import React from "react";
import styled from "styled-components";

const Gallery: React.FC = () => {
  return (
    <Container id="galeria">
      <Title>Galeria</Title>
      {/* Gallery content */}
    </Container>
  );
};

// Styled components...
export default Gallery;
```

### Modifying Styling

#### Colors
Common color values used throughout the site:
- Background: `#0a0a0a`
- Text: `#fff`
- Red accent: `#9f0b0b`
- Blue accent: `#007bff`

#### Typography
Font sizes follow a responsive pattern:
```css
/* Desktop */
font-size: 42px;

/* Mobile */
@media (max-width: 768px) {
  font-size: 24px;
}
```

#### Responsive Breakpoints
- Mobile: `max-width: 768px`
- Desktop: `min-width: 768px` or `min-width: 769px`

### Form Customization

#### Adding Form Fields
To add new fields to the contact form in `Footer.tsx`:

1. Add state variable:
```typescript
const [newField, setNewField] = useState<string>("");
```

2. Add input component:
```typescript
<InputContainer>
  <Label>New Field Label</Label>
  <Input
    type="text"
    placeholder="Placeholder text"
    name="newField"
    onChange={(e) => setNewField(e.target.value)}
  />
</InputContainer>
```

3. Update WhatsApp message:
```typescript
const message = `Olá! sou ${name !== "" ? `sou ${name}` : "cliente"}, ${
  car !== "" ? `meu carro é um ${car}` : ""
}e gostaria de um orçamento ${problem !== "" ? `sobre ${problem}` : ""}${
  newField !== "" ? ` - ${newField}` : ""
}`;
```

## Asset Management

### Image Guidelines
- **Format**: PNG for logos/icons, JPG for photos
- **Size**: Optimize for web (under 500KB when possible)
- **Naming**: Use descriptive names in camelCase

### Video Guidelines
- **Format**: MP4 for web compatibility
- **Size**: Under 50MB for reasonable loading times
- **Resolution**: 1080p maximum recommended

## Content Deployment

After making content changes:

1. **Test locally**:
```bash
npm run dev
```

2. **Build for production**:
```bash
npm run build
```

3. **Deploy** using your chosen platform (Vercel, Netlify, etc.)

## Best Practices

### Content Writing
- Keep text concise and scannable
- Use active voice
- Include relevant keywords naturally
- Maintain consistent tone and voice

### Image Optimization
- Compress images before uploading
- Use appropriate formats (PNG/JPG)
- Include alt text for accessibility

### Performance
- Keep file sizes reasonable
- Test loading times after changes
- Optimize assets before deployment

## Troubleshooting

### Common Issues
1. **Images not displaying**: Check file paths and formats
2. **Text not updating**: Clear browser cache
3. **Broken links**: Verify URL formats and external links
4. **Mobile layout issues**: Test responsive breakpoints

### Getting Help
- Check browser console for errors
- Verify file paths are correct
- Ensure proper TypeScript syntax
- Test on multiple devices/browsers