
import { useState, useEffect } from "react";
import GradientButton from "./ui/GradientButton";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { Play, ChevronDown } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className={`py-4 px-6 md:px-12 lg:px-20 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}>
          <div className="container-tight flex justify-between items-center">
            <div className="text-xl font-bold">
              <span className="text-gradient">AutoVR</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#benefits" className="text-sm hover:text-primary transition-colors">Benefits</a>
              <a href="#demo" className="text-sm hover:text-primary transition-colors">Demo</a>
              <a href="#features" className="text-sm hover:text-primary transition-colors">Features</a>
              <a href="#testimonials" className="text-sm hover:text-primary transition-colors">Testimonials</a>
              <GradientButton size="sm">Request a Demo</GradientButton>
            </nav>
            <Button size="icon" variant="ghost" className="md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-screen flex items-center pt-16 overflow-hidden">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-overlay z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-looking-at-his-virtual-reality-headset-27016-large.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="container-tight relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-3 px-3 py-1 text-xs uppercase tracking-wider bg-primary/10 rounded-full text-primary"
          >
            Next-gen automotive sales platform
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="heading-xl mb-6 max-w-4xl mx-auto text-shadow-lg"
          >
            Transform Automotive Sales with Immersive <span className="text-gradient">VR & 3D Solutions</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="body-lg mb-8 max-w-3xl mx-auto text-muted-foreground text-shadow"
          >
            Boost engagement, reduce showroom costs, and accelerate purchase decisions with cutting-edge VR and interactive automotive experiences.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          >
            <GradientButton size="lg">
              Request a Demo
            </GradientButton>
            <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
              Learn More
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-subtle"
          >
            <a href="#benefits" className="flex flex-col items-center text-sm text-muted-foreground hover:text-white transition-colors">
              <span className="mb-2">Scroll to explore</span>
              <ChevronDown className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Header;
