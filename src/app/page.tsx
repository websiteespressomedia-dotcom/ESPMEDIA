"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Hero3D from "@/components/Hero3D";

import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import AboutSection from "@/components/AboutSection";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const SERVICES_LIST = [
  "Content Strategy & Marketing",
  "Branding & Creative Solutions",
  "Commercial Production",
  "Web Development",
  "AI Automation",
];

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="relative min-h-screen bg-black overflow-clip selection:bg-white/30">
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && <Navbar />}

      {/* Hero Section Container */}
      <div className="relative h-screen w-full">
        {/* Ambient Animated Background */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Top Left Glow */}
          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/20 blur-[150px] mix-blend-screen animate-pulse duration-[10s]" />
          {/* Bottom Right Glow */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/20 blur-[150px] mix-blend-screen animate-pulse duration-[15s]" />
          {/* Center Subtle Glow */}
          <div className="absolute top-[30%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-fuchsia-600/10 blur-[120px] mix-blend-screen" />
        </div>

        <Hero3D />

        <section className="relative z-10 w-full h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 max-w-[1920px] mx-auto pointer-events-none">
          {/* Main Typography - Left Aligned for Maximum Readability */}
          <div className="flex flex-col items-start justify-center gap-6 mt-[-10vh] max-w-3xl pointer-events-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-[8rem] font-serif leading-[1.05] tracking-tight text-white flex flex-col items-start drop-shadow-2xl">
              <div className="overflow-hidden pb-2">
                <motion.div 
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: loading ? "100%" : 0, opacity: loading ? 0 : 1 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  360° Branding
                </motion.div>
              </div>
              <div className="overflow-hidden pb-4">
                <motion.div 
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: loading ? "100%" : 0, opacity: loading ? 0 : 1 }}
                  transition={{ duration: 1.2, delay: 1.0, ease: [0.215, 0.61, 0.355, 1] }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-white/50 italic pr-4"
                >
                  & Marketing
                </motion.div>
              </div>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="text-white/80 text-lg md:text-2xl leading-relaxed max-w-xl font-light tracking-wide drop-shadow-lg"
            >
              Helping visionary businesses grow with strategy, immersive design, and performance marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-8 items-center"
            >
              <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 pointer-events-auto shadow-[0_0_40px_rgba(139,92,246,0.3)]">
                <div className="absolute inset-0 w-full h-full bg-violet-100 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500 ease-out" />
                <span className="relative font-medium tracking-wider text-sm uppercase">Book Strategy Call</span>
              </button>

              <Link href="/work" className="group pointer-events-auto">
                <div className="flex items-center gap-4 text-white/70 hover:text-white transition-colors duration-300">
                  <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:border-white/80 transition-colors duration-300 bg-black/20 backdrop-blur-sm">
                    <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-300" />
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase font-semibold">View Work</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Bottom Services Marquee */}
        <div className="absolute bottom-0 w-full overflow-hidden border-t border-white/5 bg-black/40 backdrop-blur-lg py-4 pointer-events-auto z-20">
          <motion.div 
            className="flex whitespace-nowrap items-center w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST, ...SERVICES_LIST].map((service, index) => (
              <div key={index} className="flex items-center">
                <span className="text-white/70 hover:text-white transition-colors duration-300 text-xs tracking-[0.2em] uppercase font-medium cursor-pointer">
                  {service}
                </span>
                {/* Separator Icon */}
                <svg className="w-4 h-4 mx-12 text-violet-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            ))}
          </motion.div>
        </div>
      </div>


      <AboutSection />
      <Services />
      <FeaturedWork />
      <Process />
      <Stats />
      <Blog />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
