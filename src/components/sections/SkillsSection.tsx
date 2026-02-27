"use client";

import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { CountUp } from "@/components/ui/TextAnimations";

const categoryColors: Record<
  string,
  { bar: string; glow: string; border: string; topLine: string }
> = {
  frontend: {
    bar: "bg-gradient-to-r from-[#00d4ff] to-[#00a8cc]",
    glow: "group-hover:shadow-[0_0_20px_rgba(0,212,255,0.15)]",
    border: "group-hover:border-[#00d4ff]/30",
    topLine: "bg-gradient-to-r from-[#00d4ff] to-[#00a8cc]",
  },
  backend: {
    bar: "bg-gradient-to-r from-[#22d3ee] to-[#06b6d4]",
    glow: "group-hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]",
    border: "group-hover:border-[#22d3ee]/30",
    topLine: "bg-gradient-to-r from-[#22d3ee] to-[#06b6d4]",
  },
  tool: {
    bar: "bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]",
    glow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]",
    border: "group-hover:border-[#8b5cf6]/30",
    topLine: "bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]",
  },
};

function ProgressBar({
  level,
  category,
}: {
  level: number;
  category: string;
}) {
  const colors = categoryColors[category] ?? categoryColors.frontend;
  const percent = (level / 5) * 100;

  return (
    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/5">
      <motion.div
        className={`absolute inset-y-0 left-0 rounded-full ${colors.bar}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Glow tip */}
        <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/30 blur-sm" />
      </motion.div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-bg/50" />
      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        <SectionHeading label="Skills" title="技術スタック" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const colors =
              categoryColors[skill.category] ?? categoryColors.frontend;

            return (
              <FadeIn key={skill.name} delay={index * 0.08} direction="up">
                <TiltCard>
                  <div
                    className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-surface p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 ${colors.border} ${colors.glow}`}
                  >
                    {/* Top accent line */}
                    <div
                      className={`absolute inset-x-0 top-0 h-[2px] w-0 rounded-t-xl ${colors.topLine} transition-all duration-300 group-hover:w-full`}
                    />

                    {/* Icon */}
                    <div className="mb-3 text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 will-change-transform">
                      {skill.icon}
                    </div>

                    <h3 className="font-mono text-sm font-medium text-text-primary">
                      {skill.name}
                    </h3>

                    {/* Progress bar */}
                    <div className="mt-3">
                      <ProgressBar
                        level={skill.level}
                        category={skill.category}
                      />
                    </div>

                    {/* Level indicator */}
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 transition-colors duration-300 group-hover:text-text-secondary">
                        {skill.category}
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        <CountUp end={skill.level} suffix="/5" />
                      </span>
                    </div>
                  </div>
                </TiltCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
