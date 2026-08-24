import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Lightbulb, BookOpen, Terminal, Activity, TrendingUp, Flag, CheckCircle2, ChevronRight } from 'lucide-react';
import { journeyMilestones } from '../data/portfolioData';
import { MaskedHeading, FadeInUp } from './TextReveal';

const milestoneIcons = [Lightbulb, BookOpen, Terminal, Activity, TrendingUp, Flag];

export default function Journey() {
  const [selectedMilestone, setSelectedMilestone] = useState(3);
  const containerRef = useRef(null);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-28 bg-[#05050A] relative text-white overflow-hidden"
    >
      {/* Ambient background light in red */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <FadeInUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-500/30 rounded-md font-mono text-xs text-rose-300 font-bold tracking-wider uppercase mb-2 shadow-xs">
                <span className="w-2 h-2 bg-red-500 rounded-xs animate-pulse shadow-[0_0_6px_#ef4444]"></span>
                <span>02 / JOURNEY</span>
              </div>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              <MaskedHeading delay={0.1}>
                Why AI?
              </MaskedHeading>
            </h2>
          </div>
          <FadeInUp delay={0.2} className="mt-4 sm:mt-0 font-mono text-xs text-neutral-400 max-w-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>From initial curiosity to practical AI engineering</span>
          </FadeInUp>
        </div>

        {/* Narrative Box with Ambient Tech Grid */}
        <FadeInUp delay={0.15}>
          <motion.div
            whileHover={{ y: -3, borderColor: "rgba(239, 68, 68, 0.4)" }}
            className="bg-[#0E0E16] border-2 border-red-500/30 rounded-2xl p-6 sm:p-8 mb-16 relative overflow-hidden shadow-2xl backdrop-blur-md"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-tech-grid-crimson opacity-25 pointer-events-none"></div>
            
            <div className="max-w-4xl space-y-4 relative z-10">
              <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold uppercase">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>THE MOTIVATION BEHIND MY PATH</span>
              </div>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                Why Exploring AI Fuels My Daily Learning
              </h3>
              <p className="text-base sm:text-lg font-sans text-neutral-200 leading-relaxed font-medium">
                "AI interests me because it combines problem-solving, data, creativity, and technology. I like learning how machines use data to find patterns and help people make better decisions."
              </p>
              <p className="text-base font-sans text-neutral-300 leading-relaxed">
                "I am still at the beginning of my AI journey, but I enjoy learning new concepts, working on projects, and improving through my mistakes. Each step brings me closer to becoming an AI Engineer."
              </p>
            </div>
          </motion.div>
        </FadeInUp>

        {/* Journey Flow Diagram with Staggered Cascading Cards */}
        <div className="mb-12">
          <FadeInUp delay={0.1}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500"></span>
                <span>My AI Journey Roadmap</span>
                <span className="text-xs font-mono font-normal text-rose-400">
                  (Click any phase to inspect)
                </span>
              </h3>
              <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-rose-300 font-bold bg-red-950/80 px-2.5 py-1 rounded border border-red-500/30">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>Active Roadmap</span>
              </div>
            </div>
          </FadeInUp>

          {/* Connected Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {journeyMilestones.map((item, idx) => {
              const Icon = milestoneIcons[idx] || CheckCircle2;
              const isSelected = selectedMilestone === idx;
              const isFuture = item.isFuture;

              return (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-8%" }}
                  transition={{
                    duration: 0.75,
                    delay: idx * 0.08,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    borderColor: isSelected ? "#ef4444" : "rgba(239, 68, 68, 0.6)",
                  }}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`group cursor-pointer rounded-xl p-5 border-2 transition-all duration-200 flex flex-col justify-between relative overflow-hidden ${
                    isSelected
                      ? 'bg-[#180D12] border-red-500 shadow-xl shadow-red-500/15 ring-2 ring-red-500/30'
                      : isFuture
                      ? 'bg-[#0A0A10]/80 border-dashed border-neutral-800 hover:border-red-500/50'
                      : 'bg-[#0E0E16] border-red-500/20 hover:border-red-400 hover:shadow-md'
                  }`}
                >
                  {/* Top red indicator on active card */}
                  {isSelected && (
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 to-rose-500 shadow-[0_0_10px_#ef4444]"></div>
                  )}

                  <div>
                    {/* Header with Phase and Icon */}
                    <div className="flex items-center justify-between mb-3">
                      <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded ${
                        isSelected
                          ? 'bg-red-500 text-white font-black shadow-xs'
                          : isFuture
                          ? 'bg-neutral-800 text-neutral-400'
                          : 'bg-red-950/80 text-rose-300 border border-red-500/30 group-hover:bg-red-600 group-hover:text-white'
                      }`}>
                        PHASE {item.phase}
                      </span>
                      <div className={`p-1.5 rounded-md ${
                        isSelected ? 'text-rose-300 bg-red-950' : 'text-neutral-400 group-hover:text-rose-300'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Stage Title */}
                    <h4 className="font-display font-bold text-base text-white mb-1 group-hover:text-rose-300 transition-colors">
                      {item.stage}
                    </h4>
                    
                    {/* Tagline */}
                    <p className="font-mono text-[11px] text-red-400 font-bold mb-3">
                      {item.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer Highlight */}
                  <div className="mt-4 pt-3 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-neutral-400 font-medium truncate max-w-[85%]">
                      {item.highlight}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${
                      isSelected ? 'text-red-400 font-bold' : 'text-neutral-500 group-hover:text-rose-300'
                    }`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Detail Banner */}
        <FadeInUp delay={0.2}>
          <div className="bg-[#0E0E16] text-white rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-2 border-red-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gradient-to-b from-red-600 to-rose-500 shadow-[0_0_12px_#ef4444]"></div>

            <div className="space-y-2 pl-2">
              <div className="flex items-center gap-2 font-mono text-xs text-red-400 font-bold">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>SELECTED ROADMAP FOCUS • PHASE {journeyMilestones[selectedMilestone].phase}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                {journeyMilestones[selectedMilestone].stage}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-400">{journeyMilestones[selectedMilestone].tagline}</span>
              </h4>
              <p className="text-sm font-sans text-neutral-300 max-w-3xl leading-relaxed">
                {journeyMilestones[selectedMilestone].description}
              </p>
            </div>

            <div className="shrink-0 font-mono text-xs bg-[#06060A] border border-red-500/30 rounded-lg p-4 text-neutral-200">
              <span className="text-red-400 block uppercase text-[10px] mb-1 font-bold">CURRENT STATUS</span>
              <span className="text-white font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                Active Progression Track
              </span>
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
