"use client";

import Link from "next/link";
import { content } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="container text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {content.hero.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          {content.hero.subtitle}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-foreground/80">
          {content.hero.description}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <a href="#projects" onClick={(e) => handleLinkClick(e, "#projects")}>
              Ver proyectos <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")}>Contactar</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
