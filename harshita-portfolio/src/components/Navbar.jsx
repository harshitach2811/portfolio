import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Journey', href: '#journey', id: 'journey' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Certificate', href: '#certification', id: 'certification' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop > 0 ? offsetTop : 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#05050A]/95 backdrop-blur-md border-b border-red-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.6)]'
          : 'bg-[#05050A]/85 backdrop-blur-sm border-b border-white/5'
      }`}
    >
      {/* Top crimson red gradient accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-red-600 via-rose-500 to-red-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center text-white font-mono font-bold text-sm tracking-tighter shadow-md shadow-red-600/30 group-hover:scale-105 transition-all">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight text-white flex items-center gap-1.5">
                {personalInfo.name}
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block animate-pulse shadow-[0_0_8px_#ef4444]"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-rose-400 font-semibold">
                GLA Univ • AI/ML 2nd Year
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono tracking-tight uppercase transition-all duration-150 rounded-md ${
                    isActive
                      ? 'text-rose-300 font-bold bg-red-950/60 border border-red-500/30 shadow-xs'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium text-neutral-200 border border-red-500/30 rounded-md hover:border-red-400 hover:text-white transition-colors bg-[#0E0E16] shadow-xs"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-semibold text-white bg-gradient-to-r from-red-600 to-rose-600 rounded-md hover:from-red-500 hover:to-rose-500 transition-all shadow-md shadow-red-600/30"
            >
              <span>Connect</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-3 py-1 text-[11px] font-mono font-semibold text-white bg-red-600 rounded-md hover:bg-red-500 transition-colors"
            >
              Connect
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-neutral-300 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-rose-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-red-500/20 bg-[#0A0A10]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="pb-2 mb-2 border-b border-neutral-800 flex items-center justify-between text-xs font-mono text-neutral-400">
            <span>NAVIGATION</span>
            <span className="flex items-center gap-1 text-rose-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              AI/ML Student
            </span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`block px-3 py-2.5 rounded-md text-sm font-mono tracking-tight ${
                activeSection === link.id
                  ? 'bg-red-600 text-white font-bold shadow-md shadow-red-600/30'
                  : 'text-neutral-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-medium text-neutral-200 border border-red-500/30 rounded-md hover:border-red-400 hover:text-white bg-[#0E0E16]"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 text-rose-400" />
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono font-medium text-neutral-200 border border-red-500/30 rounded-md hover:border-red-400 hover:text-white bg-[#0E0E16]"
            >
              <span>GitHub Repository</span>
              <ArrowUpRight className="w-4 h-4 text-rose-400" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
