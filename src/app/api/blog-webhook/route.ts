import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

// Secret token moved to environment variables for security
const BABYLOVEGROWTH_WEBHOOK_SECRET = process.env.BABYLOVEGROWTH_WEBHOOK_SECRET; 

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
        event: 'Auth Failure',
        receivedAt,
        status: 'error',
        payloadSummary: `Unauthorized: Invalid or missing token. Header: ${authHeader?.substring(0, 15)}...`
      });
      return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse payload
    const payload = await request.json();
    
    // 3. Validate mandatory fields
    if (!payload.slug || !payload.title || !payload.content_html) {
      await addDoc(collection(firestore, 'webhook_logs'), {
        source: 'BabyLoveGrowth',
        event: 'Validation Failure',
        receivedAt,
        status: 'error',
        payloadSummary: `Missing fields: ${!payload.slug ? 'slug ' : ''}${!payload.title ? 'title ' : ''}${!payload.content_html ? 'content' : ''}`
      });
      return NextResponse.json({ status: 'error', message: 'Missing required fields' }, { status: 400 });
    }

    // 4. Sanitize and Map Slug
    const cleanSlug = payload.slug.toString().trim().replace(/^\//, '').replace(/\/$/, '');
    const docRef = doc(firestore, 'blogPosts', cleanSlug);

    const mappedPost = {
      id: payload.id?.toString() || cleanSlug,
      title: payload.title,
      slug: cleanSlug,
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

    // Use setDoc for atomicity
    await setDoc(docRef, mappedPost, { merge: true });

    // Log the success
    await addDoc(collection(firestore, 'webhook_logs'), {
      source: 'BabyLoveGrowth',
      event: 'Article Sync',
      receivedAt,
      status: 'success',
      payloadSummary: `Synced: ${payload.title} (Slug: ${cleanSlug})`
    });

    return NextResponse.json({ status: "success" }, { status: 200 });

  } catch (error: any) {
    console.error('BabyLoveGrowth Webhook Error:', error);
    
    if (firestoreInstance) {
        try {
            await addDoc(collection(firestoreInstance, 'webhook_logs'), {
                source: 'BabyLoveGrowth',
                event: 'Critical Error',
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
