"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CircularReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const baseTextWrapperRef = useRef<HTMLDivElement>(null);
  const circleTextWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: "+=400%", // Very smooth and long scrolling duration
          scrub: 1.5,
          pin: true,
        }
      });

      // Initially set texts to the right side so "Clarity" is centered first
      gsap.set([baseTextWrapperRef.current, circleTextWrapperRef.current], { x: "50vw" });

      // 1. Initial background text blurs and fades out
      tl.to(bgTextRef.current, { 
        opacity: 0, 
        filter: "blur(20px)", 
        duration: 0.5 
      })
      
      // 2. Huge texts fade in (hidden initially)
      .to([baseTextWrapperRef.current, circleTextWrapperRef.current], { 
        opacity: 1, 
        duration: 0.5 
      }, "-=0.25")
      
      // 3. MAIN ANIMATION PHASE (Duration: 4)
      // Both text wrappers scroll horizontally from right to left
      .to([baseTextWrapperRef.current, circleTextWrapperRef.current], {
        x: "-100%",
        ease: "none",
        duration: 4
      }, "scrollPhase")

      // Circle size changes concurrently with the horizontal text scroll
      // A) Circle grows to small (Reveals "Clarity")
      .to(circleRef.current, { 
        clipPath: "circle(15% at 50% 50%)", 
        duration: 0.5, 
        ease: "power2.out" 
      }, "scrollPhase")
      
      // B) Circle grows to large (Reveals "Craft")
      .to(circleRef.current, { 
        clipPath: "circle(45% at 50% 50%)", 
        duration: 1.0, 
        ease: "power2.inOut" 
      }, "scrollPhase+=0.5")
      
      // C) Circle stays large (Reveals "Momentum")
      .to(circleRef.current, { 
        clipPath: "circle(45% at 50% 50%)", 
        duration: 1.5, 
        ease: "none" 
      }, "scrollPhase+=1.5")
      
      // D) Circle shrinks to 0 (Ends)
      .to(circleRef.current, { 
        clipPath: "circle(0% at 50% 50%)", 
        duration: 1.0, 
        ease: "power2.inOut" 
      }, "scrollPhase+=3.0")

      // 4. Texts fade out at the very end
      .to([baseTextWrapperRef.current, circleTextWrapperRef.current], { 
        opacity: 0, 
        duration: 0.5 
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="h-screen w-full relative overflow-hidden bg-[#020202] flex items-center justify-center z-10 border-t border-white/5"
    >
      
      {/* 1. Initial Background Text */}
      <div 
        ref={bgTextRef}
        className="absolute inset-0 flex flex-col items-center justify-center z-0"
      >
        <span className="text-[#d9b15c] text-xs md:text-sm tracking-[0.3em] uppercase mb-6">Explore</span>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif font-light tracking-tight text-center max-w-5xl px-8 leading-tight">
          Where human insight meets modern capability.
        </h1>
      </div>

      {/* 2. Base Text Layer (White text, scrolls horizontally) */}
      <div 
        ref={baseTextWrapperRef}
        className="absolute z-0 opacity-0 pointer-events-none whitespace-nowrap"
      >
        <h2 className="text-white text-[15vw] md:text-[12vw] lg:text-[12rem] leading-none font-serif tracking-tighter">
          Clarity. Craft. Momentum.
        </h2>
      </div>

      {/* 3. Circle Layer (Gold bg, Black text, clipped by circle) */}
      <div 
        ref={circleRef}
        className="absolute inset-0 bg-[#d9b15c] flex items-center justify-center z-10 pointer-events-none"
        style={{ clipPath: "circle(0% at 50% 50%)" }} 
      >
        <div 
          ref={circleTextWrapperRef}
          className="absolute z-10 opacity-0 whitespace-nowrap"
        >
          <h2 className="text-[#020202] text-[15vw] md:text-[12vw] lg:text-[12rem] leading-none font-serif tracking-tighter">
            Clarity. Craft. Momentum.
          </h2>
        </div>
      </div>
      
    </div>
  );
}
