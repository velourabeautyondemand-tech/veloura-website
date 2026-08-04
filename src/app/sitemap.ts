
import { MetadataRoute } from 'next';
import { blogPosts as legacyPosts } from '@/lib/blog-data';
import { ACTIVE_SERVICES, ACTIVE_LOCATIONS } from '@/lib/marketplace-data';
import { getAllPublishedSEONodes } from '@/lib/seo-marketplace';
import { VÉLOURA_PROFESSIONALS } from '@/lib/talent-data';
import { initializeFirebase } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

const GHOST_CONTENT_KEY = '29a6cc12d143f907f50654a724';

async function getFirestoreBlogSlugs() {
  try {
    const { firestore } = initializeFirebase();
    const querySnapshot = await getDocs(collection(firestore, 'blogPosts'));
    return querySnapshot.docs.map(doc => doc.id);
  } catch (e) {
    console.error('Sitemap Firestore Fetch Error:', e);
    return [];
  }
}

async function getGhostApiSlugs() {
  try {
    const res = await fetch(`https://veloura-beauty-on-demand.ghost.io/ghost/api/content/posts/?key=${GHOST_CONTENT_KEY}&fields=slug&limit=all`);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.posts || []).map((p: any) => p.slug);
  } catch (e) {
    console.error('Sitemap Ghost API Fetch Error:', e);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));

  // Intersection Pages (Location + Service)
  const intersectionEntries: MetadataRoute.Sitemap = [];
  ACTIVE_LOCATIONS.forEach(loc => {
    ACTIVE_SERVICES.forEach(service => {
      intersectionEntries.push({
        url: `${baseUrl}/locations/${loc.slug}/${service.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7
      });
    });
  });

  // Professional Profiles
  const proEntries: MetadataRoute.Sitemap = VÉLOURA_PROFESSIONALS.map((p) => ({
    url: `${baseUrl}/talent-agency/professionals/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6
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

  // Dynamic Blog Posts (Firestore + Ghost + Legacy)
  const firestoreSlugs = await getFirestoreBlogSlugs();
  const ghostApiSlugs = await getGhostApiSlugs();
  const legacySlugs = legacyPosts.map(p => p.slug);
  
  const allBlogSlugs = Array.from(new Set([...legacySlugs, ...firestoreSlugs, ...ghostApiSlugs]));

  const blogEntries: MetadataRoute.Sitemap = allBlogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));

  return [
    ...staticEntries, 
    ...serviceEntries, 
    ...locationEntries, 
    ...intersectionEntries,
    ...seoEntries,
    ...blogEntries,
    ...proEntries
  ];
}
