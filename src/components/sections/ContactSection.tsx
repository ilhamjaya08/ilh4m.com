import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <motion.section
    id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center px-8 bg-[#FFE5FF]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          className="max-w-2xl mx-auto p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border-4 border-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border-4 border-black focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-4 border-4 border-black focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full p-4 bg-black text-white font-bold hover:bg-gray-800"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
};
