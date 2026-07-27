'use server';
/**
 * @fileOverview VÉLOURA AI Concierge Flow.
 *
 * - matchTalent - Handles the talent matching process based on user event descriptions.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { services } from '@/lib/data';

const MatchTalentInputSchema = z.object({
  description: z.string().describe('The user\'s description of their event or beauty needs.'),
});
export type MatchTalentInput = z.infer<typeof MatchTalentInputSchema>;

const MatchTalentOutputSchema = z.object({
  suggestedService: z.string().describe('The name of the suggested service from the menu.'),
  reasoning: z.string().describe('A persuasive explanation of why this service fits their specific needs.'),
  proTips: z.string().describe('A few pro tips for the user to prepare for this specific service.'),
});
export type MatchTalentOutput = z.infer<typeof MatchTalentOutputSchema>;

// Internal schema for the prompt to include the dynamic services list
const PromptInputSchema = MatchTalentInputSchema.extend({
  services: z.array(z.object({
    name: z.string(),
    description: z.string()
  })),
});

const prompt = ai.definePrompt({
  name: 'matchTalentPrompt',
  input: { schema: PromptInputSchema },
  output: { schema: MatchTalentOutputSchema },
  prompt: `You are the VÉLOURA AI Concierge, a luxury beauty and lifestyle expert. 
Your goal is to help users find the perfect service from the VÉLOURA menu based on their event description.

Available Services Menu:
{{#each services}}
- {{name}}: {{description}}
{{/each}}

User's Request: "{{{description}}}"

Analyze the user's request. Consider factors like event type (wedding, photoshoot, corporate), location/climate (humidity in Miami, dry heat in LA), and specific style preferences.
Recommend the ONE most appropriate service. If multiple fit, choose the most comprehensive one (like a VIP package).

Provide a suggested service name, a luxury-toned reasoning, and some helpful pro tips.`,
});

export async function matchTalent(input: MatchTalentInput): Promise<MatchTalentOutput> {
  try {
    return await matchTalentFlow(input);
  } catch (error: any) {
    console.error("Match Talent Flow Error:", error);
    // Extract a cleaner error message if it's a quota issue
    const message = error.message?.includes('429') 
      ? "Our AI Concierge is currently at peak capacity. Please try again in a few moments or explore our services menu manually." 
      : "We encountered a hiccup while matching you. Please try again or contact our support team.";
    throw new Error(message);
  }
}

const matchTalentFlow = ai.defineFlow(
  {
    name: 'matchTalentFlow',
    inputSchema: MatchTalentInputSchema,
    outputSchema: MatchTalentOutputSchema,
  },
  async (input) => {
    const { output } = await prompt({
      description: input.description,
      services: services.map(s => ({ name: s.name, description: s.description }))
    });
    
    if (!output) {
      throw new Error("No recommendation could be generated at this time.");
    }
    
    return output;
  }
);
