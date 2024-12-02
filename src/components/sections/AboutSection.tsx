import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center px-8 bg-[#E5FFE5]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          className="max-w-2xl mx-auto p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg">A passionate developer who loves creating unique digital experiences...</p>
        </motion.div>
      </div>
    </motion.section>
  );
};
