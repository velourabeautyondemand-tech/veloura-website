import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

/**
 * Next.js sitemap generator.
 * This function returns an array of sitemap entries which Next.js
 * automatically converts into a valid XML sitemap at /sitemap.xml.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date();

  // Define core application routes
  const routes = [
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
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Include dynamic blog post routes
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
