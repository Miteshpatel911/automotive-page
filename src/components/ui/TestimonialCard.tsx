
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating?: number;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  rating = 5,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "glass-morphism rounded-lg p-6 md:p-8 relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px]",
        className
      )}
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
      
      <div className="mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "inline-block mr-1 text-lg",
              i < rating ? "text-primary" : "text-muted"
            )}
          >
            ★
          </span>
        ))}
      </div>
      
      <blockquote className="mb-6 relative z-10">
        <p className="italic text-lg">"{quote}"</p>
      </blockquote>
      
      <div className="flex items-center">
        <div>
          <p className="font-medium">{author}</p>
          <p className="text-sm text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
