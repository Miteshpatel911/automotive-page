
import ParallaxSection from "./ui/ParallaxSection";
import StatCard from "./ui/StatCard";
import { motion } from "framer-motion";
import { Activity, DollarSign, Clock, Award } from "lucide-react";

const Benefits = () => {
  const stats = [
    {
      title: "Increase in Customer Engagement",
      value: 200,
      suffix: "%",
      description: "Through interactive virtual experiences",
      icon: <Activity />,
    },
    {
      title: "Reduction in Showroom Costs",
      value: 15,
      suffix: "%",
      description: "By shifting to digital experiences",
      icon: <DollarSign />,
    },
    {
      title: "Faster Decision-Making",
      value: 30,
      suffix: "%",
      description: "And 81% higher purchase intent",
      icon: <Clock />,
    },
    {
      title: "More Customer Inquiries",
      value: 50,
      suffix: "%",
      description: "When offering a VR-powered experience",
      icon: <Award />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <ParallaxSection
      id="benefits"
      imageUrl="https://images.unsplash.com/photo-1586920740099-f3ceb65dd504?q=80&w=2070&auto=format&fit=crop"
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
          Why Choose Us
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg mb-6"
        >
          Why Our VR Solutions are <span className="text-gradient">Revolutionizing</span> Automotive Sales
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-md max-w-3xl mx-auto text-muted-foreground"
        >
          Our immersive virtual reality solutions are transforming how customers experience vehicles,
          leading to remarkable improvements in engagement, efficiency, and sales conversion.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={itemVariants}>
            <StatCard {...stat} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-16 grid md:grid-cols-2 gap-8"
      >
        <div className="glass-morphism rounded-lg p-6 md:p-8">
          <h3 className="heading-sm mb-4">Visualize Before They Buy</h3>
          <p className="text-muted-foreground mb-4">
            Immersive, 360° VR tours allow customers to explore vehicles like never before. They can experience every detail, from interior features to exterior finishes, all from the comfort of their home.
          </p>
          <div className="flex items-center text-primary">
            <span className="mr-2">◉</span>
            <span>Increase customer confidence in purchasing decisions</span>
          </div>
        </div>

        <div className="glass-morphism rounded-lg p-6 md:p-8">
          <h3 className="heading-sm mb-4">Lower Costs, Higher Efficiency</h3>
          <p className="text-muted-foreground mb-4">
            Reduce showroom expenses and streamline sales by enabling customers to virtually explore your entire inventory without requiring physical models of every trim and color option.
          </p>
          <div className="flex items-center text-primary">
            <span className="mr-2">◉</span>
            <span>Optimize inventory management and showroom space</span>
          </div>
        </div>
      </motion.div>
    </ParallaxSection>
  );
};

export default Benefits;
