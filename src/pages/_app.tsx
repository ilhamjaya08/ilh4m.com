import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DM_Sans } from 'next/font/google';
import Head from "next/head";  // Changed this line
import Cursor from "@/components/Cursor";
import { Analytics } from "@vercel/analytics/react"
import { Navo } from "@/components/Navo";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Muhammad Ilham Jaya's portfolio website. I am a passionate software developer with expertise in web development, creating innovative solutions and delivering high-quality applications." />
      <meta name="keywords" content="ilham, ilhamjaya08, portfolio, nextjs, seo, dev, developer, programmer, tailwind, muhammad ilham jaya" />
      <meta property="og:title" content="Ilham.live" />
      <meta property="og:description" content="Muhammad Ilham Jaya's portfolio website. I am a passionate software developer with expertise in web development, creating innovative solutions and delivering high-quality applications." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ilham.live" />
      <meta property="og:image" content="https://ilham.live/og.png" />
      <link rel="canonical" href="https://ilham.live" />
    </Head>
    <main className={dmSans.className + " text-black dark:text-black"}>
      <Navo />
      <Header />
      <Analytics />
      <Cursor />
      <Component {...pageProps} />
      <Footer />
    </main>
    </>
  );
}
