import React from 'react';
import { motion } from 'framer-motion';

export function MaskedHeading({ children, className = "", delay = 0, size = "large" }) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      }
    }
  };

  const wordVariants = {
    hidden: {
      y: "110%",
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // cinematic strong cubic-bezier easing
      }
    }
  };

  // If children is a string, split by words
  if (typeof children === 'string') {
    const words = children.split(' ');
    return (
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        className={`inline-flex flex-wrap overflow-hidden perspective-1000 ${className}`}
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block overflow-hidden py-1 pr-2">
            <motion.span variants={wordVariants} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function FadeInUp({ children, className = "", delay = 0, duration = 0.8, distance = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
