"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

type ParallaxLayerProps = {
  children: ReactNode;
  speed?: number;
  rotateRange?: [number, number];
  className?: string;
};

export function ParallaxLayer({
  children,
  speed = 0.3,
  rotateRange,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yOffset = speed * 250;
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);
  const rotate = useTransform(
    scrollYProgress,
    [0, 1],
    rotateRange ?? [0, 0]
  );

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, rotate }}>
        {children}
      </motion.div>
    </div>
  );
}
