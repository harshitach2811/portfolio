import React from 'react';
import { Sparkles, Brain, Cpu, Rocket, RotateCcw, Target, CheckCircle2 } from 'lucide-react';
import { currentlyLearningTopics, learningFramework } from '../data/portfolioData';

export default function LearningApproach() {
  return (
    <section id="growth" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-200">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-red-600 font-semibold tracking-wider uppercase mb-2">
              <span className="w-2 h-2 bg-red-600 rounded-xs"></span>
              <span>06 / GROWTH &amp; APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-neutral-950 tracking-tight">
              Currently Learning &amp; How I Learn
            </h2>
          </div>
          <div className="mt-4 sm:mt-0 font-mono text-xs text-neutral-500 max-w-xs">
            Authentic student mindset • Continuous iteration
          </div>
        </div>

        {/* Top Subsection: Currently Learning Live Matrix */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </span>
              <h3 className="font-display font-bold text-xl text-neutral-950">
                Currently Learning
              </h3>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              Active Focus Areas (2024–2025)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentlyLearningTopics.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-red-600/50 hover:bg-red-50/20 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-red-100/70 text-red-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
                    {item.status}
                  </span>
                </div>

                <h4 className="font-display font-bold text-base text-neutral-900 leading-snug">
                  {item.topic}
                </h4>

                <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Student Track</span>
                  <span className="text-neutral-700">In Progress</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Subsection: How I Learn (4-Step Framework) */}
        <div>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-100">
            <div>
              <h3 className="font-display font-bold text-2xl text-neutral-950">
                How I Learn
              </h3>
              <p className="text-xs font-mono text-neutral-500 mt-1">
                My four-stage framework for steady technical progress
              </p>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-red-600 font-semibold">
              Iterative • Practical • Real
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningFramework.map((stage) => (
              <div
                key={stage.number}
                className="group relative bg-white border border-neutral-200 rounded-xl p-6 hover:border-red-600 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-black px-2.5 py-1 rounded bg-neutral-950 text-white group-hover:bg-red-600 transition-colors">
                      {stage.number}
                    </span>
                    <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider uppercase">
                      STAGE
                    </span>
                  </div>

                  <h4 className="font-display font-extrabold text-xl text-neutral-950 mb-1">
                    {stage.stage}
                  </h4>
                  
                  <p className="font-mono text-xs text-red-600 font-semibold mb-3">
                    {stage.title}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-600 font-sans leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 group-hover:text-neutral-900 transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                  <span>Continuous Loop</span>
                </div>
              </div>
            ))}
          </div>

          {/* Student Philosophy Callout */}
          <div className="mt-12 p-6 rounded-xl bg-neutral-50 border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="font-display font-bold text-base text-neutral-950">
                Growth over Pretending
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600 font-sans max-w-2xl">
                Every project I build is an opportunity to test what I've learned, analyze edge cases, debug failures, and develop practical competence.
              </p>
            </div>

            <div className="shrink-0 font-mono text-xs bg-white border border-neutral-200 px-4 py-2 rounded-lg text-neutral-800 font-medium shadow-2xs">
              GLA University • AI/ML 2024–2027
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
