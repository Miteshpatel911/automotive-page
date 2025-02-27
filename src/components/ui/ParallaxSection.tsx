
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ParallaxSectionProps {
  children: React.ReactNode;
  imageUrl?: string;
  gradient?: string;
  className?: string;
  intensity?: number;
  id?: string;
}

const ParallaxSection = ({
  children,
  imageUrl,
  gradient = "bg-gradient-primary",
  className,
  intensity = 0.2,
  id,
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // Function to calculate parallax effect
    const calculateParallax = () => {
      if (!sectionRef.current) return;

      const { top, height } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the section is from the center of the viewport
      // This gives a more natural parallax that's sensitive to the section's position
      const viewportMiddle = windowHeight / 2;
      const sectionMiddle = top + height / 2;
      const distanceFromCenter = sectionMiddle - viewportMiddle;
      
      // Calculate the parallax offset - adjust for smoother effect
      const newOffset = -(distanceFromCenter * intensity);
      
      setOffset(newOffset);
    };

    // Add scroll listener for smoother updates
    window.addEventListener("scroll", calculateParallax, { passive: true });
    
    // Add resize listener to recalculate on window resize
    window.addEventListener("resize", calculateParallax, { passive: true });
    
    // Call once on mount
    calculateParallax();

    return () => {
      window.removeEventListener("scroll", calculateParallax);
      window.removeEventListener("resize", calculateParallax);
    };
  }, [intensity]);

  const backgroundStyle = imageUrl
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(13, 13, 19, 0.7), rgba(13, 13, 19, 0.8)), url(${imageUrl})`,
        transform: `translateY(${offset}px)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "transform 0.01s linear", // Smoother transition
      }
    : {
        transform: `translateY(${offset}px)`,
        transition: "transform 0.01s linear", // Smoother transition
      };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden section-padding",
        className
      )}
    >
      <div
        className={cn("absolute inset-0 -z-10", !imageUrl && gradient)}
        style={backgroundStyle}
      />
      <div className="container-tight relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxSection;
