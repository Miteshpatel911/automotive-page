
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQItem = ({ question, answer, isOpen = false }: FAQItemProps) => {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button
        className="w-full flex justify-between items-center py-5 text-left"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
      >
        <h3 className="font-medium text-base md:text-lg">{question}</h3>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-primary transition-transform duration-300",
            isExpanded && "rotate-180"
          )}
        />
      </button>
      
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out-expo",
          isExpanded ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
