
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  startOnView?: boolean;
}

const AnimatedCounter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  className,
  startOnView = true,
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(!startOnView);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startOnView) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }
  }, [startOnView]);

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const countUp = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(countUp);
      }
    };
    
    animationFrame = requestAnimationFrame(countUp);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <div ref={counterRef} className={cn("transition-opacity duration-500", className)}>
      {prefix}
      {count}
      {suffix}
    </div>
  );
};

export default AnimatedCounter;
