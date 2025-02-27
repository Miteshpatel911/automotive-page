
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
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      // Calculate how far the section is from the center of the viewport
      const distanceFromCenter = (top + sectionHeight / 2) - (windowHeight / 2);
      
      // Calculate the parallax offset based on distance from center
      const newOffset = -(distanceFromCenter * intensity);
      
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [intensity]);

  const backgroundStyle = imageUrl
    ? {
        backgroundImage: `linear-gradient(to bottom, rgba(13, 13, 19, 0.7), rgba(13, 13, 19, 0.8)), url(${imageUrl})`,
        transform: `translateY(${offset}px)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {
        transform: `translateY(${offset}px)`,
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
        className={cn("absolute inset-0 -z-10 transition-transform duration-[50ms]", !imageUrl && gradient)}
        style={backgroundStyle}
      />
      <div className="container-tight relative z-10">{children}</div>
    </section>
  );
};

export default ParallaxSection;
