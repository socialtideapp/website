import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for auth pages to work
  // output: 'export',
  
  // Optimize images
  images: {
    unoptimized: true,
  },
  
  // Enable React strict mode for better development
  reactStrictMode: true,
  
  // Disable x-powered-by header for security
  poweredByHeader: false,
};

export default nextConfig;
