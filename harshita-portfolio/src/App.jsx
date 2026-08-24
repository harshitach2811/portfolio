import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorAndProgress from './components/CursorAndProgress';
import SmoothScrollProvider from './components/SmoothScrollProvider';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sectionIds = ['home', 'about', 'journey', 'skills', 'projects', 'certification', 'contact'];
    
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SmoothScrollProvider>
      <div className="min-h-screen bg-[#05070E] text-white font-sans selection:bg-blue-600 selection:text-white flex flex-col antialiased relative overflow-x-hidden">
        {/* Global Cinematic Cursor & Scroll Progress Indicator */}
        <CursorAndProgress />

        {/* Top Navbar */}
        <Navbar activeSection={activeSection} />

        {/* Main Content Sections with Fluid Scroll-Driven Sequences */}
        <main className="flex-grow">
          <Hero />
          <About />
          <Journey />
          <Skills />
          <Projects />
          <Certification />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </SmoothScrollProvider>
  );
}
