/**
 * This route handler is disabled to resolve a conflict with src/app/sitemap.ts.
 * Next.js automatically generates /sitemap.xml from the root sitemap.ts file.
 */
export async function GET() {
  return new Response('Not Found', { status: 404 });
}