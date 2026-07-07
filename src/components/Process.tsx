"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  { id: "01", title: "Onboarding", desc: "We begin by auditing your current brand, market position, and competitive landscape. This helps us identify gaps, opportunities, and the real growth levers that matter." },
  { id: "02", title: "Foundation", desc: "Our team will craft the strategy, messaging, and creative direction building brand assets, content, positioning, and funnels designed to attract the right audience and move them toward action." },
  { id: "03", title: "Execution", desc: "We bring the strategy to life through focused execution deploying content, creatives, and campaigns across the right channels to reach your ideal audience with precision." },
  { id: "04", title: "Optimize & Scale", desc: "Once traction begins, we track performance, refine what works, and double down on high-impact activities while sharpening messaging, improving conversions, and scaling results sustainably." },
];

export default function Process() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="process" className="relative bg-[#020202] text-white py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div>
            <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#d9b15c] mb-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#d9b15c]" />
              How We Work
            </h2>
            <h3 className="text-5xl md:text-7xl lg:text-[7rem] font-serif leading-[1] tracking-tighter">
              Our Proven <br />
              <span className="text-white/40 italic pr-8">Process.</span>
            </h3>
          </div>
          <div className="max-w-md text-white/50 text-lg md:text-xl font-light leading-relaxed">
            A systematic approach to turning strategy into measurable results.
          </div>
        </div>

        {/* Massive Interactive List */}
        <div className="flex flex-col border-t border-white/10">
          {STEPS.map((step, index) => {
            const isHovered = hoveredIndex === index;
            
            return (
              <div 
                key={step.id} 
                className="group relative border-b border-white/10 py-10 md:py-16 cursor-default md:cursor-pointer transition-colors duration-500 hover:bg-white/[0.02]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12 relative z-10 px-4 md:px-8">
                  
                  {/* Left Side: Number & Title */}
                  <div className="flex items-start md:items-center gap-6 md:gap-16">
                    <span className="text-lg md:text-2xl font-light text-white/30 group-hover:text-[#d9b15c] transition-colors duration-300 mt-2 md:mt-0">
                      {step.id}
                    </span>
                    <h4 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tighter group-hover:translate-x-6 transition-transform duration-500 ease-out">
                      {step.title}
                    </h4>
                  </div>

                  {/* Right Side: Description */}
                  <div className="md:w-1/3 flex items-center justify-start md:justify-end">
                    <div className="relative w-full">
                      {/* Desktop Animated Reveal */}
                      <div className="hidden md:block min-h-[60px]">
                        <AnimatePresence mode="wait">
                          {isHovered ? (
                            <motion.p 
                              key="text"
                              className="text-white/60 font-light text-base leading-relaxed"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 20 }}
                              transition={{ duration: 0.3 }}
                            >
                              {step.desc}
                            </motion.p>
                          ) : (
                            <motion.div 
                              key="icon"
                              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Mobile Always Visible Description */}
                      <p className="text-white/50 font-light text-sm leading-relaxed block md:hidden ml-14">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
