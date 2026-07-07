"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);

  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "lines,words", lineClass: "overflow-hidden pb-4" });
    
    gsap.fromTo(
      split.words,
      { 
        y: "100%", 
      },
      {
        y: "0%",
        stagger: 0.05,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
        }
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  return (
    <section ref={containerRef} id="about" className="relative bg-black text-white py-32 md:py-48 overflow-hidden border-t border-white/10 selection:bg-[#d9b15c] selection:text-black">
      <div className="container mx-auto px-8 lg:px-16 relative z-10 flex flex-col gap-24 md:gap-40">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/50 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-[#d9b15c]" />
            About Espresso
          </h2>
          <div className="max-w-md text-white/70 font-light text-lg md:text-xl leading-relaxed">
            We are the architects of your digital growth, blending high-end design with data-driven performance.
          </div>
        </div>

        {/* Massive Typography */}
        <h3 ref={textRef} className="text-[12vw] md:text-[9vw] font-serif leading-[0.9] tracking-tighter uppercase">
          We don't follow <br />
          <span className="text-[#d9b15c] italic pr-8">trends.</span><br />
          We create them.
        </h3>
        
        {/* Visual & Text Grid */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Huge Image Reveal */}
          <div className="w-full lg:w-3/5 relative h-[60vh] md:h-[80vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden group shadow-2xl">
            <motion.div style={{ scale: imgScale }} className="absolute inset-0 w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                alt="Abstract Liquid Metal"
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-[0.25,1,0.5,1]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            {/* Minimal Play/View Button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="w-32 h-32 rounded-full border border-white/20 backdrop-blur-md flex items-center justify-center text-white/80 tracking-widest text-xs uppercase font-medium">
                Explore
              </div>
            </div>
          </div>

          {/* Floating Text Block */}
          <div className="w-full lg:w-2/5 flex flex-col gap-10 z-20">
            <motion.div style={{ y }} className="flex flex-col gap-8 text-xl md:text-2xl leading-relaxed text-white/80 font-light bg-black/40 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/5">
              <p>
                Espresso Media is a premium digital marketing and creative agency. We build brands that don't just exist—<span className="text-white font-medium italic">they dominate their industries.</span>
              </p>
              <p className="text-white/50 text-lg">
                From immersive web experiences to high-converting ad campaigns, our strategies are engineered for scale, aesthetics, and maximum conversion.
              </p>
              
              <Link href="/work" className="mt-8 group relative inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full overflow-hidden w-fit hover:border-transparent transition-all">
                <div className="absolute inset-0 w-full h-full bg-[#d9b15c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative font-semibold tracking-[0.2em] uppercase text-xs group-hover:text-black transition-colors duration-500">
                  Discover Our Work
                </span>
              </Link>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
