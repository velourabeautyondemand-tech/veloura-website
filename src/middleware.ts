import { NextResponse, type NextRequest } from 'next/server';

const PRIVATE_ROUTE = /^\/(admin|customer|technician|bookings|login|signup|forgot-password)(\/|$)/;

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  if (PRIVATE_ROUTE.test(request.nextUrl.pathname)) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive');
  }
  return response;
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/customer/:path*',
    '/technician/:path*',
    '/bookings',
    '/login',
    '/signup',
    '/forgot-password',
  ],
};
