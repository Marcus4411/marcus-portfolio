# Marcus Mutonyi Portfolio — Development Guide

## Project Overview

A modern, single-page React + Tailwind CSS portfolio for Marcus Mutonyi, built with:
- React 18 (functional components, hooks)
- Tailwind CSS (custom dark editorial theme)
- Framer Motion (smooth animations)
- Vite (fast development server)

## Design System

### Colors (Tailwind Config)
- `bg-primary`: #0A0A0F (main background)
- `bg-surface`: #111118 (card backgrounds)
- `accent-gold`: #C9A84C (primary accent)
- `accent-steel`: #3B6B8A (secondary accent)
- `text-primary`: #F0EDE6 (main text)
- `text-muted`: #7A7A8A (secondary text)

### Fonts
- **Display**: Playfair Display (headings)
- **Body**: DM Sans (copy text)
- **Mono**: JetBrains Mono (code/tags)

## Sections Structure

All sections are component functions at the top of `src/App.jsx`:

1. `Navbar` — Sticky navigation with smooth scroll
2. `Hero` — Full viewport with animated name
3. `About` — Photo + bio with stat counters
4. `Experience` — Timeline with alternating cards
5. `Skills` — Technical bars + soft skill badges
6. `Projects` — 3-card grid with hover effects
7. `Contact` — Cards + functional form
8. `Footer` — Copyright + social links
9. `App` — Main entry point

## Development Workflow

### Starting Development
```bash
npm install    # Install dependencies (first time only)
npm run dev    # Start dev server at localhost:5173
```

### Making Changes

1. **Update Content**: Edit component data (name, email, projects, etc.)
2. **Modify Styles**: Use Tailwind classes or edit `tailwind.config.js`
3. **Change Animations**: Edit `framer-motion` properties in components
4. **Add Components**: Create new sections as functions in `App.jsx`

### Building

```bash
npm run build   # Create optimized production build in /dist
npm run preview # Preview production build locally
```

## Key Implementation Details

### Framer Motion Patterns
- All sections use `useInView` hook for scroll triggers
- `whileInView` animations activate when section enters viewport
- `once: true` ensures animations only play on first scroll
- Staggered children use `staggerChildren: 0.12`

### Component Guidelines
- Use semantic HTML (header, section, nav, footer)
- Maintain mobile-first responsive design (Tailwind sm:/md:/lg: prefixes)
- All text content from CV data above
- No placeholder Lorem Ipsum text

### Form Integration
Currently, contact form logs to console. To enable email:
1. Set up backend API endpoint
2. Replace form submission handler in Contact component
3. Or use service like Formspree, Netlify Forms

## Common Customizations

### Change Primary Accent Color
Edit `tailwind.config.js`:
```js
'accent-gold': '#NEW_COLOR',
```

### Update Portfolio Info
In `App.jsx`, find and update:
- Email: `marcusmutonyi44@gmail.com`
- Phone: `+260 974 349 854`
- Experience entries in `Experience` component
- Projects in `Projects` component
- Skills in `Skills` component

### Modify Animation Speed
In component, change `transition={{ duration: 0.6 }}`
- Increase for slower animations
- Decrease for faster

### Add New Section
1. Create new component function in `App.jsx`
2. Add to `App` return statement
3. Add nav link to Navbar `sections` array
4. Use same animation patterns (useInView + whileInView)

## Testing Checklist

- [ ] All sections render correctly
- [ ] Navbar links scroll to sections smoothly
- [ ] Hero animations play on load
- [ ] Scroll animations trigger when visible
- [ ] Mobile responsive (test at 375px, 768px, 1280px)
- [ ] Contact form accepts input
- [ ] All hover effects work smoothly
- [ ] Links are accessible (tab navigation)

## Browser DevTools Tips

- **Mobile**: Use Chrome DevTools device toolbar
- **Performance**: Run Lighthouse audit in DevTools
- **Console**: Form data logs to console when submitted
- **Animation**: Slow down in DevTools to debug motion

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Auto-deploys on push

### Netlify
1. Run `npm run build`
2. Drag `/dist` folder to Netlify

## Troubleshooting

**Dev server not starting?**
- Ensure Node.js v16+ installed: `node -v`
- Delete `node_modules/` and `package-lock.json`, then `npm install`

**Styles not applying?**
- Check Tailwind config is in `content` array
- Restart dev server after config changes

**Animations not working?**
- Verify Framer Motion is installed: `npm list framer-motion`
- Check browser console for errors

**Responsive issues?**
- Test with DevTools device toolbar
- Verify Tailwind breakpoints in use

## Resources

- Tailwind CSS Docs: https://tailwindcss.com/docs
- Framer Motion Docs: https://www.framer.com/motion/
- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/

## Notes for Future Development

- Single `App.jsx` file keeps code organized and imports centralized
- No TypeScript to keep setup simple and focus on content
- Custom Tailwind config avoids external component libraries
- All animations use Framer Motion for consistency
- Mobile-first approach ensures responsive design by default
