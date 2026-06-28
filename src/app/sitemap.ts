import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

async function getExternalBlogSlugs() {
  try {
    const response = await fetch('https://www.babylovegrowth.com/api/blogs', {
      headers: { 'x-api-key': process.env.BABYLOVEGROWTH_BLOG_API_KEY || '' },
      next: { revalidate: 3600 }
    });
    if (!response.ok) return [];
    const data = await response.json();
    return (data.blogs || []).map((b: any) => b.slug);
  } catch (e) {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://velourabeautyondemand.com';
  const currentDate = new Date();
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
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8
  }));
  const externalSlugs = await getExternalBlogSlugs();
  const allSlugs = Array.from(new Set([...blogPosts.map(p => p.slug), ...externalSlugs]));
  const blogEntries: MetadataRoute.Sitemap = allSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }));
  return [...staticEntries, ...blogEntries];
}
