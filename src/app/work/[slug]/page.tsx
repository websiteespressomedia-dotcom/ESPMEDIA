"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";

// Content Strategy Data
type Project = {
  id: number;
  title: string;
  client: string;
  image?: string;
  video?: string;
};

const CONTENT_PROJECTS: Project[] = [
  { id: 1, title: "GC TILES CHENNAI", client: "GC Tiles", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" },
  { id: 2, title: "SHREEJI TILES", client: "Shreeji", image: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=2000&auto=format&fit=crop" },
  { id: 3, title: "GC TILES HYDERABAD", client: "GC Tiles", image: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?q=80&w=2000&auto=format&fit=crop" },
  { id: 4, title: "TILE BAZAAR", client: "Tile Bazaar", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2000&auto=format&fit=crop" },
  { id: 5, title: "VINAYAK TOYOTA", client: "Vinayak Toyota", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2000&auto=format&fit=crop" },
  { id: 6, title: "TILE LAB", client: "Tile Lab", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop" },
];

// Branding Data
const BRANDING_SERVICES: Project[] = [
  {
    id: 1,
    title: "BRAND IDENTITY DESIGNING",
    client: "ESP Branding",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "PRODUCTS ANIMATION",
    client: "ESP Motion",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "3D MODELING",
    client: "ESP 3D",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "SOCIAL MEDIA DESIGNS",
    client: "ESP Social",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "ADVERTISE & PRINT DESIGN",
    client: "ESP Print",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
  }
];

// Commercial Data
const COMMERCIAL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Cinematic Shoots",
    client: "Production",
    video: "https://videos.pexels.com/video-files/853889/853889-hd_1920_1080_25fps.mp4",
  },
  {
    id: 2,
    title: "Corporate Documentaries",
    client: "Production",
    video: "https://videos.pexels.com/video-files/3163534/3163534-hd_1920_1080_30fps.mp4",
  },
  {
    id: 3,
    title: "Short Films",
    client: "Production",
    video: "https://videos.pexels.com/video-files/3206024/3206024-hd_1920_1080_25fps.mp4",
  },
  {
    id: 4,
    title: "Product Commercials",
    client: "Production",
    video: "https://videos.pexels.com/video-files/3015494/3015494-hd_1920_1080_24fps.mp4",
  }
];

// Web Development Data
const WEB_PROJECTS: Project[] = [
  {
    id: 1,
    title: "GC Tiles E-Commerce",
    client: "GC Tiles",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Liverpool Tiles Bangalore",
    client: "Liverpool Tiles",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Shreeji Corporate Site",
    client: "Shreeji",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Espresso Media",
    client: "Internal",
    image: "https://images.unsplash.com/photo-1522542611716-163e52e426db?q=80&w=2000&auto=format&fit=crop",
  }
];

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  if (
    slug !== "content-strategy-and-marketing" && 
    slug !== "branding-and-creative-solutions" && 
    slug !== "commercial-production" &&
    slug !== "web-development"
  ) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center text-white">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Category Not Found</h1>
          <Link href="/work" className="text-white/60 hover:text-white underline underline-offset-4 transition-colors">
            Back to Work
          </Link>
        </div>
      </main>
    );
  }

  const isBranding = slug === "branding-and-creative-solutions";
  const isCommercial = slug === "commercial-production";
  const isWebDev = slug === "web-development";
  
  let projectsToRender: Project[] = CONTENT_PROJECTS;
  if (isBranding) projectsToRender = BRANDING_SERVICES;
  if (isCommercial) projectsToRender = COMMERCIAL_PROJECTS;
  if (isWebDev) projectsToRender = WEB_PROJECTS;

  return (
    <main className="relative min-h-screen bg-black overflow-clip selection:bg-white/30 text-white pt-32 pb-32">
      <Navbar />
      
      {/* Page Header */}
      <section className="container mx-auto px-8 lg:px-16 py-12 md:py-20">
        <Link href="/work" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-semibold uppercase tracking-[0.2em] mb-12">
          <span>←</span> BACK TO WORK
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6 max-w-4xl"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 w-fit text-xs tracking-widest text-[#d9b15c] uppercase bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#d9b15c]" />
            {isBranding ? "DESIGN & IDENTITY" : isCommercial ? "VIDEO & MOTION" : isWebDev ? "DIGITAL PLATFORMS" : "STRATEGY & GROWTH"}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-[1.1] text-[#d9b15c]">
            {isBranding ? "Branding & Creative Solutions" : isCommercial ? "Commercial Production" : isWebDev ? "Web Development" : "Content Strategy & Marketing"}
          </h1>
          <p className="text-lg md:text-xl text-white/60 font-light mt-4 max-w-2xl leading-relaxed">
            {isBranding 
              ? "A collection of branding and creative projects designed to strengthen brand presence, enhance perception, and support long-term business growth."
              : isCommercial
              ? "A collection of commercial production projects focused on bringing ideas to life through thoughtful visuals and purposeful storytelling."
              : isWebDev
              ? "High-performance digital platforms and e-commerce experiences engineered for speed, conversion, and stunning aesthetics."
              : "Data-driven storytelling that drives measurable business growth and engages your audience at every touchpoint."}
          </p>
        </motion.div>
      </section>

      {/* Dynamic Content */}
      <section className="container mx-auto px-8 lg:px-16 mt-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {projectsToRender.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index % 2 === 0 ? 0 : 0.2 }}
              className={`flex flex-col gap-6 group cursor-pointer ${
                index % 2 !== 0 ? "md:mt-32" : ""
              }`}
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden glass-dark">
                <motion.div 
                  className="absolute inset-[-10%] w-[120%] h-[120%]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.215, 0.61, 0.355, 1] }}
                >
                  {project.video ? (
                    <video 
                      src={project.video} 
                      autoPlay loop muted playsInline
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    />
                  ) : (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    />
                  )}
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity duration-700" />
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.2em] uppercase text-white/50">
                  <span>{project.client}</span>
                  <span className="w-8 h-[1px] bg-white/20" />
                  <span>0{index + 1}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-white group-hover:text-[#d9b15c] transition-colors duration-500">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
