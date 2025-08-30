import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  titleClassName?: string;
  centered?: boolean;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  className,
  titleClassName,
  centered = true 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-16",
      centered && "text-center",
      className
    )}>
      {subtitle && (
        <p className="text-secondary font-semibold text-lg mb-4 animate-fade-in">
          {subtitle}
        </p>
      )}
      <h2 className={cn(
        "font-playfair text-5xl lg:text-6xl font-bold text-primary mb-6 animate-fade-in animate-delay-200",
        titleClassName
      )}>
        {title}
      </h2>
      {description && (
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in animate-delay-400">
          {description}
        </p>
      )}
    </div>
  );
}