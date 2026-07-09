import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

// Secret token for Bearer authentication
const BABYLOVEGROWTH_WEBHOOK_SECRET = 'blg_3f8a92b1e7c5d401'; 

export async function GET() {
  return NextResponse.json({ status: 'online', message: 'Send POST with Bearer token' }, { status: 200 });
}

export async function POST(request: Request) {
  let firestoreInstance;
  const receivedAt = new Date().toISOString();
  
  try {
    const { firestore } = initializeFirebase();
    firestoreInstance = firestore;

    // 1. Validate Authorization Bearer Token
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token || token !== BABYLOVEGROWTH_WEBHOOK_SECRET) {
      // Log unauthorized attempt
      await addDoc(collection(firestore, 'webhook_logs'), {
        source: 'BabyLoveGrowth',
        event: 'Sync Attempt',
        receivedAt,
        status: 'error',
        payloadSummary: 'Unauthorized: Invalid or missing Bearer token'
      });
      return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse payload
    const payload = await request.json();
    
    // 3. Validate mandatory fields
    if (!payload.slug || !payload.title || !payload.content_html) {
      await addDoc(collection(firestore, 'webhook_logs'), {
        source: 'BabyLoveGrowth',
        event: 'Sync Attempt',
        receivedAt,
        status: 'error',
        payloadSummary: `Missing fields: ${!payload.slug ? 'slug ' : ''}${!payload.title ? 'title ' : ''}${!payload.content_html ? 'content' : ''}`
      });
      return NextResponse.json({ status: 'error', message: 'Missing required fields' }, { status: 400 });
    }

    // 4. Map and Write to Firestore
    const docRef = doc(firestore, 'blogPosts', payload.slug);

    const mappedPost = {
      id: payload.id?.toString() || payload.slug,
      title: payload.title,
      slug: payload.slug,
      content: payload.content_html,
      metaDescription: payload.metaDescription || null,
      heroImageUrl: payload.heroImageUrl || null,
      content_markdown: payload.content_markdown || null,
      jsonLd: payload.jsonLd || null,
      faqJsonLd: payload.faqJsonLd || null,
      languageCode: payload.languageCode || 'en',
      publicUrl: payload.publicUrl || null,
      publishedAt: payload.createdAt || receivedAt,
      updatedAt: receivedAt,
      source: "BabyLoveGrowth",
      status: 'published'
    };

    await setDoc(docRef, mappedPost, { merge: true });

    // Log the success
    await addDoc(collection(firestore, 'webhook_logs'), {
      source: 'BabyLoveGrowth',
      event: 'Article Sync',
      receivedAt,
      status: 'success',
      payloadSummary: `Synced: ${payload.title}`
    });

    return NextResponse.json({ status: "success" }, { status: 200 });

  } catch (error: any) {
    console.error('BabyLoveGrowth Webhook Error:', error);
    
    if (firestoreInstance) {
        try {
            await addDoc(collection(firestoreInstance, 'webhook_logs'), {
                source: 'BabyLoveGrowth',
                event: 'Sync Failure',
                receivedAt,
                status: 'error',
                payloadSummary: error.message
            });
        } catch (logErr) {
            console.error('Failed to log error to Firestore:', logErr);
        }
    }

    return NextResponse.json({ 
      status: 'error', 
      message: error.message 
    }, { status: 500 });
  }
}
