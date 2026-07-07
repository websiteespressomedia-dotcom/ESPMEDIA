"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CASE_STUDIES = [
  { id: 1, title: "GC TILES CHENNAI", client: "GC Tiles", category: "Content & Strategy", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, title: "SHREEJI TILES", client: "Shreeji", category: "Branding", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2000&auto=format&fit=crop" },
  { id: 3, title: "GC TILES HYDERABAD", client: "GC Tiles", category: "Content & Strategy", image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2000&auto=format&fit=crop" },
  { id: 4, title: "TILE BAZAAR", client: "Tile Bazaar", category: "Web Development", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" },
  { id: 5, title: "VINAYAK TOYOTA", client: "Vinayak Toyota", category: "Commercial", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop" },
  { id: 6, title: "TILE LAB", client: "Tile Lab", category: "Web Development", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop" },
];

export default function CaseStudies() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="case-studies" className="py-32 bg-black text-white border-t border-white/10 relative">
      <div className="container mx-auto px-8 lg:px-16 flex flex-col">
        
        {/* Header */}
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#d9b15c] mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#d9b15c]" />
              Case Studies
            </h2>
            <h3 className="text-5xl md:text-7xl font-serif leading-[1.1] tracking-tighter">
              Featured <span className="italic text-white/50">Work.</span>
            </h3>
          </div>
          <Link href="/work" className="group relative inline-flex items-center justify-center px-8 py-3 bg-white/5 border border-white/20 hover:border-[#d9b15c] rounded-full overflow-hidden transition-all duration-500">
             <div className="absolute inset-0 w-full h-full bg-[#d9b15c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
             <span className="relative text-xs tracking-widest uppercase font-semibold group-hover:text-black transition-colors duration-500">View All</span>
          </Link>
        </div>

        {/* Interactive List & Sticky Image */}
        <div className="flex flex-col-reverse lg:flex-row gap-16 relative">
          
          {/* Left: Interactive List */}
          <div className="w-full lg:w-1/2 flex flex-col border-t border-white/10">
            {CASE_STUDIES.map((study, idx) => {
              const isActive = activeIdx === idx;
              return (
                <div 
                  key={study.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  className="group flex flex-col py-8 border-b border-white/10 cursor-pointer relative"
                >
                  <div className="flex items-center justify-between z-10 relative pointer-events-none">
                    <h4 className={`text-3xl md:text-4xl lg:text-5xl font-serif uppercase tracking-tight transition-all duration-500 ${isActive ? 'text-white pl-4' : 'text-white/40 group-hover:text-white/80'}`}>
                      {study.title}
                    </h4>
                    <span className={`text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-500 hidden sm:block ${isActive ? 'text-[#d9b15c]' : 'text-white/20 group-hover:text-white/40'}`}>
                      {study.category}
                    </span>
                  </div>
                  
                  {/* Hover background fill */}
                  <div className={`absolute inset-0 bg-white/5 origin-left transition-transform duration-700 ease-out ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Image Window */}
          <div className="w-full lg:w-1/2 lg:sticky top-32 h-[50vh] lg:h-[70vh] rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeIdx}
                src={CASE_STUDIES[activeIdx].image}
                alt={CASE_STUDIES[activeIdx].title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
            
            {/* Image Overlay Info */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-[#d9b15c]">{CASE_STUDIES[activeIdx].client}</span>
                <span className="text-2xl font-serif text-white">{CASE_STUDIES[activeIdx].title}</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
