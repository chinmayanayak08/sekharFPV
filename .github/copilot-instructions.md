# Sekhar FPV Portfolio — Development Guidelines

This is the copilot-instructions file for the Sekhar FPV professional drone cinematography portfolio website.

## Project Overview
Modern cinematic portfolio website for DJI FPV drone rental and aerial cinematography services. Built with React, Tailwind CSS, Framer Motion, and GSAP.

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build**: Vite
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React

## Getting Started

### Installation
```bash
npm install
npm run dev
```

### Scripts
- `npm run dev` — Start development server (port 5173)
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with canvas animations
│   ├── About.tsx       # About pilot section
│   ├── Services.tsx    # Service cards
│   ├── Portfolio.tsx   # Gallery with filtering
│   ├── WhyChooseMe.tsx # Features showcase
│   ├── Testimonials.tsx # Client reviews
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Customization Guide

### Update Contact Information
Edit `src/components/Contact.tsx`:
- Phone: `+91 9337513044`
- Email: `sekharpahi@gmail.com`
- Instagram: `@sekhar.fpv`

### Add/Edit Portfolio Items
Edit `src/components/Portfolio.tsx`:
- Add items to `portfolioItems` array
- Replace Unsplash URLs with actual drone footage
- Categories: weddings, travel, realestate, reels, commercial

### Update Services
Edit `src/components/Services.tsx`:
- Service descriptions
- Service icons

### Modify Colors & Theme
Edit `tailwind.config.js`:
- Neon colors: cyan (#00d4ff), magenta (#ff00ff), purple (#b300ff)
- Dark palette: #0a0e27 (darkest) to #374151

### Change Fonts
Edit in `index.html` and `tailwind.config.js`:
- Poppins (body)
- Montserrat (headings)
- Satoshi (accents)

## Development Notes

### Animations
- Hero section uses Canvas API for particle effects
- Components use Framer Motion for smooth transitions
- Custom Tailwind animations in `index.css`
- GSAP ready for complex scroll effects

### Responsive Design
- Mobile-first approach
- Breakpoints: 640px (tablet), 1024px (desktop)
- All components tested on various screen sizes

### Performance
- Lazy loading ready for images
- Optimized CSS with Tailwind purging
- Fast animations with GPU acceleration
- Minimal JavaScript bundle

## Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
netlify deploy --prod --dir dist
```

### GitHub Pages
Build runs on push to main branch

## SEO & Meta Tags
- Title: "Sekhar FPV — Professional Drone Cinematography"
- Description: Professional DJI FPV drone rental service
- Open Graph tags configured in `index.html`

## Best Practices
- Keep animations smooth and performant
- Use glass-effect class for consistent design
- Maintain neon color accents throughout
- Use Framer Motion for component animations
- Keep form validation on client side

## Common Issues & Solutions

### Port 5173 already in use
```bash
npm run dev -- --port 5174
```

### Building fails
- Clear `node_modules`: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf dist && npm run build`

### Animations not smooth
- Check browser hardware acceleration is enabled
- Use `will-change: transform` on animated elements
- Profile with DevTools Performance tab

## Next Steps for Production
1. Replace all Unsplash URLs with actual drone footage
2. Add video background for hero section
3. Integrate email service (Nodemailer, SendGrid, etc.)
4. Add analytics (Google Analytics, Mixpanel)
5. Set up custom domain
6. Add SSL certificate
7. Configure CDN for fast image delivery
8. Add social media previews

## Contact for Support
- Email: sekharpahi@gmail.com
- Phone: +91 9337513044
- Instagram: @sekhar.fpv
