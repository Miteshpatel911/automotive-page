
import ParallaxSection from "./ui/ParallaxSection";
import FeatureCard from "./ui/FeatureCard";
import { motion } from "framer-motion";
import { Globe, LayoutGrid, Cable, Cloud } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Virtual Showroom Technology",
      description: "Bring the showroom to the customer with fully interactive 3D environments that showcase every detail of your vehicles.",
      icon: <Globe />
    },
    {
      title: "Customizable Configurations",
      description: "Let customers explore trims, colors, and features in real-time, creating their perfect vehicle with immediate visual feedback.",
      icon: <LayoutGrid />
    },
    {
      title: "Integration with CRM Systems",
      description: "Track leads and interactions seamlessly with full integration to your existing CRM and sales platforms.",
      icon: <Cable />
    },
    {
      title: "Cloud-Based for Scalability",
      description: "Access anywhere with real-time updates and no hardware limitations, ensuring your experience scales with your business.",
      icon: <Cloud />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <ParallaxSection
      id="features"
      gradient="bg-gradient-secondary"
      intensity={0.15}
      className="min-h-screen flex items-center"
    >
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-3 px-3 py-1 text-xs uppercase tracking-wider bg-primary/10 rounded-full text-primary"
        >
          Powerful Features
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg mb-6"
        >
          Advanced Features Tailored for <span className="text-gradient">Automotive Success</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-md max-w-3xl mx-auto text-muted-foreground"
        >
          Our comprehensive suite of VR and 3D solutions provides everything you need to create
          compelling digital experiences that drive sales and customer satisfaction.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {features.map((feature, index) => (
          <motion.div key={index} variants={itemVariants}>
            <FeatureCard {...feature} />
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 glass-morphism rounded-lg overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h3 className="heading-sm mb-6">The Complete Virtual Experience</h3>
            <p className="text-muted-foreground mb-6">
              Our platform goes beyond simple 3D models to create truly immersive experiences that 
              engage customers and drive sales, all while reducing your operational costs.
            </p>
            <ul className="space-y-3 text-sm">
              {[
                "Full VR compatibility with major headsets",
                "Browser-based fallback for universal access",
                "Real-time analytics on customer interactions",
                "Secure cloud storage for all 3D assets",
                "Regular feature updates and improvements"
              ].map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative min-h-[300px]">
            <img 
              src="https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?q=80&w=2070&auto=format&fit=crop" 
              alt="VR Experience" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay"></div>
          </div>
        </div>
      </motion.div>
    </ParallaxSection>
  );
};

export default Features;
