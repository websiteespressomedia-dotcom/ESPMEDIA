"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudies from "@/components/CaseStudies";

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-clip selection:bg-[#d9b15c] selection:text-black">
      <Navbar />
      
      <div className="pt-24">
        <CaseStudies />
      </div>

      <Footer />
    </main>
  );
}
