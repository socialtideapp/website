# SocialTide Website - AI Coding Instructions

## Project Overview
Landing page for SocialTide mobile app - a Next.js 16 website with ocean-themed design, optimized for performance and SEO. The site is in "pre-launch" mode with disabled app store buttons that will be activated when the mobile app launches.

## Architecture & Tech Stack
- **Next.js 16** with App Router (`app/` directory structure)
- **TypeScript** - strict typing throughout
- **Tailwind CSS v4** with custom ocean-themed design tokens defined in `globals.css`
- **Supabase** integration for auth callbacks (used only for `/auth/*` routes)
- **Vercel** deployment with security headers in `vercel.json`
- **Static Generation** - currently disabled (`next.config.ts` has `output: 'export'` commented out) to support auth pages

## Design System (Critical)
All colors are ocean/sun-inspired - **never** use generic blue/red/green. Reference [DESIGN.md](DESIGN.md):
- Ocean: `ocean-deep` (#0a4d68), `ocean-light` (#088395), `tide-blue` (#05bfdb), `ocean-foam` (#e0f4f7)
- Sun: `sun-yellow` (#ffd93d), `sun-orange` (#ff9a3d)
- Use these exact Tailwind classes: `bg-ocean-light`, `text-tide-blue`, etc.
- Gradients are core to the design: `bg-gradient-to-r from-sun-orange to-sun-yellow` for CTAs

### Animation Patterns
- Wave animations defined in `globals.css` with 15-25s cycles
- Pulse effect on logo: `animate-pulse-slow` (4s cycle)
- Hover transitions: `hover:scale-105 transition-all duration-300`
- Glass morphism: `backdrop-blur-md bg-white/10 border border-white/20`

## Key Conventions

### Component Structure
- Single-page app: all UI in [app/page.tsx](app/page.tsx)
- Client components use `'use client'` directive (see auth pages)
- Metadata/SEO in [app/layout.tsx](app/layout.tsx) - metadataBase is `https://www.socialtide.app`

### Styling Patterns
- Mobile-first: start with base styles, add `md:` and `lg:` breakpoints
- Spacing: use `p-6`, `p-8`, `p-12` for consistent padding
- Rounded corners: `rounded-2xl` (cards), `rounded-3xl` (major sections)
- Shadow depth: `shadow-xl` (cards), `shadow-2xl` (hero sections)

### Authentication Flow
Auth pages in `app/auth/` handle Supabase callbacks:
- `auth/confirm/` - email verification (redirects to `socialtide://confirmed` deep link)
- `auth/reset-password/` - password reset flow
- Supabase client initialized in [lib/supabase.ts](lib/supabase.ts) with conditional creation (returns null if env vars missing)
- Auth pages must use `'use client'` and wrap `useSearchParams()` in `<Suspense>`

## Developer Workflows

### Development
```bash
npm run dev  # Start dev server on :3000
```

### Production Build
```bash
npm run build  # Creates optimized build
npm start      # Preview production locally
```

### Deployment
Auto-deploys via Vercel on push to main. Manual deploy:
```bash
vercel --prod
```

## Common Updates

### Activating App Store Links (When Mobile App Launches)
See [UPDATE_GUIDE.md](UPDATE_GUIDE.md) for detailed steps:
1. Update CTA text from "Coming soon" to "Download now" in [app/page.tsx](app/page.tsx) (~line 102)
2. Replace disabled button divs with `<a>` tags pointing to App Store/Google Play
3. Add UTM parameters for tracking: `?utm_source=website&utm_medium=cta&utm_campaign=launch`

### Adding New Sections
- Maintain ocean gradient backgrounds: `bg-gradient-to-b from-ocean-light via-tide-blue to-ocean-deep`
- Use feature card pattern from [app/page.tsx](app/page.tsx) lines 56-88
- Always include hover effects and backdrop-blur for depth

### SEO/Meta Updates
Edit [app/layout.tsx](app/layout.tsx):
- `metadata` object for titles, descriptions, Open Graph
- `viewport` object for mobile rendering
- Always include `alternates.canonical` for proper indexing

## Important Constraints
- **No dynamic routes** - static export coming when auth is removed
- **No images in `public/`** - keep it minimal, use SVG icons inline
- **Security headers** in [vercel.json](vercel.json) - don't remove
- **Vercel Analytics** integrated - already in layout, don't duplicate

## File Reference
- [app/page.tsx](app/page.tsx) - Main landing page (all UI)
- [app/layout.tsx](app/layout.tsx) - Root layout with metadata and fonts
- [app/globals.css](app/globals.css) - Tailwind config + custom animations + theme tokens
- [DESIGN.md](DESIGN.md) - Complete design system documentation
- [UPDATE_GUIDE.md](UPDATE_GUIDE.md) - Step-by-step guide for activating app links
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment and configuration guide
