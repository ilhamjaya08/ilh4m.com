import { motion } from "framer-motion";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import codingAnim from "../../../public/coding.json";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export const HeroSection = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center px-8 bg-[#FFE5E5]"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ x: -100 }}
          animate={{ 
            x: 0,
            y: [-10, 10, -10],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="flex items-center justify-center"
        >
          <Lottie animationData={codingAnim} loop={true} />
        </motion.div>        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          className="flex flex-col justify-center items-center text-center"
        >
          <h1 className="text-6xl font-bold mb-2">Muhammad Ilham Jaya</h1>
          <div className="text-3xl">
            I'm a{" "}
            <TypeAnimation
              sequence={[
                'Software Engineer',
                2000,
                'Web Developer',
                2000,
                'Student',
                2000,
                'Chill Guy',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="font-semibold"
            />
          </div>
          <p className="text-xl mt-4">Passionate developer crafting innovative solutions with clean and efficient code</p>
        </motion.div>
      </div>
    </motion.section>
  );
};
