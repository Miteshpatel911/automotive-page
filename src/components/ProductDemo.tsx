
import { useState } from "react";
import ParallaxSection from "./ui/ParallaxSection";
import { motion } from "framer-motion";
import { Play, PauseCircle } from "lucide-react";
import GradientButton from "./ui/GradientButton";

const ProductDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = () => {
    const video = document.getElementById("demo-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <ParallaxSection
      id="demo"
      gradient="bg-gradient-secondary"
      intensity={0.15}
      className="min-h-screen flex items-center"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-3 px-3 py-1 text-xs uppercase tracking-wider bg-primary/10 rounded-full text-primary"
        >
          Interactive Experience
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg mb-6"
        >
          See Our <span className="text-gradient">VR in Action</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-md max-w-3xl mx-auto text-muted-foreground"
        >
          Experience how customers can explore color options, interiors, and configurations
          without visiting a showroom, leading to faster purchase decisions.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative rounded-xl overflow-hidden glass-morphism p-1 mx-auto max-w-4xl"
      >
        <div className="aspect-w-16 aspect-h-9 relative rounded-lg overflow-hidden">
          <video
            id="demo-video"
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2070&auto=format&fit=crop"
            onClick={togglePlayback}
            onEnded={() => setIsPlaying(false)}
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-man-driving-a-virtual-reality-car-43652-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <button
                onClick={togglePlayback}
                className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors duration-300"
              >
                <Play className="w-8 h-8 text-white" fill="white" />
              </button>
            </div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex justify-center"
      >
        <GradientButton size="lg">
          Try the Demo
        </GradientButton>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="glass-morphism rounded-lg p-6 border border-primary/10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
              <path d="M16 8v-.6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v8.6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V16"/>
              <path d="M18 12h.01"/>
            </svg>
          </div>
          <h3 className="font-medium mb-2">Explore Every Angle</h3>
          <p className="text-sm text-muted-foreground">See vehicles from any perspective with 360° views and zoom capabilities</p>
        </div>
        
        <div className="glass-morphism rounded-lg p-6 border border-primary/10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
              <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
              <path d="M12 3v6"/>
            </svg>
          </div>
          <h3 className="font-medium mb-2">Customize Features</h3>
          <p className="text-sm text-muted-foreground">Instantly change colors, trims, and accessories to find the perfect configuration</p>
        </div>
        
        <div className="glass-morphism rounded-lg p-6 border border-primary/10 text-center">
          <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
              <polyline points="3.29 7 12 12 20.71 7"/>
              <line x1="12" x2="12" y1="22" y2="12"/>
            </svg>
          </div>
          <h3 className="font-medium mb-2">Interactive Test Drive</h3>
          <p className="text-sm text-muted-foreground">Experience virtual test drives with realistic physics and road conditions</p>
        </div>
      </motion.div>
    </ParallaxSection>
  );
};

export default ProductDemo;
