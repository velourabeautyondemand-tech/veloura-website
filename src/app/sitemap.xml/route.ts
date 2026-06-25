'use client';
/**
 * @fileOverview Custom Route Handler for sitemap.xml.
 * Provides granular control over the raw XML output to ensure no leading whitespace
 * and correct Content-Type headers, satisfying strict SEO validators.
 */
import { blogPosts } from '@/lib/blog-data';

export const dynamic = 'force-dynamic';

export async function GET() {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date().toISOString();

  const coreRoutes = [
    '', '/services', '/talent-agency', '/apply', '/pro-discounts', '/blog', 
    '/about', '/events', '/contact', '/support', '/privacy', '/terms', 
    '/partner-agreement', '/partner-press', '/reliability-policy', 
    '/customer-policy', '/beauty-professional-jobs', '/beauty-services-near-me', 
    '/best-mobile-beauty-platform', '/home-beauty-services', '/join-as-hair-stylist', 
    '/join-as-makeup-artist', '/join-as-photographer', '/on-demand-beauty-app', 
    '/compare-beauty-apps'
  ];

  const blogRoutes = blogPosts.map(post => `/blog/${post.slug}`);
  const allRoutes = [...coreRoutes, ...blogRoutes];

  // Manual XML construction ensures character-perfect output
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.startsWith('/blog/') ? 'monthly' : 'weekly'}</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`.trim();

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  });
}
