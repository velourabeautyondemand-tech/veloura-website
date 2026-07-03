import { NextResponse } from 'next/server';
import { initializeFirebase } from '@/firebase';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Ghost sends 'post' object for post-related events
    const postCurrent = body.post?.current;
    const postPrevious = body.post?.previous;

    const { firestore } = initializeFirebase();

    // Handle Deletion or Unpublishing
    if (!postCurrent && postPrevious?.slug) {
      const docRef = doc(firestore, 'blogPosts', postPrevious.slug);
      await deleteDoc(docRef);
      return NextResponse.json({ success: true, message: 'Post deleted from website' }, { status: 200 });
    }

    if (!postCurrent) {
      return NextResponse.json({ error: 'Invalid Ghost webhook payload' }, { status: 400 });
    }

    const docRef = doc(firestore, 'blogPosts', postCurrent.slug);

    // Only save/update if status is published
    if (postCurrent.status === 'published') {
        const mappedPost = {
          id: postCurrent.id,
          title: postCurrent.title,
          slug: postCurrent.slug,
          content: postCurrent.html,
          heroImageUrl: postCurrent.feature_image || null,
          excerpt: postCurrent.excerpt || null,
          metaDescription: postCurrent.meta_description || null,
          publishedAt: postCurrent.published_at || new Date().toISOString(),
          url: postCurrent.url,
          updatedAt: new Date().toISOString(),
          status: postCurrent.status,
          category: "Lifestyle" // Default category
        };
        await setDoc(docRef, mappedPost, { merge: true });
        return NextResponse.json({ success: true, message: 'Post synced to website' }, { status: 200 });
    } else {
        // If it's switched back to draft or scheduled, remove it from the live site
        await deleteDoc(docRef);
        return NextResponse.json({ success: true, message: 'Post hidden from website (status changed)' }, { status: 200 });
    }

  } catch (error: any) {
    console.error('Ghost Webhook Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
