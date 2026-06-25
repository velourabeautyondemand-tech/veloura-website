import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

/**
 * Next.js Metadata Route for sitemap.xml.
 * Next.js automatically generates the XML declaration and sets the Content-Type header to application/xml.
 * Consolidating here prevents duplicate declaration errors caused by multiple route handlers.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date();

  // Core application pages
  const coreRoutes = [
    '',
    '/services',
    '/talent-agency',
    '/apply',
    '/pro-discounts',
    '/blog',
    '/about',
    '/events',
    '/contact',
    '/support',
    '/privacy',
    '/terms',
    '/partner-agreement',
    '/partner-press',
    '/reliability-policy',
    '/customer-policy',
    '/beauty-professional-jobs',
    '/beauty-services-near-me',
    '/best-mobile-beauty-platform',
    '/home-beauty-services',
    '/join-as-hair-stylist',
    '/join-as-makeup-artist',
    '/join-as-photographer',
    '/on-demand-beauty-app',
    '/compare-beauty-apps',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: (route === '' ? 'weekly' : 'monthly') as 'weekly' | 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic blog post pages
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...coreRoutes, ...blogRoutes];
}
