import { skills } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "../ui/section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-28">
      <div className="container">
        <SectionHeading>Experiencia y Habilidades</SectionHeading>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <Card key={skill.title} className="flex flex-col text-center transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="items-center">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <skill.icon className="h-8 w-8" />
                </div>
                <CardTitle className="font-headline text-xl">{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
