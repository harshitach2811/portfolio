import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, BookOpen, Terminal, TrendingUp, Sparkles, MapPin, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo, progressionPillars } from '../data/portfolioData';
import { MaskedHeading, FadeInUp } from './TextReveal';

const iconMap = {
  GraduationCap: GraduationCap,
  BookOpen: BookOpen,
  Terminal: Terminal,
  TrendingUp: TrendingUp,
};

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-28 bg-[#07070D] border-t border-b border-neutral-800/80 relative text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <FadeInUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-500/30 rounded-md font-mono text-xs text-rose-300 font-bold tracking-wider uppercase mb-2 shadow-xs">
                <span className="w-2 h-2 bg-red-500 rounded-xs animate-pulse shadow-[0_0_6px_#ef4444]"></span>
                <span>01 / ABOUT</span>
              </div>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              <MaskedHeading delay={0.1}>
                A little about me
              </MaskedHeading>
            </h2>
          </div>
          <FadeInUp delay={0.2} className="mt-4 sm:mt-0 font-mono text-xs text-neutral-400 max-w-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>Student • Learner • Builder • Mathura, India</span>
          </FadeInUp>
        </div>

        {/* Main Content Layout: Sticky Left Header + Staggered Right Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Personal Narrative & University Profile Card (Sticky on desktop) */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3, borderColor: "rgba(239, 68, 68, 0.4)" }}
              className="bg-[#0E0E16] border-2 border-red-500/20 rounded-xl p-6 sm:p-8 shadow-xl space-y-5 relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 to-rose-500"></div>

              <p className="text-lg font-sans text-white font-semibold leading-relaxed">
                {personalInfo.aboutText[0]}
              </p>
              
              <p className="text-base font-sans text-neutral-300 leading-relaxed">
                {personalInfo.aboutText[1]}
              </p>
              
              <p className="text-base font-sans text-rose-200 font-medium leading-relaxed pl-4 border-l-3 border-red-500 bg-red-950/40 py-3 rounded-r-md">
                {personalInfo.aboutText[2]}
              </p>
            </motion.div>

            {/* University & Academic Context Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0E0E16] border-2 border-red-500/20 rounded-xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800 font-mono text-xs">
                <span className="font-bold text-white uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  ACADEMIC PROFILE
                </span>
                <span className="text-rose-300 font-bold bg-red-950/80 px-2 py-0.5 rounded border border-red-500/30">
                  B.Tech 2023 - Present
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold">Institution</span>
                  <p className="text-sm font-bold text-white flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-red-400 shrink-0" />
                    GLA University, Mathura
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold">Specialization</span>
                  <p className="text-sm font-bold text-rose-300">
                    AI &amp; Machine Learning
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold">Current Standing</span>
                  <p className="text-sm font-medium text-neutral-200">
                    2nd Year Undergraduate
                  </p>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase text-neutral-400 font-semibold">Location</span>
                  <p className="text-sm font-medium text-neutral-200 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    Mathura, Uttar Pradesh
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Cascading Progression Cards */}
          <div className="lg:col-span-6 space-y-4">
            <FadeInUp delay={0.1}>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg text-white flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  My Growth Model
                </h3>
                <span className="font-mono text-xs text-rose-400 font-semibold">
                  Student Progression Pathway
                </span>
              </div>
            </FadeInUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {progressionPillars.map((pillar, idx) => {
                const IconComponent = iconMap[pillar.icon] || Sparkles;
                return (
                  <motion.div
                    key={pillar.step}
                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-8%" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + idx * 0.1,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      borderColor: "rgba(239, 68, 68, 0.6)",
                      boxShadow: "0 12px 30px rgba(220, 38, 38, 0.15)"
                    }}
                    className="group bg-[#0E0E16] border-2 border-red-500/20 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between cursor-default"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-9 h-9 rounded-lg bg-red-950/80 border border-red-500/30 flex items-center justify-center text-rose-300 group-hover:bg-red-600 group-hover:text-white transition-colors shadow-xs">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-[#08080E] text-neutral-300 group-hover:bg-red-600 group-hover:text-white transition-colors border border-neutral-800">
                          {pillar.step}
                        </span>
                      </div>

                      <h4 className="font-display font-bold text-base text-white mb-0.5 group-hover:text-rose-300 transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="font-mono text-[11px] text-rose-400 font-bold mb-2">
                        {pillar.subtitle}
                      </p>

                      <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 group-hover:text-rose-300 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                      <span>Active Focus</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Genuine Student Quote with Red Left Accent */}
            <FadeInUp delay={0.4}>
              <div className="mt-4 p-4.5 rounded-xl bg-[#06060A] text-white font-mono text-xs flex items-start gap-3 border-l-4 border-red-500 shadow-xl border border-red-500/20">
                <span className="text-red-500 font-bold text-2xl leading-none">“</span>
                <p className="text-neutral-300 leading-relaxed">
                  Rather than claiming professional expertise I haven't earned yet, I focus on genuine understanding, clean code, and steady progress every week.
                </p>
              </div>
            </FadeInUp>

          </div>

        </div>

      </div>
    </section>
  );
}
