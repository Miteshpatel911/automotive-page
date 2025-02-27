
import { useEffect } from "react";
import Header from "@/components/Header";
import Benefits from "@/components/Benefits";
import ProductDemo from "@/components/ProductDemo";
import Testimonials from "@/components/Testimonials";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

// Load framer-motion for this page
import { motion, useScroll, useSpring } from "framer-motion";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Add a class to the body when the page loads to trigger animations
    document.body.classList.add("page-loaded");
    
    // Cleanup function
    return () => {
      document.body.classList.remove("page-loaded");
    };
  }, []);

  return (
    <div className="relative">
      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Header />
      <Benefits />
      <ProductDemo />
      <Features />
      <Testimonials />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
