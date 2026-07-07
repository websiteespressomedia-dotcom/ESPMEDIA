"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-black text-white py-32 md:py-48 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-8 relative z-10 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-light text-white/70 mb-8"
        >
          Ready To Grow?
        </motion.h2>
        
        <motion.h3 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] tracking-tighter mb-16 max-w-5xl"
        >
          Let's Build Something Extraordinary.
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black rounded-full overflow-hidden hover-target transition-transform duration-300 hover:scale-105">
            <div className="absolute inset-0 w-full h-full bg-white/70 group-hover:scale-y-100 scale-y-0 origin-bottom transition-transform duration-500 ease-out" />
            <span className="relative font-serif text-2xl md:text-3xl tracking-wide">Start Your Project</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
