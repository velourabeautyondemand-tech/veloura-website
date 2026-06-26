/**
 * This route is disabled to allow the standard src/app/sitemap.ts to handle sitemap generation.
 * Having both files causes a routing conflict in Next.js.
 */
export async function GET() {
  return new Response('Not Found', { status: 404 });
}
