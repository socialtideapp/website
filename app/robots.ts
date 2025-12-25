import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.socialtide.app'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/auth/confirm', '/auth/reset-password'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
