import { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-data';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export default function sitemap(): MetadataRoute.Sitemap {
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
'/hotel-partnerships',
];
const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
url: `${baseUrl}${route}`,
lastModified: currentDate,
changeFrequency: 'weekly',
priority: route === '' ? 1.0 : 0.8,
}));
const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
url: `${baseUrl}/blog/${post.slug}`,
lastModified: new Date(post.date),
changeFrequency: 'monthly',
priority: 0.6,
}));
return [...staticEntries, ...blogEntries];
}