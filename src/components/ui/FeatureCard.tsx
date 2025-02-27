
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "group relative glass-morphism rounded-lg p-6 md:p-8 transition-all duration-300 hover:translate-y-[-4px]",
        className
      )}
    >
      <div className="absolute inset-0 bg-shimmer-gradient opacity-0 group-hover:opacity-100 animate-shimmer rounded-lg overflow-hidden"/>
      
      <div className="flex flex-col h-full relative z-10">
        <div className="w-12 h-12 rounded-full glass-morphism flex items-center justify-center mb-6 text-primary text-xl">
          {icon}
        </div>
        
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        
        <p className="text-muted-foreground flex-grow">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
