"use client";

import { motion, type TargetAndTransition } from "motion/react";
import { type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
  scale?: boolean;
  blur?: boolean;
  rotate?: number;
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className,
  scale = false,
  blur = false,
  rotate = 0,
}: FadeInProps) {
  const offsets = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  };

  const initial: TargetAndTransition = {
    opacity: 0,
    ...offsets[direction],
    ...(scale ? { scale: 0.95 } : {}),
    ...(blur ? { filter: "blur(8px)" } : {}),
    ...(rotate !== 0 ? { rotate } : {}),
  };

  const animate: TargetAndTransition = {
    opacity: 1,
    x: 0,
    y: 0,
    ...(scale ? { scale: 1 } : {}),
    ...(blur ? { filter: "blur(0px)" } : {}),
    ...(rotate !== 0 ? { rotate: 0 } : {}),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
