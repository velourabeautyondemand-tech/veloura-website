
import { MetadataRoute } from 'next';
import { CITIES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date('2026-08-01'); // Static fallback date for architectural stability

  // Core Pages
  const staticRoutes = [
    '',
    '/services',
    '/match',
    '/store',
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
    '/locations',
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
    '/hotel-partners',
    '/vendor-partners',
    '/download-app'
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));

  // Market Hubs
  const cityEntries: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  // Service Intersections
  const intersectionEntries: MetadataRoute.Sitemap = PAGE_COMBINATIONS
    .filter(p => p.enabled)
    .map((p) => ({
      url: `${baseUrl}/locations/${p.citySlug}/${p.serviceSlug}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7
    }));

  // Blog Posts
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [
    ...staticEntries,
    ...cityEntries,
    ...intersectionEntries,
    ...blogEntries,
  ];
}
