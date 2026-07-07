"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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

const Card = ({ project, index, progress }: any) => {
  // Calculate dynamic scroll ranges for this specific card
  const slideStart = index * 0.25 + 0.05;
  const slideEnd = slideStart + 0.15;

  // Alternate between sliding from left (-100vw) and right (100vw)
  const startX = index % 2 === 0 ? "-100vw" : "100vw";

  // Transform scroll progress into an X position
  // Before slideStart: off-screen
  // Between slideStart and slideEnd: sliding to center (0vw)
  // After slideEnd: pinned at center (0vw)
  const x = useTransform(
    progress,
    [0, slideStart, slideEnd, 1],
    [startX, startX, "0vw", "0vw"]
  );

  return (
    <motion.div 
      style={{ x }}
      className="absolute inset-0 w-full h-full z-10 p-4 md:p-8 flex items-center justify-center will-change-transform pointer-events-none"
    >
      <div className="w-full max-w-6xl h-[65vh] md:h-[75vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group shadow-2xl pointer-events-auto">
        <Link href={`/work/${project.slug}`} className="block w-full h-full relative cursor-pointer">
          <div className="absolute inset-0 w-full h-full">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out grayscale-[30%] group-hover:grayscale-0"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80" />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000" />

          <div className="absolute inset-0 z-20 p-8 pb-12 md:p-12 md:pb-16 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="bg-black/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#d9b15c] animate-pulse" />
                <span className="text-xs tracking-[0.2em] uppercase font-semibold text-white/90">
                  {project.category}
                </span>
              </div>
              
              <span className="text-5xl md:text-8xl font-serif font-light text-white/10 group-hover:text-white/30 transition-colors duration-700">
                0{index + 1}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 transition-transform duration-700 ease-out">
              <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter leading-[1.1] text-white max-w-4xl pr-8">
                {project.title}
              </h3>
              
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#d9b15c] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center transform group-hover:translate-x-full transition-transform duration-500">
                  <span className="text-black text-2xl md:text-3xl font-light transform -rotate-45">→</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                  <span className="text-black text-2xl md:text-3xl font-light transform -rotate-45">→</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default function WorkPage() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="relative bg-black overflow-clip selection:bg-white/30 text-white">
      <Navbar />
      
      {/* The 500vh container drives the scroll animation */}
      <div ref={containerRef} className="relative h-[500vh] w-full">
        
        {/* The sticky section that stays on screen while scrolling */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black flex items-center justify-center">
          
          {/* Initial Background State (visible before cards slide in) */}
          <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pt-20 px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col gap-6 max-w-4xl"
            >
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tighter leading-none">
                Selected <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">
                  Works
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/60 font-light mt-8">
                Scroll down to explore our finest digital experiences.
              </p>
              
              <div className="mt-12 animate-bounce opacity-50">
                <span className="text-2xl">↓</span>
              </div>
            </motion.div>
          </div>

          {/* The 4 Project Cards sliding in from the left */}
          {ALL_PROJECTS.map((project, index) => (
            <Card 
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
