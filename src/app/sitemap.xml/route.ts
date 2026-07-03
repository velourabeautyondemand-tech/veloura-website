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
    console.error('Sitemap Firestore Fetch Error:', e);
    return [];
  }
}

export async function GET() {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date().toISOString();

  const staticRoutes = [
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
    '/hotel-partners',
    '/vendor-partners'
  ];

  const firestoreSlugs = await getFirestoreBlogSlugs();
  const legacySlugs = legacyPosts.map(p => p.slug);
  
  const allSlugs = Array.from(new Set([...legacySlugs, ...firestoreSlugs]));

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
