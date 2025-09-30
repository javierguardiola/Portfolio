'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a concise summary of how Javier Guardiola's consulting background and RPA/BPM knowledge can benefit potential clients.
 *
 * @exports clientBenefitSummary - The main function to generate the client benefit summary.
 * @exports ClientBenefitSummaryInput - The input type for the clientBenefitSummary function.
 * @exports ClientBenefitSummaryOutput - The output type for the clientBenefitSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ClientBenefitSummaryInputSchema = z.object({
  aboutMe: z.string().describe("A detailed overview of Javier Guardiola's background, experience, and passion for process optimization using technology."),
  skillsAndExperience: z.string().describe("A highlight of expertise in RPA (Blue Prism), BPM (Appian), Java, and n8n, along with experience in technology consulting for major companies."),
});
export type ClientBenefitSummaryInput = z.infer<typeof ClientBenefitSummaryInputSchema>;

const ClientBenefitSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise summary of how Javier Guardiola can benefit clients.'),
});
export type ClientBenefitSummaryOutput = z.infer<typeof ClientBenefitSummaryOutputSchema>;

export async function clientBenefitSummary(input: ClientBenefitSummaryInput): Promise<ClientBenefitSummaryOutput> {
  return clientBenefitSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'clientBenefitSummaryPrompt',
  input: {schema: ClientBenefitSummaryInputSchema},
  output: {schema: ClientBenefitSummaryOutputSchema},
  prompt: `Given the following information about Javier Guardiola's background, skills, and experience, generate a concise summary of how he can benefit potential clients.\n\nAbout Me: {{{aboutMe}}}\n\nSkills & Experience: {{{skillsAndExperience}}}\n\nSummary:`,
});

const clientBenefitSummaryFlow = ai.defineFlow(
  {
    name: 'clientBenefitSummaryFlow',
    inputSchema: ClientBenefitSummaryInputSchema,
    outputSchema: ClientBenefitSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
