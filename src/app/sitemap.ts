import { MetadataRoute } from 'next';
import { CITIES, PAGE_COMBINATIONS } from '@/data/locationSeo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date();

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
    '/download-app'
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8
  }));

  const cityEntries: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  const intersectionEntries: MetadataRoute.Sitemap = PAGE_COMBINATIONS
    .filter(p => p.enabled)
    .map((p) => ({
      url: `${baseUrl}/locations/${p.citySlug}/${p.serviceSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7
    }));

  return [
    ...staticEntries,
    ...cityEntries,
    ...intersectionEntries,
  ];
}
