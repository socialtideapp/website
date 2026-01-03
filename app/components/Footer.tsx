export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="text-center pt-12 pb-8 text-ocean-foam border-t border-white/20 mt-8" role="contentinfo">
      <small className="text-sm block">
        © {currentYear} SocialTide. All rights reserved.
      </small>
      <p className="text-xs mt-2 text-ocean-foam/70">
        Available on mobile only • iOS and Android coming soon
      </p>
      <nav className="mt-4 flex justify-center gap-6" aria-label="Footer navigation">
        <a 
          href="/privacy-policy" 
          className="text-sm text-ocean-foam hover:text-white visited:text-ocean-foam transition-colors duration-300 underline"
        >
          Privacy Policy
        </a>
        <a 
          href="/terms-of-service" 
          className="text-sm text-ocean-foam hover:text-white visited:text-ocean-foam transition-colors duration-300 underline"
        >
          Terms of Service
        </a>
      </nav>
    </footer>
  );
}
