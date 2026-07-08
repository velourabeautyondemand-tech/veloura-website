
import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

// Secret token for Bearer authentication
const BABYLOVEGROWTH_WEBHOOK_SECRET = 'blg_3f8a92b1e7c5d401'; 

export async function GET() {
  return NextResponse.json({ status: 'online', message: 'Send POST with Bearer token' }, { status: 200 });
}

export async function POST(request: Request) {
  try {
    // 1. Validate Authorization Bearer Token
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ') || authHeader.split(' ')[1] !== BABYLOVEGROWTH_WEBHOOK_SECRET) {
      return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse payload
    const payload = await request.json();
    const receivedAt = new Date().toISOString();
    
    // 3. Validate mandatory fields
    if (!payload.slug || !payload.title || !payload.content_html) {
      return NextResponse.json({ status: 'error', message: 'Missing required fields: slug, title, or content_html' }, { status: 400 });
    }

    // 4. Initialize and Write to Firestore
    const { firestore } = initializeFirebase();
    const docRef = doc(firestore, 'blogPosts', payload.slug);

    const mappedPost = {
      id: payload.id,
      title: payload.title,
      slug: payload.slug,
      content: payload.content_html, // Mapped for site rendering
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

    // Use internal sync
    await setDoc(docRef, mappedPost, { merge: true });

    // Log the sync for Admin Dashboard visibility
    await addDoc(collection(firestore, 'webhook_logs'), {
      source: 'BabyLoveGrowth',
      event: 'Article Sync',
      receivedAt,
      status: 'success',
      payloadSummary: payload.title
    });

    // 5. Return EXACT required success response
    return NextResponse.json({ status: "success" }, { status: 200 });

  } catch (error: any) {
    console.error('BabyLoveGrowth Webhook Error:', error);
    
    // Ensure errors return JSON
    return NextResponse.json({ 
      status: 'error', 
      message: error.message 
    }, { status: 500 });
  }
}
