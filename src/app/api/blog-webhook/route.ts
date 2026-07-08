
import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';

// Secure secret token for authentication
const WEBHOOK_SECRET = 'blg_3f8a92b1e7c5d401'; 

export async function GET() {
  return NextResponse.json({ 
    status: 'online', 
    service: 'BabyLoveGrowth Webhook Handler',
    timestamp: new Date().toISOString(),
    instructions: 'Send POST requests with "x-api-key" header.'
  }, { status: 200 });
}

export async function POST(request: Request) {
  const { firestore } = initializeFirebase();
  const receivedAt = new Date().toISOString();
  
  // Authenticate request
  const authHeader = request.headers.get('x-api-key');
  if (authHeader !== WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const payload = await request.json();
    
    // Validate payload
    if (!payload.slug || !payload.title || !payload.content) {
      return NextResponse.json({ error: 'Missing required fields: slug, title, content' }, { status: 400 });
    }

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

    await setDoc(docRef, mappedPost, { merge: true });

    // Log the sync for visibility in Admin Dashboard
    await addDoc(collection(firestore, 'webhook_logs'), {
      source: 'BabyLoveGrowth',
      event: 'Article Sync',
      receivedAt,
      status: 'success',
      payloadSummary: payload.title
    });

    return NextResponse.json({ success: true, message: 'Article synced successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('BabyLoveGrowth Webhook Error:', error);
    
    // Log failure
    try {
        await addDoc(collection(firestore, 'webhook_logs'), {
            source: 'BabyLoveGrowth',
            event: 'Failure',
            receivedAt,
            status: 'error',
            errorMessage: error.message
        });
    } catch (logError) {
        console.error('Failed to log webhook error:', logError);
    }

    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
