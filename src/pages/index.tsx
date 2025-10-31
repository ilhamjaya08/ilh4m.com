import { DM_Sans } from "next/font/google";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NavigationSection } from "@/components/sections/NavigationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import Head from "next/head";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Particles } from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";

const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

const LoadingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [merged, setMerged] = useState(false);
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setMerged(true), 3000);
    const timer2 = setTimeout(() => {
      setExploded(true);
      setTimeout(onComplete, 1000);
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  const shapes = {
    initial: {
      y: 0,
      rotate: 0,
      scale: 1,
    },
    animate: {
      y: [0, -10, 0],
      rotate: [0, 360],
      scale: merged ? 0.8 : 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    merge: {
      x: 0,
      y: 0,
      scale: 1.2,
      transition: { duration: 0.5 }
    },
    explode: {
      scale: 0,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-[#f2e8e1]"
      animate={exploded ? { opacity: 0 } : { opacity: 1 }}
    >
      <div className="relative flex gap-8">
        <motion.div
          className="w-16 h-16 bg-[#2d2d2d] rounded-sm"
          variants={shapes}
          initial="initial"
          animate={exploded ? "explode" : merged ? "merge" : "animate"}
          style={{ originX: 0.5, originY: 0.5 }}
        />
        <motion.div
          className="w-16 h-16 bg-[#2d2d2d]"
          variants={shapes}
          initial="initial"
          animate={exploded ? "explode" : merged ? "merge" : "animate"}
          style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", originX: 0.5, originY: 0.5 }}
        />
        <motion.div
          className="w-16 h-16 bg-[#2d2d2d] rounded-full"
          variants={shapes}
          initial="initial"
          animate={exploded ? "explode" : merged ? "merge" : "animate"}
          style={{ originX: 0.5, originY: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

const particlesConfig = {
  particles: {
    number: { value: 80 },
    color: { value: "#2d2d2d" },
    shape: {
      type: ["circle", "triangle", "square"],
      options: {
        polygon: { nb_sides: 5 }
      }
    },
    opacity: {
      value: 0.5,
      random: false,
    },
    size: {
      value: 3,
      random: true
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none", // Use the string literal type "none" to match the enum
      random: false,
      straight: false,
      outModes: { default: "out" },
    }
  }
};

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [init, setInit] = useState(false);

  const particlesInit = async (engine: Engine) => {
      await loadSlim(engine);
      setInit(true);
    };

  return (
    <>
      <Head>
        <title>Ilh4m - Software Engineer</title>
        <meta name="description" content="Welcome to my personal portfolio website. I am a professional developer showcasing my work and experience." />
        <meta name="keywords" content="portfolio, developer, web development, projects" />
        <meta name="author" content="You" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="My Portfolio - Welcome to My Personal Website" />
        <meta property="og:description" content="Welcome to my personal portfolio website. I am a professional developer showcasing my work and experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilh4m.com" />
        <link rel="canonical" href="https://ilh4m.com" />
      </Head>
      <AnimatePresence>
        {loading && (
          <>
            <LoadingAnimation onComplete={() => setLoading(false)} />
            {init && (
              <Particles
                id="tsparticles"
                init={particlesInit}
                className="fixed inset-0 z-50"
              />
            )}
          </>
        )}
      </AnimatePresence>
      <motion.div 
        className={`${dmsans.className} min-h-screen bg-[#f5f5f5]`}
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <NavigationSection />
        <ContactSection />
      </motion.div>
    </>
  );
}