'use server';
/**
 * @fileOverview VÉLOURA AI Concierge Flow.
 *
 * - matchTalent - Handles the talent matching process based on user event descriptions and the verified professional roster.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { services } from '@/lib/data';
import { VÉLOURA_PROFESSIONALS } from '@/lib/talent-data';

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

// Internal schema for the prompt to include the dynamic services list and professional roster
const PromptInputSchema = MatchTalentInputSchema.extend({
  services: z.array(z.object({
    name: z.string(),
    description: z.string()
  })),
  professionals: z.array(z.object({
    firstName: z.string(),
    city: z.string(),
    state: z.string(),
    specialty: z.string()
  })),
});

const prompt = ai.definePrompt({
  name: 'matchTalentPrompt',
  input: { schema: PromptInputSchema },
  output: { schema: MatchTalentOutputSchema },
  prompt: `You are the VÉLOURA AI Concierge, a luxury beauty and lifestyle expert. 
Your goal is to help users find the perfect service from the VÉLOURA menu based on their event description and our available talent roster.

Available Services Menu:
{{#each services}}
- {{name}}: {{description}}
{{/each}}

Our Verified Professional Coverage (Snapshot):
We have elite professionals in many cities, including:
{{#each professionals}}
- {{firstName}} ({{specialty}}) in {{city}}, {{state}}
{{/each}}

User's Request: "{{{description}}}"

Your Task:
1. Analyze the user's request for event type, location, and style.
2. Cross-reference their location with our coverage list.
3. Recommend the ONE most appropriate service from our menu.
4. If multiple fit, choose the most comprehensive one (like a VIP package) for big events.
5. Provide a luxury-toned reasoning that mentions our expertise in their specific category.
6. Provide helpful pro tips for the service.

Tone: Professional, elite, and welcoming.`,
});

export async function matchTalent(input: MatchTalentInput): Promise<MatchTalentOutput> {
  try {
    // Execute the flow
    const response = await matchTalentFlow(input);
    return response;
  } catch (error: any) {
    console.error("DEBUG: Match Talent Flow Error Detail:", error);
    
    // Provide specific feedback for configuration issues
    if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('API key not found')) {
      throw new Error("AI CONFIGURATION ERROR: The Google GenAI API Key is missing or invalid in the hosting environment variables.");
    }

    const message = error.message?.includes('429') 
      ? "Our AI Concierge is currently at peak capacity. Please try again in a few moments." 
      : `AI CONNECTION ERROR: ${error.message || "We encountered a technical hiccup."}`;
      
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
    // We pass a subset of professional info to stay efficient while giving the AI enough context
    const { output } = await prompt({
      description: input.description,
      services: services.map(s => ({ name: s.name, description: s.description })),
      // Reducing context slightly to avoid hitting payload-size related rate limits
      professionals: VÉLOURA_PROFESSIONALS.slice(0, 70).map(p => ({
        firstName: p.firstName,
        city: p.city,
        state: p.state,
        specialty: p.specialty
      }))
    });
    
    if (!output) {
      throw new Error("The AI model returned an empty response. This usually happens when the prompt is blocked by safety filters or quota limits.");
    }
    
    return output;
  }
);
