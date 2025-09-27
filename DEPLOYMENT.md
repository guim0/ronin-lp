# Deployment Guide

This guide covers different deployment options for the Ronin Automotiva landing page.

## Quick Deploy Options

### 1. Vercel (Recommended)

Vercel provides zero-configuration deployment with excellent performance.

#### Automatic Deployment (GitHub Integration)
1. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Select your `ronin-lp` repository

2. **Configure Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**:
   - Click "Deploy"
   - Your site will be live at `https://your-project-name.vercel.app`

#### Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Build the project
npm run build

# Deploy
vercel --prod
```

### 2. Netlify

Great for continuous deployment with form handling capabilities.

#### Drag & Drop Deployment
1. Build your project:
```bash
npm run build
```

2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to the deploy area

#### Git Integration
1. Connect your GitHub repository
2. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: `16` or higher

### 3. GitHub Pages

Free hosting directly from your GitHub repository.

#### Setup
1. **Create gh-pages branch**:
```bash
npm install -g gh-pages
```

2. **Add deploy script** to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

4. **Configure GitHub Pages**:
   - Go to repository settings
   - Scroll to "Pages"
   - Select `gh-pages` branch as source

### 4. Firebase Hosting

Google's hosting platform with CDN and SSL.

#### Setup
1. **Install Firebase CLI**:
```bash
npm install -g firebase-tools
```

2. **Initialize Firebase**:
```bash
firebase init hosting
```

3. **Configure firebase.json**:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. **Deploy**:
```bash
npm run build
firebase deploy
```

## Custom Domain Setup

### Vercel Custom Domain
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### Netlify Custom Domain
1. Go to site dashboard
2. Click "Domain settings"
3. Add custom domain
4. Configure DNS records

### DNS Records
For most providers, you'll need to set:
```
Type: CNAME
Name: www
Value: your-deployment-url

Type: A
Name: @
Value: [IP address provided by hosting service]
```

## SSL/HTTPS Configuration

Most modern hosting platforms provide SSL automatically:
- **Vercel**: Automatic SSL with Let's Encrypt
- **Netlify**: Free SSL certificates
- **GitHub Pages**: Automatic HTTPS for custom domains
- **Firebase**: Free SSL certificates

## Environment Variables

Currently, the project doesn't require environment variables, but for future needs:

### Vercel
1. Go to project settings
2. Add environment variables
3. Redeploy

### Netlify
1. Site settings → Environment variables
2. Add key-value pairs
3. Redeploy

Example variables you might add:
```
VITE_PHONE_NUMBER=5511990047545
VITE_INSTAGRAM_HANDLE=ronin_automotiva
VITE_GOOGLE_ANALYTICS_ID=GA-XXXXXXXXX
```

## Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm install -g vite-bundle-analyzer
npx vite-bundle-analyzer dist/stats.html
```

### Image Optimization
- Compress images before deployment
- Use WebP format when possible
- Implement lazy loading for images

### Caching Configuration
Most hosting platforms handle caching automatically, but you can optimize:

#### Vercel vercel.json
```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "cache-control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

#### Netlify _headers
```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable
```

## Monitoring & Analytics

### Google Analytics Setup
1. **Add to index.html**:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

2. **Track form submissions**:
```typescript
const handleSubmit = () => {
  gtag('event', 'form_submit', {
    event_category: 'contact',
    event_label: 'whatsapp_contact'
  });
  sendMessage(name, car, problem);
};
```

### Error Monitoring
Consider integrating error tracking:
- Sentry
- LogRocket
- Rollbar

## CI/CD Pipeline

### GitHub Actions (Optional)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

## Security Considerations

### Content Security Policy
Add CSP headers for security:

```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
               font-src 'self' https://fonts.gstatic.com;">
```

### HTTPS Enforcement
Ensure all hosting platforms enforce HTTPS redirects.

## Backup & Recovery

### Source Code
- Repository is backed up on GitHub
- Ensure all team members have access
- Regular commits and proper branching

### Assets
- Keep original high-resolution assets
- Document asset sources and modifications
- Consider cloud storage for large assets

## Troubleshooting Deployment

### Common Issues

1. **Build Fails**:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

2. **404 Errors on Routes**:
- Configure SPA fallback to index.html
- Check routing configuration

3. **Assets Not Loading**:
- Verify build output includes assets
- Check file paths in production
- Ensure proper MIME types

4. **Performance Issues**:
- Optimize images and assets
- Check bundle size
- Enable gzip compression

### Debugging Steps
1. Check build logs for errors
2. Test production build locally:
```bash
npm run build
npm run preview
```
3. Verify all assets are included in `dist/`
4. Check browser network tab for failed requests

## Maintenance

### Regular Tasks
- Update dependencies monthly
- Monitor site performance
- Check for broken links
- Review analytics data
- Backup important changes

### Update Process
1. Test updates locally
2. Deploy to staging environment (if available)
3. Review changes
4. Deploy to production
5. Monitor for issues

## Cost Considerations

### Free Tiers
- **Vercel**: 100GB bandwidth/month
- **Netlify**: 100GB bandwidth/month
- **GitHub Pages**: 1GB storage, 100GB bandwidth
- **Firebase**: 10GB storage, 1GB transfers/day

### Paid Plans
Consider upgrading for:
- Custom domains
- Increased bandwidth
- Advanced analytics
- Team collaboration features
- Priority support

Most sites like this landing page will comfortably stay within free tier limits.