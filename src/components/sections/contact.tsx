import { content } from "@/lib/data";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "../ui/section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="w-full bg-card py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeading>{content.contact.title}</SectionHeading>
          <p className="mt-4 text-muted-foreground">
            {content.contact.description}
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
