"use client";

import { aboutInfo, skills } from "@/data/portfolio";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerGroup } from "@/components/ui/StaggerGroup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBlobs } from "@/components/ui/SectionBlobs";
import { CountUp } from "@/components/ui/TextAnimations";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <SectionBlobs variant="about" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading label="About" title="私について" />

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
            {/* Left: text — slides in from left */}
            <Reveal preset="slide-left">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                  {aboutInfo.heading}
                </h3>
                <div className="mt-6 space-y-4">
                  {aboutInfo.description.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-sm leading-relaxed text-text-secondary"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right: highlights — stagger from right */}
            <StaggerGroup
              preset="slide-right"
              staggerDelay={0.08}
              className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-1"
            >
              {aboutInfo.highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="card p-6 text-center md:text-left"
                >
                  <p className="text-3xl font-bold text-text-primary">
                    <CountUp
                      end={highlight.value}
                      suffix={highlight.suffix}
                    />
                  </p>
                  <p className="mt-1 text-sm text-text-secondary">
                    {highlight.label}
                  </p>
                </div>
              ))}
            </StaggerGroup>
          </div>

          {/* Skills — chip burst */}
          <Reveal preset="rise" delay={0.2} className="mt-16">
            <h3 className="mb-4 text-sm font-medium tracking-widest uppercase text-text-secondary">
              Tech Stack
            </h3>
          </Reveal>
          <StaggerGroup
            preset="scale-pop"
            staggerDelay={0.04}
            className="flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <span
                key={skill.name}
                className="rounded-full bg-bg/40 backdrop-blur-md border border-border/60 px-4 py-2 text-sm font-medium text-text-primary transition-all hover:shadow-sm"
              >
                {skill.name}
              </span>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
