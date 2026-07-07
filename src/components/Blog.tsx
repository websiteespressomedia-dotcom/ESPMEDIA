"use client";

import { motion } from "framer-motion";

const ARTICLES = [
  {
    title: "The Future of AI in Digital Advertising",
    category: "Insights",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2370&auto=format&fit=crop",
  },
  {
    title: "Designing for Conversion: A UX Masterclass",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Why Brand Positioning is More Critical Than Ever",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <section className="bg-white text-black py-32">
      <div className="container mx-auto px-8 mb-16 flex justify-between items-end">
        <div>
          <h2 className="text-sm tracking-[0.3em] uppercase text-black/50 mb-4">Insights</h2>
          <p className="text-4xl md:text-5xl font-serif text-black max-w-2xl">
            Latest thinking from our team.
          </p>
        </div>
        <button className="hidden md:block pb-2 border-b border-black hover-target uppercase tracking-widest text-sm font-medium hover:pl-4 transition-all duration-300">
          View All Articles
        </button>
      </div>

      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((article, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="group cursor-pointer hover-target flex flex-col gap-6"
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black/5">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-black/50">{article.category}</span>
              <h3 className="text-2xl font-medium leading-snug group-hover:text-black/70 transition-colors">
                {article.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
