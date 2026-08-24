import React, { useEffect } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, BookOpen } from 'lucide-react';
import { featuredProject } from '../data/portfolioData';

export default function ProjectModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { caseStudy, whatILearned, technologies, githubUrl, githubRepo, title } = featuredProject;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      ></div>

      {/* Modal Container */}
      <div className="relative bg-[#0E1322] border-2 border-blue-500/40 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 animate-in zoom-in-95 duration-200 text-white">
        
        {/* Top Electric Blue Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_12px_#38bdf8]"></div>

        {/* Modal Header */}
        <div className="sticky top-0 bg-[#0E1322]/95 backdrop-blur-md px-6 py-5 border-b border-neutral-800 flex items-center justify-between z-20">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-400 font-bold uppercase mb-0.5">
              <span>PROJECT CASE STUDY</span>
              <span>•</span>
              <span className="text-neutral-300 font-semibold">{githubRepo}</span>
            </div>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
              {title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-cyan-400 font-bold mr-1">TECH STACK:</span>
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md bg-[#060913] border border-blue-500/30 text-xs font-mono font-bold text-cyan-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Core Case Study Pillars (Problem / Approach / Outcome) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Problem */}
            <div className="p-5 rounded-xl bg-[#060913] border-2 border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-300 uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>The Problem</span>
              </div>
              <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                "{caseStudy.problem}"
              </p>
            </div>

            {/* Approach */}
            <div className="p-5 rounded-xl bg-[#060913] border-2 border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-neutral-300 uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span>The Approach</span>
              </div>
              <p className="text-sm font-sans text-neutral-300 leading-relaxed">
                "{caseStudy.approach}"
              </p>
            </div>

            {/* Outcome */}
            <div className="p-5 rounded-xl bg-blue-950/40 border-2 border-blue-500/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>The Outcome</span>
              </div>
              <p className="text-sm font-sans text-white font-medium leading-relaxed">
                "{caseStudy.outcome}"
              </p>
            </div>

          </div>

          {/* Pipeline Workflow Breakdown */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Analytical Workflow &amp; Structure</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {caseStudy.architecture.map((arch) => (
                <div key={arch.step} className="p-4 rounded-lg border-2 border-neutral-800 hover:border-blue-500/50 transition-colors bg-[#060913]">
                  <h5 className="font-mono text-xs font-bold text-cyan-300 mb-1">
                    {arch.step}
                  </h5>
                  <p className="text-xs text-neutral-300 font-sans leading-relaxed">
                    {arch.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What I Learned Section */}
          <div className="space-y-4 pt-4 border-t border-neutral-800">
            <h4 className="font-display font-bold text-lg text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-cyan-400" />
              <span>Key Technical &amp; Analytical Takeaways</span>
            </h4>

            <div className="space-y-2.5">
              {whatILearned.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-[#060913] border border-blue-500/20">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-sans text-neutral-200 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-neutral-400">
              Repository: <span className="text-cyan-300 font-bold">{githubRepo}</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-lg border border-neutral-700 text-xs font-mono text-neutral-300 hover:bg-white/5 transition-colors cursor-pointer"
              >
                Close Case Study
              </button>
              
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 transition-all font-mono text-xs font-bold shadow-md shadow-blue-500/30 cursor-pointer"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
