import { cn } from "@/lib/utils";

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2
      className={cn(
        "text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
