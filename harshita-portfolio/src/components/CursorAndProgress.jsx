import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function CursorAndProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, textarea, [role="button"], .interactive-target')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Top Global Scroll Progress Bar in Crimson Red */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-600 via-rose-500 to-red-400 origin-left z-50 shadow-[0_0_12px_#ef4444]"
      />

      {/* Cinematic Custom Mouse Follower (Desktop only) */}
      {!isTouchDevice && (
        <>
          {/* Outer glow ring */}
          <motion.div
            animate={{
              x: mousePos.x - (isHovered ? 24 : 16),
              y: mousePos.y - (isHovered ? 24 : 16),
              scale: isHovered ? 1.6 : 1,
              borderColor: isHovered ? "rgba(239, 68, 68, 0.9)" : "rgba(220, 38, 38, 0.4)",
              backgroundColor: isHovered ? "rgba(239, 68, 68, 0.08)" : "transparent",
            }}
            transition={{
              type: "spring",
              stiffness: 350,
              damping: 28,
              mass: 0.5,
            }}
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-red-500/40 pointer-events-none z-50 backdrop-blur-[0.5px]"
          />

          {/* Inner solid dot */}
          <motion.div
            animate={{
              x: mousePos.x - 3,
              y: mousePos.y - 3,
              scale: isHovered ? 0 : 1,
            }}
            transition={{
              type: "spring",
              stiffness: 800,
              damping: 35,
            }}
            className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-red-500 pointer-events-none z-50 shadow-[0_0_8px_#ef4444]"
          />
        </>
      )}
    </>
  );
}
