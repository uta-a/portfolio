"use client";

import { services } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading label="Services" title="提供サービス" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1} direction="up">
              <TiltCard>
                <div className="card group p-6 h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-bg text-xl text-text-primary">
                    <i className={service.icon} />
                  </div>

                  <h3 className="text-base font-bold tracking-tight text-text-primary">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-xs text-text-secondary"
                      >
                        <span className="inline-block h-1 w-1 rounded-full bg-text-secondary/40" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
