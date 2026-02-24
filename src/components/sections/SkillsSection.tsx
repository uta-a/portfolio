"use client";

import { motion } from "motion/react";
import { skills } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categoryColors: Record<string, { bar: string; accent: string; bg: string; topLine: string }> = {
  frontend: {
    bar: "bg-gradient-to-r from-blue-400 to-blue-600",
    accent: "group-hover:text-blue-500",
    bg: "group-hover:bg-gradient-to-br group-hover:from-blue-50/60 group-hover:to-white",
    topLine: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
  },
  backend: {
    bar: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    accent: "group-hover:text-emerald-500",
    bg: "group-hover:bg-gradient-to-br group-hover:from-emerald-50/60 group-hover:to-white",
    topLine: "bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600",
  },
  tool: {
    bar: "bg-gradient-to-r from-violet-400 to-violet-600",
    accent: "group-hover:text-violet-500",
    bg: "group-hover:bg-gradient-to-br group-hover:from-violet-50/60 group-hover:to-white",
    topLine: "bg-gradient-to-r from-violet-400 via-violet-500 to-violet-600",
  },
};

function ProgressBar({ level, category }: { level: number; category: string }) {
  const colors = categoryColors[category] ?? categoryColors.frontend;
  const percent = (level / 5) * 100;

  return (
    <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
      <motion.div
        className={`absolute inset-y-0 left-0 rounded-full ${colors.bar}`}
        initial={{ width: 0 }}
        whileInView={{ width: `${percent}%` }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative bg-slate-50/50 py-24 sm:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Dot pattern background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1e293b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        <SectionHeading label="Skills" title="技術スタック" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const colors = categoryColors[skill.category] ?? categoryColors.frontend;

            return (
              <FadeIn key={skill.name} delay={index * 0.08} direction="up">
                <div className={`group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 ${colors.bg}`}>
                  {/* Top accent line - category colored */}
                  <div className={`absolute inset-x-0 top-0 h-[2px] w-0 rounded-t-xl ${colors.topLine} transition-all duration-300 group-hover:w-full`} />

                  {/* Bottom gradient line */}
                  <div className="absolute inset-x-4 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon with hover animation */}
                  <div className="mb-3 text-2xl transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6 will-change-transform">
                    {skill.icon}
                  </div>

                  <h3 className="font-mono text-sm font-medium text-slate-800">
                    {skill.name}
                  </h3>

                  {/* Animated progress bar */}
                  <div className="mt-3">
                    <ProgressBar level={skill.level} category={skill.category} />
                  </div>

                  <span className={`mt-2 inline-block font-mono text-[10px] uppercase tracking-wider text-slate-400 transition-colors duration-300 ${colors.accent}`}>
                    {skill.category}
                  </span>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
