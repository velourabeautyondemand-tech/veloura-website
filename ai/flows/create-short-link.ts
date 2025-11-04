
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

const CreateShortLinkInputSchema = z.object({
  originalUrl: z.string().url(),
});
export type CreateShortLinkInput = z.infer<typeof CreateShortLinkInputSchema>;

const CreateShortLinkOutputSchema = z.object({
  shortId: z.string(),
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
    // This flow is now only responsible for generating a unique ID.
    // The client will handle writing to Firestore.
    const shortId = nanoid(7); 
    return {
      shortId,
    };
  }
);
