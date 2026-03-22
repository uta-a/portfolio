"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

type RevealPreset = "slide-left" | "slide-right" | "rotate-in" | "scale-pop" | "rise";

type RevealProps = {
  children: ReactNode;
  preset?: RevealPreset;
  delay?: number;
  className?: string;
};

const presets: Record<RevealPreset, {
  initial: Record<string, number>;
  transition: Record<string, unknown>;
}> = {
  "slide-left": {
    initial: { opacity: 0, x: -120, rotate: -3, scale: 0.95 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  "slide-right": {
    initial: { opacity: 0, x: 120, rotate: 3, scale: 0.95 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
  "rotate-in": {
    initial: { opacity: 0, y: 80, rotate: -8, scale: 0.9 },
    transition: { type: "spring", stiffness: 130, damping: 18 },
  },
  "scale-pop": {
    initial: { opacity: 0, scale: 0.5 },
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
  "rise": {
    initial: { opacity: 0, y: 60 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedMotionFallback = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.3 },
};

export function Reveal({
  children,
  preset = "rise",
  delay = 0,
  className,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const config = presets[preset];

  if (shouldReduceMotion) {
    return (
      <motion.div
        initial={reducedMotionFallback.initial}
        whileInView={reducedMotionFallback.animate}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ ...reducedMotionFallback.transition, delay }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  const animate: Record<string, number> = { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 };

  return (
    <motion.div
      initial={config.initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ ...config.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
