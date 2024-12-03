import { DM_Sans } from "next/font/google";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NavigationSection } from "@/components/sections/NavigationSection";
import { ContactSection } from "@/components/sections/ContactSection";
import Head from "next/head";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '900']
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Ilham.live - Software Developer</title>
        <meta name="description" content="Welcome to my personal portfolio website. I am a professional developer showcasing my work and experience." />
        <meta name="keywords" content="portfolio, developer, web development, projects" />
        <meta name="author" content="Your Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="My Portfolio - Welcome to My Personal Website" />
        <meta property="og:description" content="Welcome to my personal portfolio website. I am a professional developer showcasing my work and experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ilham.live" />
        <link rel="canonical" href="https://ilham.live" />
      </Head>
      <div className={`${dmsans.className} min-h-screen bg-[#f5f5f5]`}>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <NavigationSection />
        <ContactSection />
      </div>
    </>
  );
}