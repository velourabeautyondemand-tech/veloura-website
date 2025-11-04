
'use server';
/**
 * @fileOverview Creates a short link for a given URL.
 *
 * - createShortLink - A function that generates a short link.
 * - CreateShortLinkInput - The input type for the createShortLink function.
 * - CreateShortLinkOutput - The return type for the createShortLink function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { doc, setDoc } from 'firebase/firestore';
import { nanoid } from 'nanoid';
import { initializeFirebase } from '@/firebase';

const CreateShortLinkInputSchema = z.object({
  originalUrl: z.string().url(),
});
export type CreateShortLinkInput = z.infer<typeof CreateShortLinkInputSchema>;

const CreateShortLinkOutputSchema = z.object({
  shortUrl: z.string().url(),
});
export type CreateShortLinkOutput = z.infer<typeof CreateShortLinkOutputSchema>;

export async function createShortLink(
  input: CreateShortLinkInput
): Promise<CreateShortLinkOutput> {
  return createShortLinkFlow(input);
}

const createShortLinkFlow = ai.defineFlow(
  {
    name: 'createShortLinkFlow',
    inputSchema: CreateShortLinkInputSchema,
    outputSchema: CreateShortLinkOutputSchema,
  },
  async ({ originalUrl }) => {
    const { firestore } = initializeFirebase();
    const shortId = nanoid(7); // Generate a 7-character ID
    const shortLinkRef = doc(firestore, 'shortlinks', shortId);

    await setDoc(shortLinkRef, {
      originalUrl: originalUrl,
      createdAt: new Date().toISOString(),
    });

    const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002'}/s/${shortId}`;

    return {
      shortUrl: shortUrl,
    };
  }
);
