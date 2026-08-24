import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ArrowUpRight, Cloud, CheckCircle2 } from 'lucide-react';
import { certification } from '../data/portfolioData';
import { MaskedHeading, FadeInUp } from './TextReveal';

export default function Certification() {
  return (
    <section id="certification" className="py-28 bg-[#080C18] border-t border-b border-neutral-800/80 relative text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <FadeInUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/80 border border-blue-500/30 rounded-md font-mono text-xs text-cyan-300 font-bold tracking-wider uppercase mb-2 shadow-xs">
                <span className="w-2 h-2 bg-cyan-400 rounded-xs animate-pulse shadow-[0_0_6px_#38bdf8]"></span>
                <span>05 / CERTIFICATION</span>
              </div>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              <MaskedHeading delay={0.1}>
                Learning Beyond the Classroom
              </MaskedHeading>
            </h2>
          </div>
          <FadeInUp delay={0.2} className="mt-4 sm:mt-0 font-mono text-xs text-neutral-400 max-w-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Publicly verifiable credential • Industry cloud foundation</span>
          </FadeInUp>
        </div>

        {/* Certification Showcase Card with Hover Elevation */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{
            y: -5,
            borderColor: "rgba(56, 189, 248, 0.6)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.8), 0 0 35px rgba(56, 189, 248, 0.15)"
          }}
          className="bg-[#0E1322] border-2 border-blue-500/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 relative overflow-hidden backdrop-blur-md"
        >
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_12px_#38bdf8]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Badge Visual Container with 3D Float */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#060913] border-2 border-blue-500/30 rounded-xl relative overflow-hidden text-center shadow-lg">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-tech-grid-cyan opacity-25 pointer-events-none"></div>

              {/* Badge Visual with subtle float */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white p-3 border-2 border-cyan-400/40 shadow-lg shadow-blue-500/20 flex items-center justify-center mb-4"
              >
                <img
                  src={certification.badgeUrl}
                  alt="Microsoft Certified: Azure Fundamentals Badge"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full rounded-full bg-blue-950 items-center justify-center text-cyan-400">
                  <Cloud className="w-12 h-12" />
                </div>
              </motion.div>

              {/* Verified Ribbon */}
              <div className="relative z-10 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-md shadow-blue-500/25">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified by Credly</span>
              </div>

              <span className="relative z-10 text-[11px] font-mono text-cyan-300 mt-2 font-semibold">
                Issuer: Microsoft
              </span>
            </div>

            {/* Right Details Column */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Header Details */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs text-neutral-400">
                  <span className="text-cyan-300 font-bold uppercase bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                    CLOUD COMPUTING
                  </span>
                  <span>•</span>
                  <span className="font-semibold text-white">MICROSOFT CERTIFIED</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                  {certification.title}
                </h3>
                
                <p className="text-xs font-mono text-neutral-400">
                  Issuing Organization: <span className="text-white font-bold">{certification.organization}</span>
                </p>
              </div>

              {/* Official Credential Summary */}
              <p className="text-sm sm:text-base font-sans text-neutral-200 leading-relaxed bg-[#060913] p-4 rounded-lg border border-blue-500/20">
                "{certification.description}"
              </p>

              {/* Verified Competencies */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase font-bold text-cyan-400 block flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  Core Competencies Demonstrated:
                </span>
                <div className="space-y-2">
                  {certification.skillsVerified.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + idx * 0.08 }}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-sans text-neutral-200 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href={certification.credlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono text-xs font-bold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-shadow cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Verify Certificate on Credly</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>

                <span className="font-mono text-[11px] text-neutral-400 font-medium">
                  Public Verification Link (Credly Acclaim)
                </span>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
