"use client";

import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 md:px-8">
        {/* Content - left on desktop, centered on mobile */}
        <div className="max-w-xl text-center lg:text-left">
          <FadeIn delay={0.1}>
            {profile.available && (
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-xs font-medium text-text-secondary">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
                お仕事受付中
              </span>
            )}
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg font-medium text-text-secondary">
              {profile.subtitle}
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-6 text-lg leading-relaxed text-text-secondary sm:text-xl">
              {profile.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-accent/90"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                お仕事の相談をする
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-white px-6 py-3 text-sm font-medium text-text-primary transition-all duration-200 hover:bg-bg"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
              >
                制作実績を見る
              </motion.a>
            </div>
          </FadeIn>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-text-secondary/50">
              Scroll
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-text-secondary/50 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
