
import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { ACTIVE_SERVICES, ACTIVE_LOCATIONS } from '@/lib/marketplace-data';
import { getAllPublishedNodes } from '@/lib/registry';

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

  // Service Hubs (Legacy)
  const serviceEntries: MetadataRoute.Sitemap = ACTIVE_SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  // Location Hubs (Legacy)
  const locationEntries: MetadataRoute.Sitemap = ACTIVE_LOCATIONS.map((l) => ({
    url: `${baseUrl}/locations/${l.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

  // Registry-Driven Hubs (Phase 2)
  const registryNodes = getAllPublishedNodes();
  const registryEntries: MetadataRoute.Sitemap = registryNodes.map((node) => ({
    url: `${baseUrl}/${node.type === 'service' ? 'services' : node.type + 's'}/${node.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.7
  }));

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
    ...registryEntries, 
    ...blogEntries
  ];
}
