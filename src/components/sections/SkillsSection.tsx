"use client";

import { skills } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const categories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend" },
  { key: "tool" as const, label: "Tools" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading label="Skills" title="技術スタック" />

        <div className="mx-auto max-w-3xl space-y-10">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter(
              (s) => s.category === category.key
            );
            if (categorySkills.length === 0) return null;

            return (
              <FadeIn key={category.key} delay={catIndex * 0.15} direction="up">
                <div>
                  <h3 className="mb-4 text-sm font-medium tracking-widest uppercase text-text-secondary">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-full bg-bg/40 backdrop-blur-md border border-border/60 px-4 py-2 text-sm font-medium text-text-primary transition-all hover:shadow-sm"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
