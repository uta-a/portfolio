"use client";

import { aboutInfo } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CountUp } from "@/components/ui/TextAnimations";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading label="About" title="私について" />

        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-start">
            {/* Left: text */}
            <FadeIn direction="up">
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
            </FadeIn>

            {/* Right: highlights */}
            <FadeIn direction="up" delay={0.2}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-1">
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
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
