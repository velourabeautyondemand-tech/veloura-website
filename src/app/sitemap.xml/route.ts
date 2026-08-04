
import { blogPosts as legacyPosts } from '@/lib/blog-data';
import { initializeFirebase } from '@/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { ACTIVE_LOCATIONS, ACTIVE_SERVICES } from '@/lib/marketplace-data';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

// Ghost API Configuration
const GHOST_URL = 'https://veloura-beauty-on-demand.ghost.io';
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
    const res = await fetch(`${GHOST_URL}/ghost/api/content/posts/?key=${GHOST_CONTENT_KEY}&fields=slug&limit=all`);
    if (!res.ok) return [];
    const data = await res.json();
    return (data.posts || []).map((p: any) => p.slug);
  } catch (e) {
    console.error('Sitemap Ghost API Fetch Error:', e);
    return [];
  }
}

export async function GET() {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date().toISOString();

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

  const firestoreSlugs = await getFirestoreBlogSlugs();
  const ghostApiSlugs = await getGhostApiSlugs();
  const legacySlugs = legacyPosts.map(p => p.slug);
  
  // Combine all sources and remove duplicates
  const allSlugs = Array.from(new Set([...legacySlugs, ...firestoreSlugs, ...ghostApiSlugs]));

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add Static Routes
  staticRoutes.forEach((route) => {
    xml += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`;
  });

  // Add Intersection Routes (Location + Service)
  ACTIVE_LOCATIONS.forEach(loc => {
    ACTIVE_SERVICES.forEach(service => {
      xml += `
  <url>
    <loc>${baseUrl}/locations/${loc.slug}/${service.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });
  });

  // Add Blog Post Routes
  allSlugs.forEach((slug) => {
    xml += `
  <url>
    <loc>${baseUrl}/blog/${slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  xml += `
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=59',
    },
  });
}
