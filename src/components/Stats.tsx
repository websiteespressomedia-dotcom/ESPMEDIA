"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const STATS = [
  { label: "Projects", value: 150, suffix: "+" },
  { label: "Client Retention", value: 98, suffix: "%" },
  { label: "Revenue Generated", value: 250, prefix: "₹", suffix: "Cr+" },
  { label: "Countries", value: 20, suffix: "+" },
];

function Counter({ from, to, duration = 2, prefix = "", suffix = "" }: { from: number, to: number, duration?: number, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(ease * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-black border-y border-white/10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center md:text-left">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col gap-2 border-l border-white/10 pl-6">
              <div className="text-4xl md:text-6xl font-serif text-white tracking-tighter">
                <Counter from={0} to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm tracking-[0.2em] uppercase text-white/50">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
