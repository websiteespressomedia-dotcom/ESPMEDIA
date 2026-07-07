"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    question: "How is your approach different from other agencies?",
    answer: "We build and manage growth systems. That means we don't run isolated campaigns or chase trends. We design a structured ecosystem — from brand positioning to customer acquisition and conversion — with one clear goal: consistent, predictable results. Every move is intentional, measured, and tied to business outcomes."
  },
  {
    question: "Do you offer one-off projects or only retainers?",
    answer: "Both. Some clients come to us for a specific project — a brand identity, a website, a campaign. Others work with us on an ongoing basis. We'll recommend what makes the most sense for where your business is right now."
  },
  {
    question: "Will you handle everything or do we need an internal team?",
    answer: "We handle strategy, creative, execution, and optimization end-to-end. Your role is simple: approvals, insights, and alignment. Everything else is managed by our team."
  },
  {
    question: "Is this suitable for new brands or only established ones?",
    answer: "Both. We help new brands build strong market presence from day one, and we help established brands remove inefficiencies, scale faster, and unlock the next level of growth."
  },
  {
    question: "How do we get started?",
    answer: "It begins with a strategy call where we understand your goals, challenges, and growth potential. If there's alignment, we design a custom roadmap tailored to your business."
  },
  {
    question: "Do you handle everything in-house?",
    answer: "Yes. Strategy, design, content, production, marketing, and automation everything is handled by our team under one roof. No outsourcing, no middlemen, no miscommunication."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-[#020202] text-white py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif tracking-tighter mb-6">
            Frequently Asked <span className="text-[#d9b15c] italic pr-4">Questions</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl font-light max-w-2xl">
            Everything you need to know about working with us
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto border-t border-white/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="border-b border-white/10 overflow-hidden"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <button
                  className="w-full py-8 flex items-center justify-between gap-6 text-left focus:outline-none group"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-white/30 font-light text-sm md:text-base group-hover:text-[#d9b15c] transition-colors duration-300">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#d9b15c]' : 'text-white group-hover:text-white/80'}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isOpen ? 'border-[#d9b15c] text-[#d9b15c] bg-[#d9b15c]/10' : 'border-white/10 text-white/50 group-hover:border-white/30'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="pb-8 pl-10 md:pl-12 text-white/60 font-light text-base md:text-lg leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
