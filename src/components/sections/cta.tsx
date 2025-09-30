import { content } from "@/lib/data";
import { StrategicTestimonial } from "@/components/strategic-testimonial";
import { SectionHeading } from "../ui/section-heading";

export function CtaSection() {
  return (
    <section id="cta" className="w-full py-20 md:py-28">
      <div className="container text-center">
        <SectionHeading>¿Por qué trabajar conmigo?</SectionHeading>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          {content.cta}
        </p>
        <div className="mt-12">
            <StrategicTestimonial sectionContent={content.cta} />
        </div>
      </div>
    </section>
  );
}
