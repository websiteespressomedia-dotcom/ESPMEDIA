"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ALL_PROJECTS = [
  {
    id: 1,
    slug: "content-strategy-and-marketing",
    title: "Content Strategy & Marketing",
    category: "Strategic Growth",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "branding-and-creative-solutions",
    title: "Branding & Creative Solutions",
    category: "Design & Identity",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2370&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "commercial-production",
    title: "Commercial Production",
    category: "Video & Motion",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2371&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "web-development",
    title: "Web Development",
    category: "Digital Platforms",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
  }
];

const ProjectLayer = ({ project, index, progress }: any) => {
  // Hero takes up 0 to 0.1
  // Project 0 wipes in from 0.05 to 0.25
  // Project 1 wipes in from 0.25 to 0.45
  // Project 2 wipes in from 0.45 to 0.65
  // Project 3 wipes in from 0.65 to 0.85
  const startReveal = 0.05 + (index * 0.2);
  const endReveal = 0.25 + (index * 0.2);

  // Expanding circle mask reveal
  const clipRadius = useTransform(progress, [startReveal, endReveal], [0, 150]);
  const clipPath = useMotionTemplate`circle(${clipRadius}% at 50% 50%)`;

  // Deep parallax for the background image (zooms out as circle expands)
  const imageScale = useTransform(progress, [startReveal, endReveal], [1.5, 1.05]);

  // Deep parallax for the typography (slides up gracefully)
  const textY = useTransform(progress, [startReveal, endReveal], ["15vh", "0vh"]);
  const textOpacity = useTransform(progress, [startReveal + 0.05, endReveal - 0.05], [0, 1]);

  return (
    <motion.div 
      style={{ clipPath, zIndex: index + 10 }}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
    >
      {/* Background Image Layer */}
      <motion.div style={{ scale: imageScale }} className="absolute inset-0 w-full h-full bg-black pointer-events-auto">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-50 md:opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
      </motion.div>
      
      {/* Foreground Content Layer */}
      <motion.div 
        style={{ y: textY, opacity: textOpacity }} 
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 md:p-12 pointer-events-none"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#d9b15c] animate-pulse" />
          <span className="text-white/80 uppercase tracking-[0.3em] text-xs font-semibold">0{index + 1} — {project.category}</span>
        </div>
        
        <h2 className="text-5xl md:text-8xl lg:text-[9rem] font-serif text-white tracking-tighter leading-[0.9] mb-12 drop-shadow-2xl max-w-6xl">
          {project.title}
        </h2>
        
        <Link href={`/work/${project.slug}`} className="pointer-events-auto group relative inline-flex items-center justify-center px-10 py-5 bg-white text-black rounded-full overflow-hidden transition-transform duration-300 hover:scale-105">
           <div className="absolute inset-0 w-full h-full bg-[#d9b15c] group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500 ease-out" />
           <span className="relative font-bold tracking-widest text-xs uppercase z-10 transition-colors duration-300">View Experience</span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default function WorkPage() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Hero section fades out very quickly
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.95]);

  return (
    <main className="relative bg-black overflow-clip selection:bg-white/30 text-white">
      <Navbar />
      
      {/* 500vh container drives the scroll animation */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        
        {/* Sticky section that stays on screen while scrolling */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
          
          {/* Ambient Animated Background Lights */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-violet-600/20 blur-[150px] mix-blend-screen animate-pulse duration-[10s]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/20 blur-[150px] mix-blend-screen animate-pulse duration-[15s]" />
            <div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] rounded-full bg-fuchsia-600/10 blur-[120px] mix-blend-screen" />
          </div>

          {/* Hero Typography State */}
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }}
            className="absolute inset-0 z-0 flex flex-col items-center justify-center overflow-hidden will-change-transform"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center justify-center w-full"
            >
              {/* Massive Kinetic Typography */}
              <div className="relative flex flex-col items-center text-center">
                <h1 className="text-[12vw] leading-[0.8] font-serif tracking-tighter text-white z-10 drop-shadow-2xl">
                  SELECTED
                </h1>
                <h1 className="text-[14vw] leading-[0.8] font-serif tracking-tighter text-transparent z-0 -mt-[4vw]" style={{ WebkitTextStroke: "2px rgba(255,255,255,0.2)" }}>
                  WORKS
                </h1>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-base md:text-xl text-white/50 font-light mt-12 md:mt-16 tracking-wide"
              >
                Scroll to explore our finest digital experiences.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-8 animate-bounce"
              >
                <span className="text-xl text-white/60">↓</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Full-Screen Project Mask Reveals */}
          {ALL_PROJECTS.map((project, index) => (
            <ProjectLayer 
              key={project.id}
              index={index}
              project={project}
              progress={scrollYProgress}
            />
          ))}

        </div>
      </div>

      <Footer />
    </main>
  );
}
