/**
 * This file is disabled to prevent conflicts with src/app/sitemap.ts.
 * Next.js handles sitemap generation automatically via the sitemap.ts metadata route.
 * Having both files leads to duplicate XML declaration errors or corrupted responses.
 */
export async function GET() {
  return new Response('Sitemap is handled by /sitemap.ts', { 
    status: 404,
    headers: { 'Content-Type': 'text/plain' }
  });
}