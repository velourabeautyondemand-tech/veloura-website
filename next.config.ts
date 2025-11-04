
import type {NextConfig} from 'next';
import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Helper function to fetch redirects from Firestore
async function fetchRedirects() {
  if (!getApps().length) {
    initializeApp({
      projectId: "studio-8096841563-8bcb9",
    });
  }
  
  const db = getFirestore();
  const redirects = [];

  try {
    const snapshot = await db.collection('shortlinks').get();
    if (!snapshot.empty) {
      snapshot.forEach(doc => {
        const data = doc.data();
        if (data.originalUrl) {
          redirects.push({
            source: `/s/${doc.id}`,
            destination: data.originalUrl,
            permanent: false, // Or true if you want permanent redirects
          });
        }
      });
    }
  } catch (error) {
    console.error("Error fetching redirects from Firestore:", error);
    // Don't block the build if Firestore is unavailable, just log the error.
  }
  
  return redirects;
}


const nextConfig: NextConfig = {
  /* config options here */
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
    ],
  },
  async redirects() {
    return await fetchRedirects();
  },
  async rewrites() {
    return [];
  },
};

export default nextConfig;
