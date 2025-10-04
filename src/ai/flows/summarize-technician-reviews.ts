'use server';

/**
 * @fileOverview Summarizes technician reviews, highlighting key positive and negative feedback.
 *
 * - summarizeTechnicianReviews - A function that summarizes technician reviews.
 * - SummarizeTechnicianReviewsInput - The input type for the summarizeTechnicianReviews function.
 * - SummarizeTechnicianReviewsOutput - The return type for the summarizeTechnicianReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTechnicianReviewsInputSchema = z.object({
  reviews: z
    .string()
    .describe('The reviews of the technician.'),
});
export type SummarizeTechnicianReviewsInput = z.infer<typeof SummarizeTechnicianReviewsInputSchema>;

const SummarizeTechnicianReviewsOutputSchema = z.object({
  summary: z.string().describe('The summary of the technician reviews.'),
});
export type SummarizeTechnicianReviewsOutput = z.infer<typeof SummarizeTechnicianReviewsOutputSchema>;

export async function summarizeTechnicianReviews(input: SummarizeTechnicianReviewsInput): Promise<SummarizeTechnicianReviewsOutput> {
  return summarizeTechnicianReviewsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeTechnicianReviewsPrompt',
  input: {schema: SummarizeTechnicianReviewsInputSchema},
  output: {schema: SummarizeTechnicianReviewsOutputSchema},
  prompt: `You are an AI expert specializing in summarizing reviews.

  You will use this information to summarize the technician reviews, highlighting key positive and negative feedback.

  Reviews: {{{reviews}}}`,
});

const summarizeTechnicianReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeTechnicianReviewsFlow',
    inputSchema: SummarizeTechnicianReviewsInputSchema,
    outputSchema: SummarizeTechnicianReviewsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
