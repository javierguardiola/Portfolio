import Image from "next/image";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  avatar: string;
}

export function TestimonialCard({ quote, author, company, avatar }: TestimonialCardProps) {
  return (
    <Card className="max-w-2xl mx-auto bg-background border-primary/50 shadow-lg">
      <CardContent className="p-8">
        <Quote className="h-8 w-8 text-primary/50 mb-4" />
        <blockquote className="text-lg italic text-foreground">
          "{quote}"
        </blockquote>
        <div className="mt-6 flex items-center gap-4">
          <Avatar>
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold font-headline">{author}</p>
            <p className="text-sm text-muted-foreground">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
