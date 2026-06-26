/**
 * Redundant route handler removed to favor the standard src/app/sitemap.ts metadata route.
 * This prevents routing conflicts and ensures character-perfect XML generation.
 */
export async function GET() {
  return new Response(null, { status: 404 });
}