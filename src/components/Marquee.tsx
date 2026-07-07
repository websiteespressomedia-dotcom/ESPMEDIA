"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BRANDS = [
  "Google",
  "Adobe",
];

export default function Marquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -500]);

  return (
    <section ref={containerRef} className="py-24 bg-black overflow-hidden relative z-10 border-t border-white/5">
      <div className="flex whitespace-nowrap overflow-hidden">
        <motion.div style={{ x }} className="flex gap-24 items-center">
          {/* Double the array for seamless looping */}
          {[...BRANDS, ...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="text-4xl md:text-6xl font-serif text-white/20 uppercase tracking-widest hover:text-white/80 transition-colors duration-500 cursor-default"
            >
              {brand}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
