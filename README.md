# Sekhar FPV — Professional Drone Cinematography Portfolio

A modern, cinematic portfolio website for **DJI FPV drone rental and aerial cinematography service** with a professional pilot. Built with **React**, **Tailwind CSS**, **Framer Motion**, and **GSAP** for smooth animations and immersive visuals.

## 🎬 Features

- **Cinematic Dark Theme** — Modern black and charcoal background with neon cyan, magenta, and purple accents
- **Smooth Animations** — Glassmorphism effects, particle animations, and smooth scroll transitions
- **Responsive Design** — Fully mobile-responsive with optimized layouts for all devices
- **High-Performance** — Fast loading with optimized images and efficient animations
- **SEO-Friendly** — Proper meta tags, structured content, and semantic HTML
- **Interactive Portfolio** — Masonry gallery with category filtering and hover effects
- **Contact Form** — Professional inquiry form with validation and feedback
- **Social Integration** — Direct links to Instagram, WhatsApp, Email, and Phone

## 📁 Project Structure

```
pot/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation with mobile menu
│   │   ├── Hero.tsx            # Cinematic hero section with particles
│   │   ├── About.tsx           # About the pilot with expertise badges
│   │   ├── Services.tsx        # Service cards with icons
│   │   ├── Portfolio.tsx       # Masonry gallery with filtering
│   │   ├── WhyChooseMe.tsx    # Features and stats showcase
│   │   ├── Testimonials.tsx    # Client reviews and ratings
│   │   ├── Contact.tsx         # Contact form and info
│   │   └── Footer.tsx          # Footer with links and socials
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Vite entry point
│   └── index.css               # Global styles with custom animations
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🛠️ Tech Stack

- **Frontend Framework** — React 18
- **Build Tool** — Vite
- **Styling** — Tailwind CSS 3
- **Animations** — Framer Motion + GSAP
- **Icons** — Lucide React
- **Language** — TypeScript
- **Bundler** — ESBuild (via Vite)

## 📦 Installation

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Setup

1. **Clone or Extract the Project**
   ```bash
   cd pot
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will open at `http://localhost:5173`

4. **Build for Production**
   ```bash
   npm run build
   ```
   Optimized files will be in the `dist/` folder

5. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎨 Admin Panel

The website includes a **built-in admin panel** for easy management of profile and contact information.

### Access Admin Panel
- Click the **Settings Icon** (⚙️) in the navigation bar (top-right corner)
- The admin panel opens in a modal overlay

### Admin Panel Features

#### 1. Profile Picture Management
- **Upload** — Upload your profile picture (PNG, JPG, WebP)
- **Preview** — See how the picture looks in the About section
- **Auto-save** — Images are stored locally in browser storage

#### 2. Contact Details Editor
- **Name** — Edit your full name (appears throughout the site)
- **Email** — Update contact email
- **Phone** — Edit phone number (linked to WhatsApp and call links)
- **Instagram Handle** — Update social media handle

#### 3. Real-time Updates
- All changes are saved to browser's localStorage
- Changes reflect immediately across all sections:
  - About section displays current name and picture
  - Contact section shows updated contact info
  - Footer displays updated name and social links

#### 4. Data Persistence
- Data persists even after closing/reopening the browser
- All info stored locally in localStorage as `sekharFPVAdminData`

## 🎨 Customization

### Using Admin Panel (Recommended)
1. Click the Settings icon in the navbar
2. Click "Edit Profile"
3. Upload picture, update contact details
4. Click "Save Changes"

### Direct Code Edit (Alternative)
Edit `src/components/AdminPanel.tsx` to customize:
- Default admin data values
- Validation rules
- Form fields

### Colors & Theme
Edit `tailwind.config.js` to customize:
- **Neon Colors** — Cyan (#00d4ff), Magenta (#ff00ff), Purple (#b300ff), Lime (#39ff14)
- **Dark Palette** — Background, surface, and text colors
- **Animations** — Duration, easing, and custom effects

### Content Updates

#### Update Pilot Information via Admin Panel (Easiest)
- Click Settings ⚙️ → Edit Profile → Update details → Save

#### Update via Code
Edit `src/App.tsx` to change default values:
- Initial name, email, phone, Instagram

#### Update Services
Edit `src/components/Services.tsx`:
- Service titles, descriptions, and icons

#### Add Portfolio Items
Edit `src/components/Portfolio.tsx`:
- Add new `portfolioItems` with thumbnail URLs
- Categories: weddings, travel, realestate, reels, commercial

#### Update Contact Information
Edit `src/components/Contact.tsx`:
- Phone number
- Email address
- Social media handles

#### Add Testimonials
Edit `src/components/Testimonials.tsx`:
- Client names, roles, and reviews
- Star ratings and avatar images

### Fonts

Default fonts are:
- **Poppins** — Body text
- **Montserrat** — Headings
- **Satoshi** — Accents

Change in `index.html` and `tailwind.config.js`

### Images

Replace placeholder images:
- Portfolio thumbnails use Unsplash URLs
- Avatar images use Unsplash URLs
- Update with actual drone footage and client photos

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir dist
```

### Deploy to GitHub Pages
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

## 📱 Responsive Breakpoints

- **Mobile** — 320px - 639px
- **Tablet** — 640px - 1023px
- **Desktop** — 1024px+

## ✅ Performance Optimizations

- ✓ Image lazy loading ready (use with react-lazyload)
- ✓ Service worker ready (PWA)
- ✓ Optimized CSS with Tailwind purging
- ✓ Minimal JavaScript bundle
- ✓ Hardware-accelerated animations

## 🔧 Configuration

### Vite Configuration
Edit `vite.config.ts` to customize:
- Server port and settings
- Build output directory
- Environment variables

### Tailwind CSS
Edit `tailwind.config.js` to customize:
- Colors and spacing
- Font families
- Breakpoints
- Animation timing

## 📝 License

This project is created for Sekhar FPV and is proprietary. All rights reserved.

## 📞 Support

For questions or customizations:
- **Email** — sekharpahi@gmail.com
- **Phone** — +91 9337513044
- **Instagram** — @sekhar.fpv

---

**Built with ❤️ for Professional FPV Drone Cinematography**

*"Cinematic FPV Drone Shots That Feel Alive"*
