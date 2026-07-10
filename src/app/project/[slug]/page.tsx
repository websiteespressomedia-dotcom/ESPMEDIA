"use client";

import React, { useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { projects } from "@/data/projects";

const ACCENT = "#B8734E";
const BG = "#050505";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 32 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function ImageTile({ src, alt, delay = 0, className = "" }: { src: string, alt: string, delay?: number, className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.figure
      ref={ref}
      className={`csd-tile ${className}`}
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="csd-tile-inner">
        <img src={src} alt={alt} loading="lazy" />
        <span className="csd-tile-overlay" />
      </div>
    </motion.figure>
  );
}

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params?.slug as string;
  const project = projects.find((p) => p.slug === slug);
  
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });

  useEffect(() => {
    document.body.style.background = BG;
    // reset scroll smoothly
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.background = "";
    };
  }, [slug]);

  if (!project) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
        <h1 className="text-3xl font-serif text-[#B8734E] mb-4">Project Not Found</h1>
        <Link href="/work" className="text-gray-400 hover:text-white underline">Back to Work</Link>
      </div>
    );
  }

  // Get next project for footer
  const nextProject = projects.find((p) => p.slug === project.nextProjectSlug) || projects[0];

  return (
    <div className="csd-root">
      <style>{CSS}</style>

      {/* progress bar */}
      <motion.div className="csd-progress" style={{ scaleX: progress }} />

      {/* HEADER META */}
      <section className="csd-hero pt-32 pb-16 px-6 md:px-12 lg:px-24 xl:px-32 border-b border-[#1a1a1a]">
        <div className="csd-hero-left pr-0 md:pr-16">
          <Reveal>
            <h1 className="csd-title">{project.title}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="csd-sub">{project.description}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <button className="csd-pill">{project.category}</button>
          </Reveal>
        </div>

        <div className="csd-hero-right flex flex-col gap-5 pt-8 md:pt-4">
          {[
            ["Client", project.client],
            ["Industry", project.industry],
            ["Year", project.year],
          ].map(([k, v], i) => (
            <Reveal key={k} delay={0.1 + i * 0.08}>
              <div className="csd-meta-row flex gap-4 pb-4 border-b border-[#1a1a1a] text-sm md:text-base">
                <span className="csd-meta-key text-white font-semibold min-w-[100px]">{k}:</span>
                <span className="csd-meta-val text-[#8a8580]">{v}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GRID 1 (Left Sticky) */}
      <section className="csd-grid-sticky px-6 md:px-12 lg:px-24 xl:px-32 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        <div className="csd-sticky-col md:sticky md:top-24 h-auto md:h-max">
          <ImageTile src={project.heroImage} alt={project.title} />
        </div>
        <div className="csd-scroll-col flex flex-col gap-6 md:gap-10">
          <ImageTile src={project.showcase[0] || project.heroImage} alt="Showcase 1" delay={0.12} />
          <ImageTile src={project.showcase[1] || project.heroImage} alt="Showcase 2" delay={0.12} />
          <ImageTile src={project.showcase[2] || project.heroImage} alt="Showcase 3" delay={0.12} />
        </div>
      </section>

      {/* TEXT BLOCK 1 */}
      <section className="csd-text max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <Reveal>
          <h3 className="csd-h3 font-sans text-lg md:text-xl font-bold text-white mb-6 tracking-wide">THE CHALLENGE</h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base md:text-xl leading-relaxed text-[#b6b1ac]">{project.overview.challenge}</p>
        </Reveal>
      </section>

      {/* WIDE IMAGE */}
      <section className="csd-wide px-6 md:px-12 lg:px-24 xl:px-32 py-6">
        <ImageTile src="/about-agency-bg.jpg" alt="Wide layout" className="!aspect-[16/9] md:!aspect-[21/9] w-full" />
      </section>

      {/* TEXT BLOCK 2 */}
      <section className="csd-text max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <Reveal>
          <h3 className="csd-h3 font-sans text-lg md:text-xl font-bold text-white mb-6 tracking-wide">PROJECT OVERVIEW</h3>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-base md:text-xl leading-relaxed text-[#b6b1ac] mb-8">{project.overview.summary}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-base md:text-xl leading-relaxed mt-6 italic">
            <strong className="text-[#B8734E] not-italic mr-2">Key Insight:</strong> "{project.overview.insights}"
          </p>
        </Reveal>
      </section>

      {/* GRID 2 (Right Sticky) */}
      <section className="csd-grid-sticky px-6 md:px-12 lg:px-24 xl:px-32 py-10 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
        <div className="csd-scroll-col flex flex-col gap-6 md:gap-10 order-2 md:order-1">
          <ImageTile src={project.gallery[0] || project.heroImage} alt="Gallery 1" />
          <ImageTile src={project.gallery[1] || project.heroImage} alt="Gallery 2" delay={0.12} />
          <ImageTile src={project.showcase[0] || project.heroImage} alt="Gallery 3" delay={0.12} />
        </div>
        <div className="csd-sticky-col md:sticky md:top-24 h-auto md:h-max order-1 md:order-2">
          <ImageTile src={project.showcase[1] || project.heroImage} alt="Showcase focus" delay={0.12} />
        </div>
      </section>

      {/* TEXT BLOCK 3 - METRICS */}
      <section className="csd-text max-w-4xl mx-auto px-6 md:px-12 py-20 md:py-32">
        <Reveal>
          <h3 className="csd-h3 font-sans text-lg md:text-xl font-bold text-white mb-10 tracking-wide">RESULTS & METRICS</h3>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {project.results.map((res, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <div className="flex flex-col gap-4">
                <span className="font-serif text-6xl md:text-8xl text-white leading-none">{res.metric}</span>
                <span className="text-xs md:text-sm text-gray-500 uppercase tracking-[0.2em] font-semibold">{res.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="csd-footer flex flex-col items-center justify-center gap-6 py-32 px-6 border-t border-[#1a1a1a]">
        <span className="text-[#B8734E] tracking-[0.2em] uppercase text-xs md:text-sm font-bold">Next Project</span>
        <Link href={`/project/${nextProject.slug}`} className="text-white hover:text-[#B8734E] font-serif text-[clamp(40px,8vw,80px)] leading-none transition-colors duration-500 text-center">
          {nextProject.title}
        </Link>
      </footer>
    </div>
  );
}

/* ---------------------------- CSS ---------------------------- */
const CSS = `
.csd-root{
  --bg:${BG};
  --fg:#ECEAE6;
  --muted:#8a8580;
  --line:#1a1a1a;
  --accent:${ACCENT};
  --serif:"Times New Roman", Times, serif;
  --sans:"Manrope","Inter",ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;
  background:var(--bg);
  color:var(--fg);
  font-family:var(--sans);
  min-height:100vh;
  width:100%;
  letter-spacing:.005em;
  -webkit-font-smoothing:antialiased;
}
.csd-root *{box-sizing:border-box}

.csd-progress{
  position:fixed;top:0;left:0;right:0;height:3px;background:var(--accent);
  transform-origin:0%;z-index:100;
}

/* HERO */
.csd-hero{
  display:grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 80px;
}
.csd-title{
  font-family:var(--serif);
  font-size:clamp(56px,8vw,140px);
  line-height:.95;letter-spacing:-.02em;
  font-weight:500;margin:0 0 28px;
  background:linear-gradient(180deg,#fff 0%, #d8cfc6 100%);
  -webkit-background-clip:text;background-clip:text;color:transparent;
}
.csd-sub{
  font-size: clamp(16px, 1.5vw, 22px);
  line-height:1.6;color:var(--muted);
  max-width: 600px;margin:0 0 40px;
}
.csd-pill{
  display:inline-block;padding:14px 32px;border-radius:999px;
  background:transparent;color:var(--fg);
  border:1px solid rgba(255,255,255,.18);
  font-family:var(--sans);font-size:12px;font-weight:700;
  letter-spacing:.18em;text-transform:uppercase;cursor:pointer;
  transition:all .4s cubic-bezier(.22,1,.36,1);
}
.csd-pill:hover{
  background:var(--accent);border-color:var(--accent);color:#000;
  transform:translateY(-2px);
  box-shadow:0 12px 30px -10px rgba(184,115,78,.55);
}

/* GRID */
.csd-tile{margin:0;overflow:hidden;border-radius:12px;aspect-ratio:4/5;position:relative}
.csd-tile-inner{position:relative;width:100%;height:100%;overflow:hidden;border-radius:12px}
.csd-tile img{
  width:100%;height:100%;object-fit:cover;display:block;
  transform:scale(1.04);
  transition:transform 1.6s cubic-bezier(.22,1,.36,1), filter .6s ease;
  filter:saturate(.92) brightness(.92);
}
.csd-tile:hover img{transform:scale(1.1);filter:saturate(1.05) brightness(1)}
.csd-tile-overlay{
  position:absolute;inset:0;pointer-events:none;
  background:linear-gradient(180deg,transparent 60%, rgba(0,0,0,.6));
  opacity:.7;transition:opacity .5s ease;
}
.csd-tile:hover .csd-tile-overlay{opacity:.25}

/* RESPONSIVE OVERRIDES */
@media (max-width: 1024px){
  .csd-hero{grid-template-columns:1fr;gap:40px;}
  .csd-hero-left { padding-right: 0; }
  .csd-title{font-size: clamp(48px, 12vw, 80px);}
}
@media (max-width: 768px){
  .csd-grid-sticky { grid-template-columns: 1fr; }
  .csd-tile { aspect-ratio: 4/5 !important; }
}
`;
