import { clientBenefitSummary } from '@/ai/flows/client-benefit-summary';
import { content, skills } from '@/lib/data';

export async function ClientBenefitSummary() {
  try {
    const skillsAndExperience = skills.map(s => `**${s.title}:** ${s.description}`).join('\n');
    
    const result = await clientBenefitSummary({
      aboutMe: content.about,
      skillsAndExperience: skillsAndExperience,
    });
    
    if (result && result.summary) {
      return (
        <p className="text-sm text-muted-foreground md:text-base">{result.summary}</p>
      );
    }
  } catch (error) {
    console.error("Error generating client benefit summary:", error);
    // Return a fallback or null in case of an error
  }

  // Fallback content if AI fails or returns nothing
  return (
    <p className="text-sm text-muted-foreground md:text-base">
      Con mi experiencia en consultoría y un profundo conocimiento en RPA y BPM, ofrezco soluciones que optimizan procesos, aumentan la eficiencia y aportan valor tangible a su negocio.
    </p>
  );
}
