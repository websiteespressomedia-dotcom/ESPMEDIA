"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-clip selection:bg-[#d9b15c] selection:text-black text-white">
      <Navbar />
      
      <section className="container mx-auto px-8 lg:px-16 pt-40 pb-24 min-h-[90vh] flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Left Side: Typography */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-sm tracking-[0.3em] uppercase text-white/50 mb-8 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#d9b15c]" />
                Contact Us
              </h1>
              <h2 className="text-3xl md:text-5xl font-light leading-tight text-white/80 mb-6">
                Ready to take the next step in your business?
              </h2>
              <h3 className="text-7xl md:text-9xl font-serif tracking-tighter text-[#d9b15c] italic">
                Let's Talk.
              </h3>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.form 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-10"
              onSubmit={(e) => e.preventDefault()}
            >
              
              <div className="flex flex-col md:flex-row gap-10">
                <div className="relative w-full">
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 pt-4 outline-none text-white focus:border-[#d9b15c] transition-colors peer placeholder-transparent"
                    placeholder="Name *"
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-white/40 text-sm peer-focus:top-0 peer-focus:text-[#d9b15c] peer-focus:text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-valid:top-0 peer-valid:text-xs pointer-events-none">
                    Name *
                  </label>
                </div>
                
                <div className="relative w-full">
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 pt-4 outline-none text-white focus:border-[#d9b15c] transition-colors peer placeholder-transparent"
                    placeholder="Email *"
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-white/40 text-sm peer-focus:top-0 peer-focus:text-[#d9b15c] peer-focus:text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-valid:top-0 peer-valid:text-xs pointer-events-none">
                    Email *
                  </label>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-10">
                <div className="relative w-full">
                  <input 
                    type="tel" 
                    id="phone"
                    required
                    className="w-full bg-transparent border-b border-white/20 pb-3 pt-4 outline-none text-white focus:border-[#d9b15c] transition-colors peer placeholder-transparent"
                    placeholder="Mobile Number *"
                  />
                  <label htmlFor="phone" className="absolute left-0 top-4 text-white/40 text-sm peer-focus:top-0 peer-focus:text-[#d9b15c] peer-focus:text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-valid:top-0 peer-valid:text-xs pointer-events-none">
                    Mobile Number *
                  </label>
                </div>
                
                <div className="relative w-full">
                  <input 
                    type="url" 
                    id="website"
                    className="w-full bg-transparent border-b border-white/20 pb-3 pt-4 outline-none text-white focus:border-[#d9b15c] transition-colors peer placeholder-transparent"
                    placeholder="Website/Social Media Link"
                  />
                  <label htmlFor="website" className="absolute left-0 top-4 text-white/40 text-sm peer-focus:top-0 peer-focus:text-[#d9b15c] peer-focus:text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs pointer-events-none">
                    Website/Social Media Link
                  </label>
                </div>
              </div>

              <div className="relative w-full">
                <input 
                  type="text" 
                  id="services"
                  className="w-full bg-transparent border-b border-white/20 pb-3 pt-4 outline-none text-white focus:border-[#d9b15c] transition-colors peer placeholder-transparent"
                  placeholder="Services Interested In"
                />
                <label htmlFor="services" className="absolute left-0 top-4 text-white/40 text-sm peer-focus:top-0 peer-focus:text-[#d9b15c] peer-focus:text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs pointer-events-none">
                  Services Interested In
                </label>
              </div>

              <div className="relative w-full">
                <textarea 
                  id="objective"
                  rows={3}
                  className="w-full bg-transparent border-b border-white/20 pb-3 pt-4 outline-none text-white focus:border-[#d9b15c] transition-colors peer placeholder-transparent resize-none"
                  placeholder="Your Objective"
                />
                <label htmlFor="objective" className="absolute left-0 top-4 text-white/40 text-sm peer-focus:top-0 peer-focus:text-[#d9b15c] peer-focus:text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-xs pointer-events-none">
                  Your Objective
                </label>
              </div>

              <button 
                type="submit"
                className="mt-4 group relative inline-flex items-center justify-center px-12 py-5 bg-white/5 border border-white/20 hover:border-[#d9b15c] rounded-full overflow-hidden w-full md:w-auto self-start transition-colors duration-500"
              >
                <div className="absolute inset-0 w-full h-full bg-[#d9b15c] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
                <span className="relative flex items-center gap-4 text-xs font-semibold tracking-[0.2em] uppercase text-white group-hover:text-black transition-colors duration-500">
                  Submit <span>→</span>
                </span>
              </button>

            </motion.form>
          </div>
          
        </div>
      </section>

      <Footer />
    </main>
  );
}
