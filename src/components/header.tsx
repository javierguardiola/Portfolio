
"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <span className="text-sm font-bold">JG</span>
      </div>
      <span className="hidden font-headline text-lg font-semibold sm:inline-block">
        Javier Guardiola
      </span>
    </Link>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-card/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-card">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b pb-4">
                  <Logo />
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground"
                      onClick={(e) => handleLinkClick(e, link.href)}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
