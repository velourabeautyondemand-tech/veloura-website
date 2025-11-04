
import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { notFound, redirect } from 'next/navigation';
import { firebaseConfig } from '@/firebase/config';

// Initialize Firebase Admin SDK
if (!getApps().length) {
  initializeApp({
    projectId: firebaseConfig.projectId,
  });
}

const db = getFirestore();

async function getOriginalUrl(shortId: string): Promise<string | null> {
  try {
    const docRef = db.collection('shortlinks').doc(shortId);
    const doc = await docRef.get();

    if (doc.exists) {
      return doc.data()?.originalUrl || null;
    }
    return null;
  } catch (error) {
    console.error("Error fetching shortlink:", error);
    return null;
  }
}

export default async function ShortLinkPage({ params }: { params: { shortId: string } }) {
  const { shortId } = params;

  if (!shortId) {
    notFound();
  }

  const originalUrl = await getOriginalUrl(shortId);

  if (originalUrl) {
    redirect(originalUrl);
  } else {
    notFound();
  }
}
