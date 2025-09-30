'use server';

/**
 * @fileOverview This file defines a Genkit flow for strategically injecting testimonials into a website.
 *
 * It uses AI to determine the relevance of testimonials to specific content and inject them accordingly.
 * - injectTestimonial - A function that injects a relevant testimonial. Accepts content and available testimonials as input.
 * - InjectTestimonialInput - The input type for the injectTestimonial function.
 * - InjectTestimonialOutput - The return type for the injectTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

// Define schemas for input and output
const InjectTestimonialInputSchema = z.object({  
  content: z.string().describe('The content of the section where a testimonial might be injected.'),
  testimonials: z.array(z.string()).describe('An array of available testimonials.'),
});

export type InjectTestimonialInput = z.infer<typeof InjectTestimonialInputSchema>;

const InjectTestimonialOutputSchema = z.object({
  testimonial: z.string().describe('The most relevant testimonial to inject into the content, or an empty string if none are relevant.'),
});

export type InjectTestimonialOutput = z.infer<typeof InjectTestimonialOutputSchema>;

// Define the main function that will be called
export async function injectTestimonial(input: InjectTestimonialInput): Promise<InjectTestimonialOutput> {
  return injectTestimonialFlow(input);
}

// Define the prompt for determining testimonial relevance
const testimonialPrompt = ai.definePrompt({
  name: 'testimonialRelevancePrompt',
  input: { schema: InjectTestimonialInputSchema },
  output: { schema: InjectTestimonialOutputSchema },
  prompt: `Given the following content and a list of testimonials, determine the most relevant testimonial to inject into the content. If no testimonial is relevant, return an empty string.

Content: {{{content}}}

Testimonials:
{{#each testimonials}}- {{{this}}}
{{/each}}

Return only the most relevant testimonial or an empty string if none are relevant.`,
});

// Define the Genkit flow
const injectTestimonialFlow = ai.defineFlow(
  {
    name: 'injectTestimonialFlow',
    inputSchema: InjectTestimonialInputSchema,
    outputSchema: InjectTestimonialOutputSchema,
  },
  async input => {
    const { output } = await testimonialPrompt(input);
    return output!;
  }
);
