import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, BarChart3, TrendingUp, DollarSign, Layers, CheckCircle2, Eye, GitBranch } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { MaskedHeading, FadeInUp } from './TextReveal';

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const cardScale = useTransform(smoothProgress, [0, 0.4, 0.8, 1], [0.94, 1, 1, 0.96]);
  const cardRotateX = useTransform(smoothProgress, [0, 0.5, 1], [4, 0, -4]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-28 bg-[#05050A] relative text-white overflow-hidden"
    >
      {/* Background ambient lighting in red */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <FadeInUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-500/30 rounded-md font-mono text-xs text-rose-300 font-bold tracking-wider uppercase mb-2 shadow-xs">
                <span className="w-2 h-2 bg-red-500 rounded-xs animate-pulse shadow-[0_0_6px_#ef4444]"></span>
                <span>04 / PROJECTS</span>
              </div>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              <MaskedHeading delay={0.1}>
                What I've Built
              </MaskedHeading>
            </h2>
          </div>
          <FadeInUp delay={0.2} className="mt-4 sm:mt-0 font-mono text-xs text-neutral-400 max-w-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>Practical data-driven applications • Inspected from repository</span>
          </FadeInUp>
        </div>

        {/* Featured Project Main Showcase with Scroll-Linked Scale & 3D Tilt */}
        <motion.div
          style={{ scale: cardScale, rotateX: cardRotateX }}
          className="group relative bg-[#0E0E16] border-2 border-red-500/30 rounded-2xl overflow-hidden hover:border-red-500 transition-all duration-300 shadow-[0_16px_50px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.25)]"
        >
          {/* Top Crimson Red Accent Line */}
          <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700 shadow-[0_0_12px_#ef4444]"></div>

          <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Category & Status */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-md bg-[#08080E] font-mono text-xs font-semibold text-neutral-200 border border-neutral-800">
                  {featuredProject.category}
                </span>
                <span className="px-3 py-1 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white font-mono text-xs font-bold shadow-xs shadow-red-500/30">
                  Featured Project
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight group-hover:text-rose-300 transition-colors">
                  {featuredProject.title}
                </h3>
                
                <p className="text-sm sm:text-base font-sans text-neutral-300 leading-relaxed border-l-2 border-red-500 pl-3.5 bg-red-950/30 py-2 rounded-r">
                  "{featuredProject.description}"
                </p>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block font-bold">
                  Technologies &amp; Methodologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#08080E] border border-red-500/30 text-xs font-mono text-rose-200 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* What I Learned Highlights */}
              <div className="space-y-2.5 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-red-400 block font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                  What I Learned from Building This:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-neutral-200">
                  {featuredProject.whatILearned.slice(0, 4).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs with Spring Micro-Interactions */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-neutral-800">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white font-mono text-xs font-bold shadow-lg shadow-red-600/35 hover:shadow-red-500/50 transition-shadow cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Case Study &amp; Overview</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03, y: -2, borderColor: "rgba(239, 68, 68, 0.8)" }}
                  whileTap={{ scale: 0.98 }}
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg border-2 border-red-500/40 bg-[#08080E] text-white font-mono text-xs font-bold hover:text-rose-300 transition-all shadow-xs cursor-pointer"
                >
                  <GitBranch className="w-4 h-4 text-rose-400" />
                  <span>live demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>

            </div>

            {/* Right Interactive Dashboard Preview Mockup with Red Accents */}
            <div className="lg:col-span-6">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="bg-[#06060A] rounded-xl p-5 border-2 border-red-500/30 text-white shadow-2xl space-y-4 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-tech-grid-crimson opacity-25 pointer-events-none"></div>

                {/* Mock Window Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-neutral-800 font-mono text-[11px] text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_6px_#ef4444]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                    <span className="ml-2 text-white font-semibold">sales_analytics_view.py</span>
                  </div>
                  <span className="text-[10px] text-rose-300 font-bold uppercase bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40">
                    DATA_PIPELINE: ACTIVE
                  </span>
                </div>

                {/* KPI Metrics Row */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-3 rounded-lg bg-[#0E0E16] border border-red-500/20">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Total Volume</span>
                    <span className="font-mono text-base font-bold text-white mt-0.5 block">14,820</span>
                    <span className="text-[10px] font-mono text-rose-400 font-semibold">+12.4% MoM</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E0E16] border border-red-500/20">
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase">Avg Ticket</span>
                    <span className="font-mono text-base font-bold text-white mt-0.5 block">$248.50</span>
                    <span className="text-[10px] font-mono text-emerald-400">+4.1% MoM</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0E0E16] border-2 border-red-500/80">
                    <span className="text-[10px] font-mono text-rose-300 block uppercase font-semibold">Efficiency</span>
                    <span className="font-mono text-base font-bold text-rose-400 mt-0.5 block">94.8%</span>
                    <span className="text-[10px] font-mono text-neutral-400">Analyzed</span>
                  </div>
                </div>

                {/* Visual Bar Chart Mockup with Animated Bars on Viewport Enter */}
                <div className="p-4 rounded-lg bg-[#0E0E16]/90 border border-red-500/20 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-neutral-200 font-bold flex items-center gap-1.5">
                      <BarChart3 className="w-3.5 h-3.5 text-rose-400" />
                      Monthly Sales Performance Trend
                    </span>
                    <span className="text-neutral-400 text-[10px] font-semibold">6 Months Analysis</span>
                  </div>

                  {/* SVG Bars with Animated Heights */}
                  <div className="h-28 flex items-end justify-between gap-2 pt-4 px-2">
                    {[
                      { month: 'Jan', val: '45%', highlight: false, delay: 0.1 },
                      { month: 'Feb', val: '60%', highlight: false, delay: 0.2 },
                      { month: 'Mar', val: '75%', highlight: false, delay: 0.3 },
                      { month: 'Apr', val: '65%', highlight: false, delay: 0.4 },
                      { month: 'May', val: '88%', highlight: true, delay: 0.5 },
                      { month: 'Jun', val: '95%', highlight: true, delay: 0.6 },
                    ].map((bar) => (
                      <div key={bar.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <motion.div
                          initial={{ height: "0%" }}
                          whileInView={{ height: bar.val }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, delay: bar.delay, ease: [0.16, 1, 0.3, 1] }}
                          className={`w-full rounded-t transition-all duration-300 ${
                            bar.highlight
                              ? 'bg-gradient-to-t from-red-600 to-rose-400 shadow-md shadow-red-500/40'
                              : 'bg-neutral-800 hover:bg-red-600'
                          }`}
                        />
                        <span className={`text-[10px] font-mono ${bar.highlight ? 'text-rose-300 font-bold' : 'text-neutral-400'}`}>
                          {bar.month}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Category Insights Footer */}
                <div className="p-3 rounded-lg bg-[#0E0E16] border border-red-500/20 flex items-center justify-between text-xs font-mono">
                  <span className="text-neutral-400 text-[11px] font-medium">Primary Insight:</span>
                  <span className="text-rose-300 font-bold text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Top 20% products generate 68% of total revenue
                  </span>
                </div>

              </motion.div>
            </div>

          </div>

        </motion.div>

        {/* Modal Deep-Dive */}
        <ProjectModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />

      </div>
    </section>
  );
}
