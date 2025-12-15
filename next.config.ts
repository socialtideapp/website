import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for optimal performance on Vercel
  output: 'export',
  
  // Optimize images
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Disable x-powered-by header for security
  poweredByHeader: false,
};

export default nextConfig;
