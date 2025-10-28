
import { NextRequest, NextResponse } from 'next/server';
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseConfig } from '@/firebase/config';

// Initialize Firebase Admin
if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const db = getFirestore();

export async function GET(
  request: NextRequest,
  { params }: { params: { shortId: string } }
) {
  const { shortId } = params;

  if (!shortId) {
    return new NextResponse('Bad Request: shortId is missing.', { status: 400 });
  }

  try {
    const linkDocRef = doc(db, 'shortlinks', shortId);
    const linkDoc = await getDoc(linkDocRef);

    if (linkDoc.exists()) {
      const { originalUrl } = linkDoc.data();
      return NextResponse.redirect(originalUrl);
    } else {
      return new NextResponse('Not Found', { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching short link:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
