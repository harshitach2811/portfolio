import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Copy, Check, MessageSquare, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { MaskedHeading, FadeInUp } from './TextReveal';

// Custom clean inline SVG icons for LinkedIn and GitHub
function LinkedInIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
    </svg>
  );
}

function GitHubIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Contact() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [selectedIntent, setSelectedIntent] = useState('student');
  const [copiedTemplate, setCopiedTemplate] = useState(false);

  const intents = [
    {
      id: 'student',
      label: 'Student / Peer Collaboration',
      template: `Hi Harshita, I came across your AI/ML portfolio. Would love to connect, discuss tech projects, and share learnings in AI & data science!`
    },
    {
      id: 'mentor',
      label: 'Mentorship / Advice',
      template: `Hi Harshita, great to see your structured journey in AI/ML at GLA University. Let's connect on LinkedIn!`
    },
    {
      id: 'opportunity',
      label: 'Internship / Opportunity',
      template: `Hi Harshita, I was impressed by your Sales Analytical Dashboard project and Azure Fundamentals certification. We would like to connect with you regarding upcoming opportunities.`
    }
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(personalInfo.links.linkedin);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleCopyTemplate = () => {
    const current = intents.find((i) => i.id === selectedIntent)?.template || '';
    navigator.clipboard.writeText(current);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2500);
  };

  return (
    <section id="contact" className="py-28 bg-[#05070E] border-t border-neutral-800/80 relative text-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 pb-6 border-b border-neutral-800">
          <div>
            <FadeInUp delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-950/80 border border-blue-500/30 rounded-md font-mono text-xs text-cyan-300 font-bold tracking-wider uppercase mb-2 shadow-xs">
                <span className="w-2 h-2 bg-cyan-400 rounded-xs animate-pulse shadow-[0_0_6px_#38bdf8]"></span>
                <span>06 / CONNECT</span>
              </div>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-white tracking-tight">
              <MaskedHeading delay={0.1}>
                Let's Connect
              </MaskedHeading>
            </h2>
          </div>
          <FadeInUp delay={0.2} className="mt-4 sm:mt-0 font-mono text-xs text-neutral-400 max-w-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            <span>Open to student collaborations &amp; mentorship</span>
          </FadeInUp>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Outreach & Social Connect Cards */}
          <div className="lg:col-span-6 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0E1322] border-2 border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_10px_#38bdf8]"></div>

              <p className="text-lg sm:text-xl font-sans text-neutral-200 leading-relaxed font-medium">
                "I'm always open to connecting with fellow students, developers, AI enthusiasts, mentors, and people working on interesting ideas."
              </p>

              {/* Primary LinkedIn Action Card */}
              <div className="p-5 rounded-xl bg-[#060913] text-white space-y-4 border-2 border-blue-500/30 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25">
                      <LinkedInIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base text-white">
                        LinkedIn Profile
                      </h3>
                      <span className="font-mono text-xs text-neutral-400">
                        harshita-220899402
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-blue-950 text-cyan-300 font-mono text-[10px] font-bold border border-blue-500/40">
                    PRIMARY
                  </span>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <motion.a
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={personalInfo.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white font-mono text-xs font-bold shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/40 transition-shadow cursor-pointer"
                  >
                    <span>Connect on LinkedIn</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.a>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleCopyLink}
                    className="px-4 py-3 rounded-lg bg-[#0E1322] hover:bg-white/10 hover:text-white transition-colors font-mono text-xs text-neutral-200 inline-flex items-center justify-center gap-2 cursor-pointer border border-neutral-700"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-4 h-4 text-cyan-400" />
                        <span className="text-cyan-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-cyan-400" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>

              {/* Secondary GitHub Action Card */}
              <div className="p-5 rounded-xl bg-[#060913] border-2 border-neutral-800 hover:border-blue-500/50 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0E1322] flex items-center justify-center text-white border border-neutral-700">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">
                      GitHub Repositories
                    </h4>
                    <span className="font-mono text-xs text-cyan-300 font-semibold">
                      harshitach2811 / sales_dashboard
                    </span>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={personalInfo.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0E1322] border-2 border-blue-500/30 text-white hover:border-cyan-400 hover:text-cyan-300 transition-colors font-mono text-xs font-bold shadow-xs cursor-pointer"
                >
                  <span>View Code</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                </motion.a>
              </div>

            </motion.div>

          </div>

          {/* Right Column: Interactive Introduction Note Helper */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0E1322] border-2 border-blue-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-5 relative overflow-hidden backdrop-blur-md"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 shadow-[0_0_10px_#38bdf8]"></div>

              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <h3 className="font-display font-bold text-base text-white">
                    Quick Intro Message Helper
                  </h3>
                </div>
                <span className="font-mono text-[11px] text-cyan-300 font-semibold bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                  LinkedIn Note Preset
                </span>
              </div>

              <p className="text-xs text-neutral-300 font-sans">
                Connecting with a personal note is always great. Choose your intent below and copy a ready message:
              </p>

              {/* Intent Selectors */}
              <div className="flex flex-wrap gap-2">
                {intents.map((item) => (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedIntent(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                      selectedIntent === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-md shadow-blue-500/25 border border-blue-400'
                        : 'bg-[#060913] text-neutral-300 hover:bg-blue-950/60 hover:text-white border border-neutral-800'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>

              {/* Message Box */}
              <div className="relative p-4 rounded-xl bg-[#060913] border-2 border-blue-500/30 font-mono text-xs text-cyan-100 leading-relaxed font-medium">
                "{intents.find((i) => i.id === selectedIntent)?.template}"
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={handleCopyTemplate}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#060913] hover:bg-white/10 text-white transition-colors font-mono text-xs font-bold cursor-pointer border border-neutral-700"
                >
                  {copiedTemplate ? (
                    <>
                      <Check className="w-4 h-4 text-cyan-400" />
                      <span className="text-cyan-400 font-bold">Message Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-cyan-400" />
                      <span>Copy Note to Clipboard</span>
                    </>
                  )}
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  href={personalInfo.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white transition-all font-mono text-xs font-bold shadow-md shadow-blue-500/30 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Paste on LinkedIn</span>
                </motion.a>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] font-mono text-neutral-400 font-medium">
                  GLA University, Mathura • Available for student hackathons &amp; learning groups
                </span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
