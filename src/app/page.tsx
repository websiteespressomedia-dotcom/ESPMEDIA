"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import Hero3D from "@/components/Hero3D";
import CircularReveal from "@/components/CircularReveal";
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
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/5 blur-[120px] mix-blend-screen animate-pulse duration-[10s]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-white/5 blur-[150px] mix-blend-screen animate-pulse duration-[15s]" />
        </div>

        <Hero3D />

        <section className="relative z-10 w-full h-screen flex px-8 md:px-16 lg:px-24 max-w-[1920px] mx-auto">
          {/* Left Navigation */}
          <div className="hidden lg:flex flex-col justify-center w-1/4 h-full">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: loading ? 0 : 1, x: loading ? -50 : 0 }}
              transition={{ duration: 1, delay: 0.5, staggerChildren: 0.1 }}
              className="flex flex-col gap-6"
            >
              {SERVICES_LIST.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="text-white/40 hover:text-white transition-colors duration-500 cursor-pointer text-sm tracking-[0.2em] uppercase group flex items-center gap-4"
                >
                  <span className="w-8 h-[1px] bg-white/20 group-hover:bg-white group-hover:w-12 transition-all duration-500" />
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Center Interactive Area over 3D Object */}
          <Link 
            href="/work"
            className="w-full lg:w-2/4 h-full relative z-10 flex items-center justify-center group cursor-pointer"
          >
            <div className="w-32 h-32 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center text-white tracking-[0.2em] text-[10px] uppercase opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-out pointer-events-none leading-relaxed">
              <span>View</span>
              <span>Our</span>
              <span>Work</span>
            </div>
          </Link>

          {/* Right Content */}
          <div className="w-full lg:w-1/4 h-full flex flex-col justify-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-serif leading-[1.1] tracking-tight text-white">
                <div className="overflow-hidden pb-2">
                  <motion.div 
                    initial={{ y: "100%", rotate: 4, opacity: 0 }}
                    animate={{ y: loading ? "100%" : 0, rotate: loading ? 4 : 0, opacity: loading ? 0 : 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                    className="origin-bottom-left"
                  >
                    360° Branding &
                  </motion.div>
                </div>
                <div className="overflow-hidden pb-2">
                  <motion.div 
                    initial={{ y: "100%", rotate: 4, opacity: 0 }}
                    animate={{ y: loading ? "100%" : 0, rotate: loading ? 4 : 0, opacity: loading ? 0 : 1 }}
                    transition={{ duration: 1.2, delay: 1.0, ease: [0.215, 0.61, 0.355, 1] }}
                    className="origin-bottom-left text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40"
                  >
                    Marketing Agency
                  </motion.div>
                </div>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                className="text-white/60 text-lg leading-relaxed max-w-md font-light"
              >
                Helping businesses grow with strategy, design, websites and performance marketing.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: loading ? 0 : 1, y: loading ? 20 : 0 }}
                transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              >
                <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full overflow-hidden hover-target transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-0 w-full h-full bg-white/50 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500 ease-out" />
                  <span className="relative font-medium tracking-wide">Book Strategy Call</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: loading ? 0 : 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">Scroll</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full h-full bg-white"
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      <CircularReveal />
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
