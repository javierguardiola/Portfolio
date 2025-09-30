import Image from "next/image";
import { content, avatarImage } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { ClientBenefitSummary } from "@/components/client-benefit-summary";
import { SectionHeading } from "../ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-card py-20 md:py-28">
      <div className="container grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="space-y-6">
          <SectionHeading>Sobre mí</SectionHeading>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            {content.about}
          </p>
          <Card className="bg-background">
            <CardContent className="p-6">
              <h3 className="mb-3 font-headline text-lg font-semibold">¿Cómo puedo ayudarte?</h3>
              <ClientBenefitSummary />
            </CardContent>
          </Card>
        </div>
        <div className="flex items-center justify-center">
          {avatarImage && (
            <Image
              src={avatarImage.imageUrl}
              alt="Javier Guardiola"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
              data-ai-hint={avatarImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
