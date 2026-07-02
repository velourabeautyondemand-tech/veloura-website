
import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const post = body.post?.current;

    if (!post) {
      return NextResponse.json({ error: 'Invalid Ghost webhook payload' }, { status: 400 });
    }

    const { firestore } = initializeFirebase();

    // Map Ghost fields to Firestore schema
    const mappedPost = {
      id: post.id,
      title: post.title,
      slug: post.slug,
      content: post.html,
      heroImageUrl: post.feature_image || null,
      excerpt: post.excerpt || null,
      metaDescription: post.meta_description || null,
      publishedAt: post.published_at,
      url: post.url,
      updatedAt: new Date().toISOString(),
    };

    const docRef = doc(firestore, 'blogPosts', post.slug);
    await setDoc(docRef, mappedPost, { merge: true });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error('Ghost Webhook Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
