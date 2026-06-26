import { MetadataRoute } from 'next';
import { getBlogs } from 'babylovegrowth-next-js-blog';
export const dynamic = 'force-dynamic';
export const revalidate = 3600;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
const baseUrl = 'https://velourabeautyondemand.com';
const currentDate = new Date();
const staticRoutes = ['', '/services', '/talent-agency', '/apply', '/pro-discounts', '/blog', '/about', '/events', '/contact', '/support', '/privacy', '/terms', '/partner-agreement', '/partner-press', '/reliability-policy', '/customer-policy', '/beauty-professional-jobs', '/beauty-services-near-me', '/best-mobile-beauty-platform', '/home-beauty-services', '/join-as-hair-stylist', '/join-as-makeup-artist', '/join-as-photographer', '/on-demand-beauty-app', '/compare-beauty-apps', '/hotel-partners', '/vendor-partners'];
const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: route === '' ? 1.0 : 0.8 }));
try {
const blogs = await getBlogs();
const blogEntries: MetadataRoute.Sitemap = blogs.map((post: any) => ({ url: `${baseUrl}/blog/${post.slug}`, lastModified: new Date(post.updatedAt || post.date || currentDate), changeFrequency: 'monthly' as const, priority: 0.6 }));
return [...staticEntries, ...blogEntries];
} catch (e) {
return staticEntries;
}
}