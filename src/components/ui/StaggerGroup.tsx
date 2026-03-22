"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode, Children } from "react";

type StaggerPreset = "slide-left" | "slide-right" | "scale-pop" | "rise";

type StaggerGroupProps = {
  children: ReactNode;
  preset?: StaggerPreset;
  staggerDelay?: number;
  className?: string;
};

const presetVariants: Record<StaggerPreset, {
  hidden: Record<string, number>;
  visible: Record<string, number>;
  transition: Record<string, unknown>;
}> = {
  "slide-left": {
    hidden: { opacity: 0, x: -80, rotate: -2, scale: 0.95 },
    visible: { opacity: 1, x: 0, rotate: 0, scale: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 80, rotate: 2, scale: 0.95 },
    visible: { opacity: 1, x: 0, rotate: 0, scale: 1 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  "scale-pop": {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
  "rise": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function StaggerGroup({
  children,
  preset = "rise",
  staggerDelay = 0.06,
  className,
}: StaggerGroupProps) {
  const shouldReduceMotion = useReducedMotion();
  const config = presetVariants[preset];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
      },
    },
  };

  const itemVariants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : config.hidden,
    visible: {
      ...(shouldReduceMotion ? { opacity: 1 } : config.visible),
      transition: shouldReduceMotion
        ? { duration: 0.3 }
        : config.transition,
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
