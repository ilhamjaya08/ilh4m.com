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
  );
};
