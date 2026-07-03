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
  try {
    return await summarizeTechnicianReviewsFlow(input);
  } catch (error: any) {
    console.error("Summarize Reviews Flow Error:", error);
    const message = error.message?.includes('429') 
      ? "AI review summarization is currently over capacity. Please read the individual reviews below."
      : "Failed to summarize reviews. Please try again later.";
    throw new Error(message);
  }
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
    if (!output) {
      throw new Error("No summary could be generated.");
    }
    return output;
  }
);
