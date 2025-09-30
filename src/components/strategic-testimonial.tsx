import { injectTestimonial } from '@/ai/flows/strategic-testimonial-injection';
import { testimonials } from '@/lib/data';
import { TestimonialCard } from './testimonial-card';

export async function StrategicTestimonial({ sectionContent }: { sectionContent: string }) {
  try {
    const testimonialStrings = testimonials.map(t => `"${t.quote}" - ${t.author}, ${t.company}`);
    const result = await injectTestimonial({
      content: sectionContent,
      testimonials: testimonialStrings,
    });

    if (result && result.testimonial) {
      const fullTestimonial = testimonials.find(t => result.testimonial.includes(t.quote));
      if (fullTestimonial) {
        return <TestimonialCard {...fullTestimonial} />;
      }
    }
  } catch (error) {
    console.error("Error injecting testimonial:", error);
  }
  
  // Render nothing if no relevant testimonial is found or if an error occurs
  return null;
}
