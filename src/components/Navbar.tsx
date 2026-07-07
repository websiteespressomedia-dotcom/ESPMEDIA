"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-5xl"
    >
      <div className="flex items-center justify-between glass-dark px-8 py-4 rounded-full">
        {/* Logo */}
        <Link href="/" className="font-serif italic text-xl font-medium tracking-tight text-white hover:opacity-80 transition-opacity">
          Espresso
        </Link>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase font-medium text-white/60">
          <Link href="/work" className="hover:text-white transition-colors">Work</Link>
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/#about" className="hover:text-white transition-colors">About</Link>
          <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
        </nav>

        {/* CTA Button */}
        <div>
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden rounded-full border border-white/20 hover:border-white transition-colors"
          >
            <div className="absolute inset-0 w-full h-full bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
            <span className="relative text-xs tracking-widest uppercase font-medium text-white group-hover:text-black transition-colors duration-500">Contact</span>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
