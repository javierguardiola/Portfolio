import Image from "next/image";
import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "../ui/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full bg-card py-20 md:py-28">
      <div className="container">
        <SectionHeading>Proyectos Destacados</SectionHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
              {project.image && (
                <Image
                  src={project.image.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full object-cover"
                  data-ai-hint={project.image.imageHint}
                />
              )}
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
