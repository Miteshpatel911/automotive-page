
import ParallaxSection from "./ui/ParallaxSection";
import GradientButton from "./ui/GradientButton";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <ParallaxSection
      imageUrl="https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=2070&auto=format&fit=crop"
      intensity={0.15}
      className="min-h-[60vh] flex items-center"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="heading-lg mb-6"
        >
          Ready to <span className="text-gradient">Revolutionize</span> Your Automotive Sales?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="body-lg mb-10 text-muted-foreground"
        >
          Transform your customer experience and boost sales with our cutting-edge VR and 3D solutions.
          Get started today and stay ahead of the competition.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
        >
          <GradientButton size="lg">
            Request a Demo
          </GradientButton>
          <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
            Get Started Now
          </Button>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground"
        >
          <p>No credit card required. Start with a free consultation.</p>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default CallToAction;
