"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const WORK_CATEGORIES = [
  {
    id: "01",
    slug: "content-strategy-and-marketing",
    title: "Content Strategy & Marketing",
    subtitle: "Data-driven storytelling.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
    desc: "We craft compelling narratives backed by deep analytics to engage your audience and drive measurable conversions."
  },
  {
    id: "02",
    slug: "branding-and-creative-solutions",
    title: "Branding & Creative Solutions",
    subtitle: "Creating timeless identities.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2370&auto=format&fit=crop",
    desc: "From visual identity to brand voice, we build cohesive and memorable brands that stand out in crowded markets."
  },
  {
    id: "03",
    slug: "commercial-production",
    title: "Commercial Production",
    subtitle: "Cinematic visual experiences.",
    image: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2371&auto=format&fit=crop",
    desc: "High-end video production that captures attention. We handle everything from concept and scripting to shooting."
  },
  {
    id: "04",
    slug: "web-development",
    title: "Web Development",
    subtitle: "Award-winning digital platforms.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2372&auto=format&fit=crop",
    desc: "We build blazing-fast, immersive, and accessible web experiences using modern technologies that scale."
  }
];

export default function FeaturedWork() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // Default to first item expanded

  return (
    <section className="relative py-32 bg-black overflow-hidden" id="work">
      <div className="container mx-auto px-8 md:px-16 z-20 relative mb-12">
        <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-2">Our Work</h2>
        <p className="text-3xl md:text-5xl font-serif text-white">Categories of Excellence</p>
      </div>

      <div className="container mx-auto px-4 md:px-16 w-full h-[70vh] md:h-[80vh] flex flex-col md:flex-row gap-4">
        {WORK_CATEGORIES.map((category, index) => {
          const isActive = hoveredIndex === index;

          return (
            <motion.div
              key={category.id}
              className="relative h-full rounded-3xl overflow-hidden cursor-pointer group"
              animate={{
                flex: isActive ? 4 : 1, // The active panel expands to take 4x space
              }}
              transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <motion.img
                src={category.image}
                alt={category.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                animate={{
                  filter: isActive ? "grayscale(0%)" : "grayscale(100%) brightness(0.5)",
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

              {/* Content Container */}
              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end overflow-hidden">
                <AnimatePresence mode="wait">
                  {isActive ? (
                    // Expanded State Content
                    <motion.div
                      key="active"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="flex flex-col gap-4 max-w-2xl"
                    >
                      <span className="text-4xl md:text-6xl font-serif text-white/20 leading-none">
                        {category.id}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight">
                        {category.title}
                      </h3>
                      <p className="text-[#d9b15c] text-sm tracking-[0.2em] uppercase font-semibold">
                        {category.subtitle}
                      </p>
                      <p className="text-white/70 text-base md:text-lg leading-relaxed mt-2 line-clamp-2 md:line-clamp-none">
                        {category.desc}
                      </p>
                      <Link
                        href={`/work/${category.slug}`}
                        className="mt-6 inline-flex items-center gap-3 text-xs tracking-widest uppercase text-white hover:text-[#d9b15c] transition-colors w-fit group/btn"
                      >
                        <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover/btn:border-[#d9b15c] transition-colors relative overflow-hidden">
                          <span className="w-1.5 h-1.5 bg-white rounded-full group-hover/btn:bg-[#d9b15c] group-hover/btn:scale-150 transition-transform duration-300" />
                        </span>
                        Explore Project
                      </Link>
                    </motion.div>
                  ) : (
                    // Collapsed State Content (Vertical Text)
                    <motion.div
                      key="inactive"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex flex-col items-center justify-end h-full pb-8"
                    >
                      <div className="flex flex-col items-center gap-8 -rotate-180" style={{ writingMode: 'vertical-rl' }}>
                        <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest whitespace-nowrap">
                          {category.title}
                        </h3>
                        <span className="text-2xl md:text-3xl font-serif text-white/30 rotate-90">
                          {category.id}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
