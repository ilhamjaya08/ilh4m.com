import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-inter',
});
export default function Home() {
  return (
    <div className={`${inter.variable} min-h-screen bg-[#f5f5f5]`}>
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center px-8 bg-[#FFE5E5]"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            className="flex items-center justify-center"
          >
            <Image
              src="/hero-illustration.svg"
              alt="Hero Illustration"
              width={500}
              height={500}
              priority
            />
          </motion.div>
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-5xl font-bold mb-4">Hi, I'm
              <TypeAnimation
                sequence={[
                  'Developer',
                  2000,
                  'Designer',
                  2000,
                  'Creator',
                  2000,
                ]}
                wrapper="span"
                repeat={Infinity}
                className="ml-2"
              />
            </h1>
            <p className="text-xl">Creating awesome digital experiences with neo-brutalist style</p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
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

      {/* Navigation Section */}
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

      {/* Contact Section */}
      <motion.section
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
    </div>
  );
}
