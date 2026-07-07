"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoaded(true);
          setTimeout(() => onComplete(), 1600); // Wait for the split curtain animation to finish
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 3;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  // Split text for staggered animation
  const title = "The Espresso Media";
  const titleWords = title.split(" ");

  return (
    <div className={`fixed inset-0 z-[100] flex flex-col ${isLoaded ? "pointer-events-none" : "pointer-events-auto"}`}>
      
      {/* Background Noise Texture for premium matte feel */}
      <div className="absolute inset-0 z-50 opacity-[0.03] pointer-events-none mix-blend-screen" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />

      {/* Top Curtain */}
      <motion.div 
        className="relative w-full h-1/2 bg-[#000000] flex items-end justify-center overflow-hidden border-b border-white/5"
        initial={{ y: "0%" }}
        animate={isLoaded ? { y: "-100%" } : { y: "0%" }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
      >
        {/* Progress Bar Container */}
        <div className="absolute bottom-0 w-full h-[1px]">
          <motion.div 
            className="h-full bg-[#d9b15c] relative shadow-[0_0_15px_#d9b15c]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          >
            {/* Glowing tip */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-2 bg-[#d9b15c] rounded-full blur-[6px]" />
          </motion.div>
        </div>
        
        {/* Branding Text (Staggered Reveal with subtle scale) */}
        <motion.div 
          className="absolute bottom-12 flex gap-4 overflow-hidden"
          animate={{ scale: isLoaded ? 0.95 : 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {titleWords.map((word, i) => (
            <div key={i} className="overflow-hidden">
              <motion.div
                className={`text-4xl md:text-5xl lg:text-6xl font-serif tracking-widest ${i === 0 ? "italic font-light text-white/50 pr-2" : "text-white"}`}
                initial={{ y: "100%", opacity: 0, rotate: 2 }}
                animate={isLoaded ? { y: "-100%", opacity: 0 } : { y: "0%", opacity: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.9, 
                  ease: [0.76, 0, 0.24, 1], 
                  delay: isLoaded ? 0 : 0.1 * i 
                }}
              >
                {word}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom Curtain */}
      <motion.div 
        className="relative w-full h-1/2 bg-[#000000] flex items-start justify-center overflow-hidden"
        initial={{ y: "0%" }}
        animate={isLoaded ? { y: "100%" } : { y: "0%" }}
        transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
      >
        
        {/* Percentage Counter */}
        <div className="absolute top-12 overflow-hidden">
          <motion.div 
            className="text-xs md:text-sm tracking-[0.6em] uppercase text-white/40 flex items-center gap-4"
            initial={{ y: "-100%", opacity: 0 }}
            animate={isLoaded ? { y: "100%", opacity: 0 } : { y: "0%", opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
          >
            <span>Loading</span>
            <span className="text-[#d9b15c] font-semibold">{Math.min(progress, 100)}%</span>
          </motion.div>
        </div>
        
      </motion.div>

    </div>
  );
}
