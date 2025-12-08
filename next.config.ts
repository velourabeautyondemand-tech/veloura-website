
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Other experimental features can go here if needed.
  },
  // This allows the Next.js dev server to accept requests from the
  // Firebase Studio environment.
  allowedDevOrigins: [
    '6000-firebase-studio-1759589200287.cluster-fhtfcgwkwjgxoujc3bw2r2g7wa.cloudworkstations.dev',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vqftsjfwhonwbpyogmzi.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'uploads.dovetale.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.canva.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'thenailest.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '6000-firebase-studio-1759589200287.cluster-fhtfcgwkwjgxoujc3bw2r2g7wa.cloudworkstations.dev',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;

    
