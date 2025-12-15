# Deployment Guide for Social Tide Website

## Quick Deploy to Vercel (Recommended)

### Option 1: Deploy from GitHub
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from the project directory
vercel

# For production deployment
vercel --prod
```

## Environment Setup

No environment variables are required for the initial launch. When you're ready to add App Store and Google Play links:

1. Update `app/page.tsx` - replace the "Coming Soon" buttons with actual links
2. Redeploy

## Performance Optimizations Included

✅ **Static Site Generation** - Entire site is pre-rendered at build time  
✅ **Optimized Assets** - CSS and JS are minified and bundled  
✅ **Security Headers** - Configured in `vercel.json`  
✅ **Fast Page Loads** - No JavaScript required for initial render  
✅ **SEO Optimized** - Proper meta tags and Open Graph data

## Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build locally
npx serve out
```

## Custom Domain Setup

After deploying to Vercel:
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain (e.g., socialtide.app)
4. Follow Vercel's DNS configuration instructions

## Updating the Site

When your app launches:
1. Edit `app/page.tsx`
2. Replace the "Coming Soon" section with actual app store links
3. Commit and push (if using GitHub integration) or run `vercel --prod`

Example replacement for the CTA section:
```tsx
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <a 
    href="YOUR_APP_STORE_LINK"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/30 text-ocean-deep font-semibold text-lg hover:bg-white transition-all"
  >
    <span className="flex items-center gap-2">
      {/* Apple icon SVG */}
      Download on App Store
    </span>
  </a>
  {/* Similar for Google Play */}
</div>
```

## Monitoring & Analytics

Consider adding:
- **Vercel Analytics** - Built-in, just enable in project settings
- **Google Analytics** - Add to `app/layout.tsx`
- **Plausible** or **Fathom** - Privacy-friendly alternatives

## Support

For issues or questions about the website deployment, contact your development team or refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
