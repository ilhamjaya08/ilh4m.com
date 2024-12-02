import { motion } from "framer-motion";

export const NavigationSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center px-8 bg-[#E5E5FF]"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Projects', 'Blog', 'Services'].map((item, index) => (
          <motion.div
            key={item}
            whileHover={{ scale: 1.05 }}
            className="p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <h3 className="text-2xl font-bold">{item}</h3>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
