"use client";

import { motion } from "motion/react";
import { FadeIn } from "./FadeIn";

const sectionNumbers: Record<string, string> = {
  Skills: "01",
  Projects: "02",
  Contact: "03",
};

type SectionHeadingProps = {
  label: string;
  title: string;
};

export function SectionHeading({ label, title }: SectionHeadingProps) {
  const number = sectionNumbers[label] ?? "00";

  return (
    <FadeIn className="mb-16 text-center" scale blur>
      {/* Code-style label with number */}
      <div className="inline-flex items-center gap-3 font-mono text-base tracking-[0.2em] uppercase">
        <span className="text-slate-400">{`// ${number}`}</span>
        <span className="text-accent">{label}</span>
      </div>

      {/* Title */}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      {/* Decorative dots */}
      <div className="mx-auto mt-4 flex items-center justify-center gap-1.5">
        <span className="inline-block h-1 w-1 rounded-full bg-accent/30" />
        <span className="inline-block h-1 w-1 rounded-full bg-accent/50" />
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="inline-block h-1 w-1 rounded-full bg-accent/50" />
        <span className="inline-block h-1 w-1 rounded-full bg-accent/30" />
      </div>

      {/* Animated underline */}
      <motion.div
        className="mx-auto mt-3 h-px w-16 origin-left bg-accent/40"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </FadeIn>
  );
}
