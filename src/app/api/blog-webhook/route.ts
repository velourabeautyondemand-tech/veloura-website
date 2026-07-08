
import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

// Secure secret token for authentication
const WEBHOOK_SECRET = 'blg_3f8a92b1e7c5d401'; 

export async function GET() {
  return NextResponse.json({ status: 'online' }, { status: 200 });
}

export async function POST(request: Request) {
  try {
    // 1. Authenticate request immediately
    const authHeader = request.headers.get('x-api-key');
    if (authHeader !== WEBHOOK_SECRET) {
      return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 });
    }

    // 2. Parse payload
    const payload = await request.json();
    const receivedAt = new Date().toISOString();
    
    // 3. Validate payload
    if (!payload.slug || !payload.title || !payload.content) {
      return NextResponse.json({ status: 'error', message: 'Missing required fields' }, { status: 400 });
    }

    // 4. Initialize and Write to Firestore
    const { firestore } = initializeFirebase();
    const docRef = doc(firestore, 'blogPosts', payload.slug);

    const mappedPost = {
      id: payload.id || payload.slug,
      title: payload.title,
      slug: payload.slug,
      content: payload.content,
      heroImageUrl: payload.heroImageUrl || payload.imageUrl || null,
      excerpt: payload.excerpt || null,
      metaDescription: payload.metaDescription || payload.excerpt || null,
      publishedAt: payload.publishedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: payload.author || "BabyLoveGrowth",
      status: 'published',
      category: payload.category || "Lifestyle",
      source: "BabyLoveGrowth"
    };

    // Use await for internal sync to ensure consistency, but return the required JSON format
    await setDoc(docRef, mappedPost, { merge: true });

    // Log the sync for visibility in Admin Dashboard
    await addDoc(collection(firestore, 'webhook_logs'), {
      source: 'BabyLoveGrowth',
      event: 'Article Sync',
      receivedAt,
      status: 'success',
      payloadSummary: payload.title
    });

    // 5. Return ONLY the requested success status
    return NextResponse.json({ status: "success" }, { status: 200 });

  } catch (error: any) {
    console.error('BabyLoveGrowth Webhook Error:', error);
    
    // Ensure even errors return JSON, not HTML
    return NextResponse.json({ 
      status: 'error', 
      message: error.message 
    }, { status: 500 });
  }
}
