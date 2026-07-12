import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { ACTIVE_SERVICES, ACTIVE_LOCATIONS } from '@/lib/marketplace-data';
import { getAllPublishedSEONodes } from '@/lib/seo-marketplace';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date();

  const staticRoutes = [
    '',
    '/services',
    '/match',
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
    '/customer-policy'
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  // Service Hubs
  const serviceEntries: MetadataRoute.Sitemap = ACTIVE_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  // Location Hubs
  const locationEntries: MetadataRoute.Sitemap = ACTIVE_LOCATIONS.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  // SEO Marketplace Hubs (Venues, Occasions, Solutions)
  const seoNodes = getAllPublishedSEONodes();
  const seoEntries: MetadataRoute.Sitemap = seoNodes.map((node) => {
    let segment = 'services';
    if (node.type === 'venue') segment = 'venues';
    if (node.type === 'occasion') segment = 'occasions';
    if (node.type === 'solution') segment = 'solutions';
    
    return {
        url: `${baseUrl}/${segment}/${node.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7
    };
  });

  // Blog Posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [
    ...staticEntries, 
    ...serviceEntries, 
    ...locationEntries, 
    ...seoEntries,
    ...blogEntries
  ];
}
