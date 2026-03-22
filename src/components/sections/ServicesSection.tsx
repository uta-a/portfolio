"use client";

import { motion, useReducedMotion } from "motion/react";
import { services } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionBlobs } from "@/components/ui/SectionBlobs";
import { TiltCard } from "@/components/ui/TiltCard";

// Fan-out initial positions for 4 cards
const fanPositions = [
  { x: -40, rotate: -8 },
  { x: -12, rotate: -3 },
  { x: 12, rotate: 3 },
  { x: 40, rotate: 8 },
];

export function ServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <SectionBlobs variant="services" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading label="Services" title="提供サービス" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const fan = fanPositions[index] ?? { x: 0, rotate: 0 };

            return (
              <motion.div
                key={service.title}
                initial={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, y: 100, x: fan.x, rotate: fan.rotate, scale: 0.9 }
                }
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1 }
                    : { opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : {
                        type: "spring",
                        stiffness: 120,
                        damping: 16,
                        delay: index * 0.08,
                      }
                }
              >
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
