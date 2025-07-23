import { motion } from "framer-motion";
import axios from "axios";
import { useState, useEffect } from "react";

export const AboutSection = () => {
  const [quote, setQuote] = useState({ q: null, a: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get('/api/quotes');
        setQuote(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching quote:', error);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="min-h-screen flex items-center justify-center py-20 px-8 bg-[#E5FFE5]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto my-12 p-8 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <motion.h2 
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            whileHover={{ scale: 1.02 }}
            className="text-4xl font-black mb-8 uppercase border-b-4 border-black pb-4"
          >
            About me
          </motion.h2>
          <div className="grid gap-8">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5 }}
              className="bg-[#FFE974] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-lg">I'm a junior software engineer with a passion for building scalable and efficient systems. I have experience in the world of advanced programming for approximately 1 year. I have started game server scripting since 2020, and slowly I stepped into the realm of web and mobile programming.</p>
            </motion.div>
            
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-[#FF9B73] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-bold mb-4">Quick Bio</h3>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-lg space-y-2"
              >
                <motion.p whileHover={{ x: 10, transition: { duration: 0.2 } }}>📍 Location: Karanganyar, Indonesia</motion.p>
                <motion.p whileHover={{ x: 10, transition: { duration: 0.2 } }}>🎓 Education: Software Engineering on SMK Negeri 5 Surakarta</motion.p>
                <motion.p whileHover={{ x: 10, transition: { duration: 0.2 } }}>💼 Current Role: Junior Software Developer</motion.p>
                <motion.p whileHover={{ x: 10, transition: { duration: 0.2 } }}>🎮 Hobbies: Gaming, Coding, Reading</motion.p>
              </motion.div>
            </motion.div>
            {/* <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              transition={{ duration: 0.5 }}
              className="bg-[#B4FF73] p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-bold mb-4">Daily Random Quotes</h3>
              {loading ? (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="h-6 bg-gray-200 rounded"
                />
              ) : (
                <>
                <p className="text-lg">{quote.q}</p>
                <p className="text-sm text-right mt-4 font-bold">{quote.a}</p>
                </>
              )}
            </motion.div> */}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};