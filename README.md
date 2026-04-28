# Marcus Mutonyi — Personal Portfolio

A modern, refined dark editorial portfolio for Marcus Mutonyi, a final-year Software Engineering student at Information and Communications University, Lusaka, Zambia.

## 🎨 Design Philosophy

**Refined Dark Editorial** — luxury editorial meets African tech talent. High-end design portfolio aesthetic with sophisticated dark theme, warm gold accents, and smooth animations.

### Color Palette

- **Primary Background**: `#0A0A0F` (deep space)
- **Surface Background**: `#111118` (card surfaces)
- **Primary Accent**: `#C9A84C` (warm gold)
- **Secondary Accent**: `#3B6B8A` (steel blue)
- **Primary Text**: `#F0EDE6` (warm off-white)
- **Muted Text**: `#7A7A8A` (muted gray)

### Typography

- **Headings**: Playfair Display (editorial authority)
- **Body**: DM Sans (clean, modern readability)
- **Code/Accents**: JetBrains Mono

## 🚀 Tech Stack

- **React 18** — Functional components with hooks
- **Vite** — Lightning-fast build tool
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Smooth animations and interactions
- **Lucide Icons** — Beautiful SVG icons

## 📋 Project Sections

1. **Sticky Navbar** — Navigation with smooth scroll and active states
2. **Hero Section** — Animated name, typewriter subtitle, CTA buttons
3. **About Section** — Photo with glow effect, bio, animated stats
4. **Experience Section** — Timeline layout with animated entries
5. **Skills Section** — Technical skills with progress bars, soft skills with badges
6. **Projects Section** — Grid of 3 featured projects with hover effects
7. **Contact Section** — Contact cards and functional form
8. **Footer** — Social links and copyright

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Step 1: Install Dependencies

```bash
npm install
```

This will install:
- `react` & `react-dom` (v18)
- `framer-motion` (animations)
- `tailwindcss` & dependencies (styling)
- `vite` & `@vitejs/plugin-react` (build tools)
- `lucide-react` (icons)

### Step 2: Start Development Server

```bash
npm run dev
```

This will:
- Start Vite dev server at `http://localhost:5173`
- Auto-reload on file changes
- Enable fast HMR (Hot Module Replacement)

### Step 3: Build for Production

```bash
npm run build
```

This will:
- Generate optimized bundle in `/dist`
- Minify and tree-shake unused code
- Create production-ready files

### Step 4: Preview Production Build

```bash
npm run preview
```

This will locally serve the production build.

## 📁 Project Structure

```
marcus-mutonyi-portfolio/
├── src/
│   ├── App.jsx              # Main app with all section components
│   ├── main.jsx             # React entry point
│   └── index.css            # Tailwind + global styles
├── index.html               # HTML entry point with Google Fonts
├── tailwind.config.js       # Custom colors, fonts, animations
├── postcss.config.js        # PostCSS config for Tailwind
├── vite.config.js           # Vite config
├── package.json             # Dependencies
└── .gitignore              # Git ignore rules
```

## ✨ Key Features

- ✅ **Fully Responsive** — Mobile-first, optimized for 375px–1920px+
- ✅ **Smooth Animations** — Framer Motion scroll triggers and interactions
- ✅ **Accessibility** — Semantic HTML, ARIA labels, focus states
- ✅ **Performance** — Optimized bundle, lazy loading, CSS-in-JS
- ✅ **Dark Theme** — Eye-friendly refined dark design
- ✅ **No External UI Libraries** — Custom components, full control
- ✅ **Google Fonts** — Playfair Display, DM Sans, JetBrains Mono

## 🎯 Customization

### Update Portfolio Data

Edit `src/App.jsx` to update:
- Contact information (email, phone, location)
- Social links (GitHub, LinkedIn)
- Experience entries
- Project details
- Skills and expertise

### Modify Colors

Update `tailwind.config.js` `theme.extend.colors` to change:
- Background colors
- Accent colors
- Text colors

### Adjust Animations

Modify `tailwind.config.js` `animation` and `keyframes` sections to customize:
- Animation durations
- Easing functions
- Transition effects

### Change Fonts

Update the `@import` in `index.html` and font family in `tailwind.config.js`

## 📝 Notes

- All components are in a single `App.jsx` file for simplicity
- Framer Motion animations use `whileInView` with scroll triggers
- Form submissions log to console (connect to backend as needed)
- Icons from Lucide React (24px default size)
- Custom Tailwind config extends default theme

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Then push to GitHub and connect to Vercel
```

### Netlify

```bash
npm run build
# Drag and drop the /dist folder to Netlify
```

### Traditional Server

1. Build the project: `npm run build`
2. Upload `/dist` folder to your web server
3. Configure server to serve `index.html` for all routes (SPA)

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact

For questions or support, reach out to Marcus Mutonyi:
- **Email**: marcusmutonyi44@gmail.com
- **Phone**: +260 974 349 854
- **Location**: Lusaka, Zambia

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
