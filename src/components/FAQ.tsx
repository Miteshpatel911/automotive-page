
import ParallaxSection from "./ui/ParallaxSection";
import FAQItem from "./ui/FAQItem";
import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do your VR solutions integrate with my current dealership setup?",
      answer: "Our solutions are plug-and-play and integrate with most CRM and sales platforms. We provide full technical support during implementation to ensure seamless integration with your existing systems."
    },
    {
      question: "Do I need VR headsets for customers?",
      answer: "We offer both VR headset and browser-based experiences for maximum accessibility. While VR headsets provide the most immersive experience, customers can still explore your vehicles in 3D using any modern web browser on their computer or mobile device."
    },
    {
      question: "How long does implementation take?",
      answer: "Typical implementation takes 2-4 weeks depending on the size of your inventory and customization requirements. Our team works closely with you to ensure a smooth transition and proper staff training."
    },
    {
      question: "Can we customize the virtual showroom to match our branding?",
      answer: "Absolutely! Our platform is fully customizable to match your brand identity, including colors, logos, showroom environment, and more. We create a cohesive experience that represents your unique brand."
    },
    {
      question: "How are vehicle updates and new models handled?",
      answer: "We provide regular updates as part of our service. New models can be added to your virtual inventory as they're released, ensuring your virtual showroom always represents your current lineup."
    }
  ];

  return (
    <ParallaxSection
      gradient="bg-gradient-primary"
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
          Support
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="heading-lg mb-6"
        >
          Got Questions? <span className="text-gradient">We've Got Answers</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="body-md max-w-3xl mx-auto text-muted-foreground"
        >
          Find answers to common questions about our VR solutions for automotive sales.
          If you don't see your question here, please contact us directly.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass-morphism rounded-lg p-6 md:p-8 max-w-3xl mx-auto w-full"
      >
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === 0}
          />
        ))}
      </motion.div>
    </ParallaxSection>
  );
};

export default FAQ;
