/**
 * Redundant route handler removed to favor the standard src/app/sitemap.ts metadata route.
 * This prevents routing conflicts and ensuring a single valid source for /sitemap.xml.
 */
export async function GET() {
  return new Response(null, { status: 404 });
}