"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_DATA = [
  {
    id: "01",
    title: "Content Strategy & Marketing",
    description: "Content systems that attract audiences and drive business growth.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Branding & Creative Solutions",
    description: "Strong branding that makes your business memorable and premium.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2274&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Commercial Production",
    description: "Cinematic content that captures attention and elevates your brand.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2371&auto=format&fit=crop",
  },
  {
    id: "04",
    title: "Web Development",
    description: "Modern websites designed to convert visitors into customers.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
  },
  {
    id: "05",
    title: "AI Automation",
    description: "Automate workflows using AI to save time and improve business efficiency.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2370&auto=format&fit=crop",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative py-32 bg-black text-white min-h-screen flex items-center">
      {/* Background Image Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              key={hoveredIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${SERVICES_DATA[hoveredIndex].image})` }}
            />
          )}
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-8 relative z-10 w-full">
        <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-16">Our Expertise</h2>
        
        <div className="flex flex-col w-full">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group relative border-b border-white/10 py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover-target"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background fill animation */}
              <div className="absolute inset-0 bg-white/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out z-[-1]" />
              
              <div className="flex items-center gap-8 md:gap-16">
                <span className="text-2xl md:text-4xl font-serif text-white/20 group-hover:text-white transition-colors duration-500">
                  {service.id}
                </span>
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:pl-4 transition-all duration-500">
                  {service.title}
                </h3>
              </div>
              
              <div className="mt-4 md:mt-0 max-w-sm w-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                <p className="text-white/70 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
