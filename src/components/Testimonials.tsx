
import ParallaxSection from "./ui/ParallaxSection";
import TestimonialCard from "./ui/TestimonialCard";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Our VR solutions reduced showroom costs by 10-15% and increased engagement by 200%!",
      author: "Sarah Johnson",
      role: "Head of Sales",
      company: "Premium Motors",
      rating: 5
    },
    {
      quote: "Customer dwell time increased by 40% and conversion rates improved dramatically since implementing AutoVR.",
      author: "Michael Chen",
      role: "Marketing Director",
      company: "Elite Automotive",
      rating: 5
    },
    {
      quote: "The virtual showroom experience has revolutionized how we present vehicles to our clients. It's a game-changer.",
      author: "James Wilson",
      role: "CEO",
      company: "Luxury Vehicles Inc",
      rating: 4
    }
  ];

  const brands = [
    "BMW", "Mercedes-Benz", "Toyota", "Ford", "Honda", "Lexus"
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
      id="testimonials"
      imageUrl="https://images.unsplash.com/photo-1625225233840-695456021cde?q=80&w=2070&auto=format&fit=crop"
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
          Success Stories
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg mb-6"
        >
          Trusted by Top <span className="text-gradient">Automotive Brands</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-md max-w-3xl mx-auto text-muted-foreground"
        >
          Our immersive VR solutions have helped leading automotive companies transform their sales process,
          reduce costs, and increase customer engagement.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div key={index} variants={itemVariants}>
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="glass-morphism rounded-lg p-8 text-center"
      >
        <h3 className="heading-sm mb-8">Partners & Clients</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div 
              key={index}
              className="text-xl md:text-2xl font-display text-muted-foreground/60 hover:text-primary transition-colors duration-300"
            >
              {brand}
            </div>
          ))}
        </div>
      </motion.div>
    </ParallaxSection>
  );
};

export default Testimonials;
