import { Inter } from "next/font/google";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { NavigationSection } from "@/components/sections/NavigationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-inter',
});

export default function Home() {
  return (
    <div className={`${inter.variable} min-h-screen bg-[#f5f5f5]`}>
      <HeroSection />
      <AboutSection />
      <NavigationSection />
      <ContactSection />
    </div>
  );
}