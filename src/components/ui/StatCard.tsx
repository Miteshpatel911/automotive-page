
import { cn } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description?: string;
  className?: string;
  icon?: React.ReactNode;
}

const StatCard = ({
  title,
  value,
  prefix = "",
  suffix = "",
  description,
  className,
  icon,
}: StatCardProps) => {
  return (
    <div
      className={cn(
        "rounded-lg glass-morphism p-6 transition-transform duration-300 hover:translate-y-[-4px]",
        className
      )}
    >
      <div className="flex items-center space-x-3 mb-3">
        {icon && <div className="text-primary text-xl">{icon}</div>}
        <h3 className="font-medium text-base md:text-lg">{title}</h3>
      </div>
      
      <div className="font-display text-3xl md:text-4xl font-bold mb-2 text-gradient">
        <AnimatedCounter
          end={value}
          prefix={prefix}
          suffix={suffix}
        />
      </div>
      
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default StatCard;
