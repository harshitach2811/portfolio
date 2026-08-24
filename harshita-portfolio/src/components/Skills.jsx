import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Code, Cpu, Wrench, Sparkles, CheckCircle2, RefreshCw } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { MaskedHeading, FadeInUp } from './TextReveal';

const categoryIcons = {
  programming: Code,
  aiml: Cpu,
  tools: Wrench,
};

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const cardTranslateY = useTransform(smoothProgress, [0, 1], [30, -30]);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-28 bg-[#07070D] border-t border-b border-neutral-800/80 relative text-white overflow-hidden"
    >
      {/* Background ambient lighting in red */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <FadeInUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-950/80 border border-red-500/30 rounded-md font-mono text-xs text-rose-300 font-bold tracking-wider uppercase mb-2 shadow-xs">
                <span className="w-2 h-2 bg-red-500 rounded-xs animate-pulse shadow-[0_0_6px_#ef4444]"></span>
                <span>03 / SKILLS</span>
              </div>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              <MaskedHeading delay={0.1}>
                Technical Toolkit
              </MaskedHeading>
            </h2>
          </div>
          <FadeInUp delay={0.2} className="mt-4 sm:mt-0 font-mono text-xs text-neutral-400 max-w-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>Organized by domain • No inflated percentage bars</span>
          </FadeInUp>
        </div>

        {/* Categories Grid with Staggered 3D Tilt Animations */}
        <motion.div
          style={{ y: cardTranslateY }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12"
        >
          {skillCategories.map((category, catIdx) => {
            const Icon = categoryIcons[category.id] || Sparkles;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{
                  duration: 0.85,
                  delay: catIdx * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(239, 68, 68, 0.6)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(220, 38, 38, 0.2)"
                }}
                className="bg-[#0E0E16] border-2 border-red-500/20 rounded-xl p-6 sm:p-7 shadow-xl transition-all duration-300 flex flex-col justify-between backdrop-blur-md relative overflow-hidden"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg bg-red-950/80 border border-red-500/30 flex items-center justify-center text-red-400 shadow-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-bold text-lg text-white">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-neutral-400 font-sans mb-6">
                    {category.description}
                  </p>

                  {/* Skill Pills */}
                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => {
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + catIdx * 0.1 + sIdx * 0.05 }}
                          whileHover={{ x: 3 }}
                          className={`p-3 rounded-lg border transition-all flex items-center justify-between ${
                            skill.isLearning
                              ? 'bg-red-950/40 border-red-500/40 hover:border-red-400 shadow-xs'
                              : 'bg-[#08080E] border-neutral-800 hover:border-red-500/40'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            {skill.isLearning ? (
                              <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 shadow-[0_0_6px_#ef4444]"></span>
                              </span>
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-red-400" />
                            )}
                            
                            <span className="font-display font-bold text-sm text-white">
                              {skill.name}
                            </span>
                          </div>

                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-semibold ${
                            skill.isLearning
                              ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-xs'
                              : 'bg-neutral-800 text-neutral-300 border border-neutral-700'
                          }`}>
                            {skill.note}
                          </span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Category Footer Note */}
                <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                    Verified Coursework
                  </span>
                  <span className="text-rose-300 font-bold">B.Tech AI/ML</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Integrity & Authenticity Banner with Red Glow */}
        <FadeInUp delay={0.3}>
          <div className="bg-[#0E0E16] border-2 border-red-500/30 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-rose-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-red-600/30">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-white">
                  Transparent Student Skill Matrix
                </h4>
                <p className="text-xs text-neutral-400 font-sans">
                  Technologies with the red indicator represent active coursework, practice experiments, and foundational study.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gradient-to-r from-red-600 to-rose-600 text-white font-mono text-xs font-bold shrink-0 shadow-md shadow-red-600/25">
              <span className="w-2 h-2 rounded-full bg-rose-200 animate-pulse"></span>
              Currently Learning Track
            </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}
