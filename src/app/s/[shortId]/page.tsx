
'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { useFirestore } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';

export default function ShortLinkPage({ params }: { params: { shortId: string } }) {
  const { shortId } = params;
  const firestore = useFirestore();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!shortId || !firestore) {
      return;
    }

    const getAndRedirect = async () => {
      try {
        const docRef = doc(firestore, 'shortlinks', shortId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const originalUrl = docSnap.data()?.originalUrl;
          if (originalUrl) {
            window.location.href = originalUrl;
          } else {
            setError('Original URL not found in the link data.');
          }
        } else {
          setError('This short link does not exist.');
        }
      } catch (e) {
        console.error("Error fetching shortlink:", e);
        setError('Could not retrieve the short link.');
      }
    };

    getAndRedirect();
  }, [shortId, firestore]);

  useEffect(() => {
      if (error) {
          notFound();
      }
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary/30">
        <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-muted-foreground">Redirecting...</p>
        </div>
    </div>
  );
}
