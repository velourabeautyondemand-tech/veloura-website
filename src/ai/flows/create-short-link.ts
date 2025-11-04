
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
import { nanoid } from 'nanoid';
import * as admin from 'firebase-admin';

const CreateShortLinkInputSchema = z.object({
  originalUrl: z.string().url(),
});
export type CreateShortLinkInput = z.infer<typeof CreateShortLinkInputSchema>;

const CreateShortLinkOutputSchema = z.object({
  shortUrl: z.string().url(),
});
export type CreateShortLinkOutput = z.infer<typeof CreateShortLinkOutputSchema>;

// Helper function to initialize Firebase Admin SDK
function initializeAdminApp() {
  if (admin.apps.length > 0) {
    return admin.app();
  }

  // App Hosting provides the config via environment variables.
  const credential = admin.credential.applicationDefault();
  return admin.initializeApp({
    credential,
    projectId: process.env.GCLOUD_PROJECT,
  });
}


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
    const adminApp = initializeAdminApp();
    const firestore = admin.firestore(adminApp);
    
    const shortId = nanoid(7); // Generate a 7-character ID
    const shortLinkRef = firestore.collection('shortlinks').doc(shortId);

    await shortLinkRef.set({
      originalUrl: originalUrl,
      createdAt: new Date().toISOString(),
    });

    const shortUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002'}/s/${shortId}`;

    return {
      shortUrl: shortUrl,
    };
  }
);
