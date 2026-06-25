import {blogPosts} from '@/lib/blog-data';
export const dynamic='force-dynamic';
export const revalidate=0;
export async function GET(){
const baseUrl='https://velourabeautyondemand.com';
const currentDate=new Date().toISOString();
const coreRoutes=['','/services','/talent-agency','/apply','/pro-discounts','/blog','/about','/events','/contact','/support','/privacy','/terms','/partner-agreement','/partner-press','/reliability-policy','/customer-policy','/beauty-professional-jobs','/beauty-services-near-me','/best-mobile-beauty-platform','/home-beauty-services','/join-as-hair-stylist','/join-as-makeup-artist','/join-as-photographer','/on-demand-beauty-app','/compare-beauty-apps'];
const urlEntries=coreRoutes.map(r=>`<url><loc>${baseUrl}${r}</loc><lastmod>${currentDate}</lastmod><changefreq>${r===''?'weekly':'monthly'}</changefreq><priority>${r===''?'1.0':'0.8'}</priority></url>`).join('');
const blogEntries=blogPosts.map(p=>`<url><loc>${baseUrl}/blog/${p.slug}</loc><lastmod>${new Date(p.date).toISOString()}</lastmod><changefreq>monthly</changefreq><priority>0.6</priority></url>`).join('');
const xml=`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}${blogEntries}</urlset>`;
return new Response(xml,{headers:{'Content-Type':'application/xml','Cache-Control':'no-cache, no-store, must-revalidate','X-Content-Type-Options':'nosniff'}});
}
