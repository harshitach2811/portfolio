import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Code2, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MaskedHeading, FadeInUp } from './TextReveal';

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const heroScale = useTransform(smoothProgress, [0, 1], [1, 0.9]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.75, 1], [1, 0.8, 0.2]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, 100]);
  const visualParallax = useTransform(smoothProgress, [0, 1], [0, -60]);
  const watermarkX = useTransform(smoothProgress, [0, 1], [0, 80]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      const top = el.offsetTop - 80;
      window.scrollTo({ top: top > 0 ? top : 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative min-h-screen pt-28 pb-20 flex items-center bg-[#05050A] overflow-hidden text-white"
    >
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-35 pointer-events-none"></div>

      {/* Ambient Red & Rose Radial Glow in background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 rounded-full blur-[140px] pointer-events-none"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-rose-600/15 rounded-full blur-[120px] pointer-events-none"
      />

      {/* Parallax typographic watermark */}
      <motion.div
        style={{ x: watermarkX }}
        className="absolute right-4 bottom-4 lg:right-12 lg:bottom-8 select-none pointer-events-none opacity-[0.035] text-red-500 font-display font-black text-[200px] lg:text-[380px] leading-none tracking-tighter"
      >
        AIML
      </motion.div>

      <motion.div
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-8">
            
            {/* Status Pill */}
            <FadeInUp delay={0.1}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-red-500/30 bg-red-950/50 text-neutral-200 w-fit text-xs font-mono shadow-md shadow-red-500/10 backdrop-blur-md hover:border-red-400/60 transition-colors">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="font-bold text-rose-300">2nd Year B.Tech AI/ML</span>
                <span className="text-red-400/50">•</span>
                <span className="text-neutral-300">GLA University, Mathura</span>
              </div>
            </FadeInUp>

            {/* Main Headings with Masked Word Clip Reveal */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.08]">
                <MaskedHeading delay={0.2}>
                  Hi, I'm Harshita.
                </MaskedHeading>
              </h1>
              
              <FadeInUp delay={0.35}>
                <p className="text-xl sm:text-2xl lg:text-3xl font-display font-medium text-neutral-200 tracking-tight">
                  B.Tech AI/ML Student &amp;{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-red-300 font-bold">
                    Aspiring AI Engineer
                  </span>
                </p>
              </FadeInUp>
            </div>

            {/* Supporting Text */}
            <FadeInUp delay={0.45}>
              <p className="text-base sm:text-lg text-neutral-300 max-w-2xl font-sans leading-relaxed border-l-2 border-red-500 pl-4 bg-red-950/25 py-2.5 rounded-r-md">
                "{personalInfo.tagline}"
              </p>
            </FadeInUp>

            {/* CTA Buttons with Spring Hover Effects */}
            <FadeInUp delay={0.55}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  href="#projects"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-lg shadow-lg shadow-red-600/35 hover:shadow-red-500/50 transition-shadow cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2, borderColor: "rgba(239, 68, 68, 0.8)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-mono font-medium text-neutral-200 bg-[#0E0E16]/80 border-2 border-red-500/40 rounded-lg hover:text-white transition-all shadow-md cursor-pointer backdrop-blur-md"
                >
                  <span>Let's Connect</span>
                  <ArrowUpRight className="w-4 h-4 text-rose-400" />
                </motion.a>

                <a
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-mono text-neutral-400 hover:text-rose-300 transition-colors"
                  title="GitHub Repository"
                >
                  <Code2 className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-medium">GitHub /sales_dashboard</span>
                </a>
              </div>
            </FadeInUp>

            {/* Progression Micro-Badges */}
            <FadeInUp delay={0.65}>
              <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-2 text-xs font-mono text-neutral-400">
                <span className="font-bold text-neutral-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_#ef4444]"></span>
                  IDENTITY PATH:
                </span>
                <span className="px-2 py-0.5 bg-[#0E0E16] rounded text-neutral-300 border border-neutral-800">Student</span>
                <span className="text-red-500 font-bold">→</span>
                <span className="px-2 py-0.5 bg-[#0E0E16] rounded text-neutral-300 border border-neutral-800">Learner</span>
                <span className="text-red-500 font-bold">→</span>
                <span className="px-2 py-0.5 bg-[#0E0E16] rounded text-neutral-300 border border-neutral-800">Builder</span>
                <span className="text-red-500 font-bold">→</span>
                <span className="px-2.5 py-0.5 bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold rounded shadow-sm shadow-red-500/25">
                  Future AI Engineer
                </span>
              </div>
            </FadeInUp>

          </div>

          {/* Right Column: Parallax 3D Developer Visual with Red Accents */}
          <motion.div
            style={{ y: visualParallax }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Corner Accents in Red */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-red-500 rounded-tl-sm shadow-[0_0_8px_#ef4444]"></div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-red-500 rounded-br-sm shadow-[0_0_8px_#ef4444]"></div>

              {/* Technical Dark Container */}
              <motion.div
                whileHover={{ y: -4, borderColor: "rgba(239, 68, 68, 0.6)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-[#0E0E16]/90 border-2 border-red-500/30 rounded-xl p-6 shadow-[0_16px_48px_rgba(0,0,0,0.7)] relative overflow-hidden backdrop-blur-md"
              >
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block animate-pulse shadow-[0_0_8px_#ef4444]"></span>
                    <span className="font-mono text-xs font-bold text-neutral-200 tracking-wider">
                      DEV.TELEMETRY
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-rose-300 font-bold uppercase bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">
                    LIVE_FOCUS: v2.0
                  </span>
                </div>

                {/* Abstract Interactive SVG Visual with Animated Red Lines & Nodes */}
                <div className="relative h-56 bg-[#07070B] rounded-lg p-4 overflow-hidden flex flex-col justify-between border border-red-500/20">
                  {/* Subtle vector grid */}
                  <svg className="absolute inset-0 w-full h-full opacity-25 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="hero-grid-red" width="24" height="24" patternUnits="userSpaceOnUse">
                        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#DC2626" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-grid-red)" />
                  </svg>

                  {/* Animated orbital and red connecting lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="50%" cy="50%" rx="42%" ry="32%" fill="none" stroke="rgba(220,38,38,0.3)" strokeWidth="1" strokeDasharray="3 3" />
                    
                    <path
                      d="M 40 180 Q 150 40 320 140"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    <circle cx="40" cy="180" r="5" fill="#DC2626" />
                    <circle cx="150" cy="40" r="4" fill="#FFFFFF" />
                    <circle cx="320" cy="140" r="6" fill="#EF4444">
                      <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </svg>

                  {/* Code/Log Feed inside Visual */}
                  <div className="relative z-10 font-mono text-[11px] text-neutral-300 space-y-1.5">
                    <div className="flex items-center justify-between text-neutral-400 text-[10px]">
                      <span>harshita@gla-mathura:~$ python</span>
                      <span className="text-red-400 font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
                        ACTIVE
                      </span>
                    </div>
                    <p className="text-white font-medium">
                      &gt; import <span className="text-rose-300 font-bold">data_analysis</span> as da
                    </p>
                    <p className="text-neutral-400">
                      &gt; model = da.explore("sales_data.csv")
                    </p>
                    <p className="text-neutral-300">
                      &gt; status: <span className="text-red-400 font-semibold">building_analytical_insights</span>
                    </p>
                  </div>

                  {/* Visual Footer Chips */}
                  <div className="relative z-10 flex items-center justify-between pt-2 border-t border-neutral-800/80 font-mono text-[10px]">
                    <span className="text-neutral-400 font-medium">MATHURA • GLA UNIV</span>
                    <span className="px-2 py-0.5 rounded bg-red-600 text-white font-bold tracking-wider shadow-xs shadow-red-500/30">
                      AI &amp; ML TRACK
                    </span>
                  </div>
                </div>

                {/* Real-time Focus Matrix */}
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-md bg-[#08080E] border border-red-500/20">
                    <span className="text-[10px] text-red-400 block uppercase font-semibold">Primary Focus</span>
                    <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                      Python &amp; ML Basics
                    </span>
                  </div>
                  <div className="p-2.5 rounded-md bg-[#08080E] border border-red-500/20">
                    <span className="text-[10px] text-neutral-400 block uppercase font-semibold">Cloud Credential</span>
                    <span className="font-bold text-white flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
                      Azure Certified
                    </span>
                  </div>
                </div>

                {/* Micro quote below card */}
                <div className="mt-3 text-center">
                  <span className="text-[11px] font-mono text-neutral-400 italic">
                    "Learning consistently • Building with curiosity"
                  </span>
                </div>

              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
