"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";

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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black" id="work">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        
        <div className="absolute top-24 left-8 md:left-16 z-20">
          <h2 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-2">Our Work</h2>
          <p className="text-2xl md:text-3xl font-serif text-white">Categories of Excellence</p>
        </div>

        <motion.div style={{ x }} className="flex w-[400vw] h-[70vh] items-center mt-12">
          {WORK_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} scrollProgress={scrollYProgress} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CategoryCard({ category, scrollProgress }: { category: typeof WORK_CATEGORIES[0], scrollProgress: any }) {
  // Parallax effect for the image inside the card
  const imgX = useTransform(scrollProgress, [0, 1], ["-20%", "20%"]);
  const textY = useTransform(scrollProgress, [0, 1], ["20%", "-20%"]);

  // 3D Tilt logic
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const xPct = (e.clientX - rect.left) / width - 0.5;
    const yPct = (e.clientY - rect.top) / height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="w-[100vw] h-full flex items-center justify-center p-8 md:px-24">
      <div className="w-full max-w-7xl h-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 group">
        
        {/* Left: Typography */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10 relative">
          <div className="flex flex-col">
            <span className="text-7xl md:text-[100px] font-serif text-white/10 font-light leading-none -ml-2 mb-2 group-hover:text-white/20 transition-colors duration-700">
              {category.id}
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-[1.1] mb-4">
              {category.title}
            </h3>
            <p className="text-xl md:text-2xl text-white/80 font-light mb-4">
              {category.subtitle}
            </p>
            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-md">
              {category.desc}
            </p>
          
            <div className="mt-8 overflow-hidden">
              <Link href={`/work/${category.slug}`} className="group/btn flex items-center gap-4 text-sm tracking-widest uppercase text-white hover:text-[#d9b15c] transition-colors">
                <span className="relative overflow-hidden flex items-center justify-center w-10 h-10 rounded-full border border-white/20 group-hover/btn:border-[#d9b15c] transition-colors">
                  <span className="w-1.5 h-1.5 bg-white rounded-full group-hover/btn:bg-[#d9b15c] group-hover/btn:scale-150 transition-all" />
                </span>
                Explore Category
              </Link>
            </div>
          </div>
        </div>

        {/* Right: Editorial Image with Parallax & Hover reveal */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-end" style={{ perspective: 1200 }}>
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full max-w-md relative z-10"
          >
            <Link href={`/work/${category.slug}`} className="relative block w-full aspect-[3/4] rounded-2xl overflow-hidden glass-dark group-hover:-translate-y-4 transition-transform duration-700 ease-out cursor-pointer group/img">
              
              <motion.div 
                className="absolute inset-[-20%] w-[140%] h-[140%]"
                style={{ x: imgX }}
              >
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover/img:grayscale-0 group-hover/img:opacity-100 scale-100 group-hover/img:scale-110 transition-all duration-1000 ease-[0.215,0.61,0.355,1]"
                />
              </motion.div>
              
              {/* View Badge on Hover */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div 
                  className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white tracking-widest text-xs uppercase opacity-0 scale-50 group-hover/img:opacity-100 group-hover/img:scale-100 transition-all duration-500 ease-out"
                  style={{ transform: "translateZ(50px)" }}
                >
                  View
                </div>
              </div>
            
              {/* Glossy overlay for 3D realism */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-50 group-hover/img:opacity-0 transition-opacity duration-700 pointer-events-none" />
            </Link>
          </motion.div>
        </div>
                                
      </div>
    </div>
  );
}
