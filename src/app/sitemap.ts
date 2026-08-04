import { MetadataRoute } from 'next';
import { CITIES, PAGE_COMBINATIONS } from '@/data/locationSeo';
import { blogPosts as legacyPosts } from '@/lib/blog-data';
import { initializeFirebase } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

async function getFirestoreBlogSlugs() {
  try {
    const { firestore } = initializeFirebase();
    const querySnapshot = await getDocs(collection(firestore, 'blogPosts'));
    return querySnapshot.docs.map(doc => doc.id);
  } catch (e) {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date();

  // Static Public Routes
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

  // SEO City Hubs
  const cityEntries: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${baseUrl}/locations/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  // SEO Service Intersections
  const intersectionEntries: MetadataRoute.Sitemap = PAGE_COMBINATIONS
    .filter(p => p.enabled)
    .map((p) => ({
      url: `${baseUrl}/locations/${p.citySlug}/${p.serviceSlug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7
    }));

  // Blog Posts
  const firestoreSlugs = await getFirestoreBlogSlugs();
  const legacySlugs = legacyPosts.map(p => p.slug);
  const allBlogSlugs = Array.from(new Set([...legacySlugs, ...firestoreSlugs]));

  const blogEntries: MetadataRoute.Sitemap = allBlogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [
    ...staticEntries,
    ...cityEntries,
    ...intersectionEntries,
    ...blogEntries
  ];
}
