
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type GradientButtonProps = React.ComponentPropsWithoutRef<typeof Button> & {
  gradientClassName?: string;
};

const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, gradientClassName, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "relative overflow-hidden transition-all duration-300 border-none",
          "before:absolute before:inset-0 before:z-0 before:opacity-100 before:transition-opacity before:duration-300",
          "hover:before:opacity-90 active:scale-[0.98] active:before:opacity-80",
          gradientClassName ? 
            `before:bg-${gradientClassName}` : 
            "before:bg-gradient-accent",
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    );
  }
);

GradientButton.displayName = "GradientButton";

export default GradientButton;
