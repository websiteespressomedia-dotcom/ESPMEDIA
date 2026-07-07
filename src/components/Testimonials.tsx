"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TESTIMONIALS = [
  {
    quote: "Espresso Media transformed our digital presence. Their strategic approach led to a 350% increase in online revenue within 6 months.",
    author: "Sarah Jenkins",
    role: "CMO, Aura Skincare",
  },
  {
    quote: "The level of creativity and technical execution is unmatched. They don't just build websites; they build digital experiences.",
    author: "Michael Chen",
    role: "Founder, Nova Tech",
  },
  {
    quote: "A true partner in growth. Their performance marketing team consistently delivers ROI that exceeds our expectations.",
    author: "Emma Watson",
    role: "VP Marketing, Global Retail",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="bg-black relative" style={{ height: `${TESTIMONIALS.length * 100}vh` }}>
      {TESTIMONIALS.map((testimonial, i) => {
        const targetScale = 1 - (TESTIMONIALS.length - i) * 0.05;
        
        return (
          <Card 
            key={i}
            i={i}
            {...testimonial}
            progress={scrollYProgress}
            range={[i * (1 / TESTIMONIALS.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}

function Card({ i, quote, author, role, progress, range, targetScale }: any) {
  const containerRef = useRef(null);
  
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-10vh + ${i * 25}px)` }} 
        className="relative flex flex-col items-center justify-center w-[90vw] max-w-4xl h-[60vh] glass-dark rounded-[40px] p-8 md:p-16 text-center origin-top border border-white/10 shadow-[0_-10px_30px_-15px_rgba(255,255,255,0.1)]"
      >
        <span className="text-6xl md:text-8xl font-serif text-white/20 absolute top-8 left-8">"</span>
        
        <p className="text-2xl md:text-4xl font-light text-white leading-relaxed max-w-3xl z-10">
          {quote}
        </p>
        
        <div className="mt-12 flex flex-col gap-2 z-10">
          <span className="text-lg font-medium text-white">{author}</span>
          <span className="text-sm tracking-widest uppercase text-white/50">{role}</span>
        </div>
      </motion.div>
    </div>
  );
}
