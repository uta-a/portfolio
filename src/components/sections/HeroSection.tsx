"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { TypingText, SplitText, GlitchText } from "@/components/ui/TextAnimations";
import { useSimpleMode } from "@/providers/SimpleModeProvider";

/* ── Decorative code snippet (dark terminal) ─────── */

function CodeDecoration() {
  const { simpleMode } = useSimpleMode();

  const Wrapper = simpleMode ? "div" : motion.div;
  const outerProps = simpleMode
    ? { className: "hidden lg:block" }
    : {
        initial: { opacity: 0, x: 40 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, delay: 1.2 },
        className: "hidden lg:block",
      };

  const innerProps = simpleMode
    ? { className: "relative" }
    : {
        animate: { y: [0, -6, 0] },
        transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        className: "relative",
      };

  const InnerWrapper = simpleMode ? "div" : motion.div;

  const floatingCardProps = simpleMode
    ? {
        className:
          "absolute -bottom-12 -left-8 w-[200px] overflow-hidden rounded-lg border border-white/10 bg-surface p-3 shadow-xl shadow-black/20 backdrop-blur-xl",
      }
    : {
        animate: { y: [0, 8, 0] },
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        },
        className:
          "absolute -bottom-12 -left-8 w-[200px] overflow-hidden rounded-lg border border-white/10 bg-surface p-3 shadow-xl shadow-black/20 backdrop-blur-xl",
      };

  const FloatingCard = simpleMode ? "div" : motion.div;

  return (
    <Wrapper {...(outerProps as Record<string, unknown>)}>
      <InnerWrapper {...(innerProps as Record<string, unknown>)}>
        <div className="w-[340px] overflow-hidden rounded-xl border border-white/10 bg-surface shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 font-mono text-[10px] text-slate-400">
              profile.ts
            </span>
          </div>

          <div className="px-4 py-4 font-mono text-xs leading-6">
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-text-primary">developer</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-accent">{`"${profile.name}"`}</span>
              <span className="text-slate-400">;</span>
            </div>
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-text-primary">stack</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-slate-400">[</span>
            </div>
            <div className="pl-4">
              <span className="text-emerald-400">{`"React"`}</span>
              <span className="text-slate-400">,</span>{" "}
              <span className="text-emerald-400">{`"Next.js"`}</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4">
              <span className="text-emerald-400">{`"TypeScript"`}</span>
              <span className="text-slate-400">,</span>{" "}
              <span className="text-emerald-400">{`"Tailwind"`}</span>
            </div>
            <div>
              <span className="text-slate-400">];</span>
            </div>
            <div className="mt-2">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-text-primary">status</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-emerald-400">{`"learning"`}</span>
              <span className="text-slate-400">;</span>
            </div>
          </div>
        </div>

        <FloatingCard {...(floatingCardProps as Record<string, unknown>)}>
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10">
              <svg
                className="h-4 w-4 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p className="font-mono text-[10px] text-slate-400">commits</p>
              <p className="font-mono text-sm font-semibold text-text-primary">
                365+
              </p>
            </div>
          </div>
        </FloatingCard>
      </InnerWrapper>
    </Wrapper>
  );
}

/* ── Main Hero ─────────────────────────────────────── */

export function HeroSection() {
  const [bootStep, setBootStep] = useState(0);
  const { simpleMode } = useSimpleMode();

  useEffect(() => {
    if (simpleMode) {
      setBootStep(10);
    }
  }, [simpleMode]);

  const advanceBoot = useCallback(() => {
    setBootStep((s) => s + 1);
  }, []);

  const show = simpleMode || bootStep >= 1;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Dark scrim for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg/80 via-bg/60 to-bg/30" />

      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-32 md:px-8">
        <div className="flex items-center justify-between gap-12">
          {/* Left column - Content */}
          <div className="max-w-2xl">
            {/* Terminal boot line */}
            {simpleMode ? (
              <div className="mb-6 font-mono text-sm text-text-secondary">
                <TypingText
                  text="> initializing..."
                  speed={50}
                  delay={300}
                  cursor
                  onComplete={advanceBoot}
                />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-6 font-mono text-sm text-text-secondary"
              >
                <TypingText
                  text="> initializing..."
                  speed={50}
                  delay={300}
                  cursor
                  onComplete={advanceBoot}
                />
              </motion.div>
            )}

            {/* Badge */}
            {simpleMode ? (
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-1.5 font-mono text-xs text-text-secondary backdrop-blur-sm">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Open to opportunities
                </span>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-1.5 font-mono text-xs text-text-secondary backdrop-blur-sm">
                  <motion.span
                    className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(52,211,153,0.4)",
                        "0 0 0 6px rgba(52,211,153,0)",
                        "0 0 0 0 rgba(52,211,153,0)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  Open to opportunities
                </span>
              </motion.div>
            )}

            {/* Name */}
            {simpleMode ? (
              <h1 className="mt-8 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
                <SplitText text={profile.name} delay={0.5} />
                <GlitchText text="." className="inline-block text-accent" />
              </h1>
            ) : (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={show ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="mt-8 text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl"
              >
                <SplitText text={profile.name} delay={0.5} />
                <GlitchText text="." className="inline-block text-accent" />
              </motion.h1>
            )}

            {/* Decorative line */}
            {simpleMode ? (
              <div className="mt-3 h-[2px] w-20 origin-left bg-gradient-to-r from-accent to-accent-secondary" />
            ) : (
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={show ? { scaleX: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="mt-3 h-[2px] w-20 origin-left bg-gradient-to-r from-accent to-accent-secondary"
              />
            )}

            {/* Tagline */}
            {simpleMode ? (
              <p className="mt-4 text-xl text-text-secondary sm:text-2xl">
                {profile.tagline}
              </p>
            ) : (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 1.2 }}
                className="mt-4 text-xl text-text-secondary sm:text-2xl"
              >
                {profile.tagline}
              </motion.p>
            )}

            {/* Bio - typing */}
            {simpleMode ? (
              <div className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                <TypingText text={profile.bio} delay={1800} speed={20} cursor />
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={show ? { opacity: 1 } : {}}
                transition={{ duration: 0.3, delay: 1.5 }}
                className="mt-6 max-w-xl text-base leading-relaxed text-slate-300"
              >
                <TypingText text={profile.bio} delay={1800} speed={20} cursor />
              </motion.div>
            )}

            {/* CTAs */}
            {simpleMode ? (
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-mono text-sm text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:shadow-xl hover:shadow-accent/30"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                  <svg
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-6 py-3 font-mono text-sm text-text-primary backdrop-blur-sm transition-all duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
                >
                  Contact
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={show ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 2.0 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <motion.a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-mono text-sm text-white shadow-lg shadow-accent/20 transition-all duration-200 hover:shadow-xl hover:shadow-accent/30"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                  <svg
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-surface px-6 py-3 font-mono text-sm text-text-primary backdrop-blur-sm transition-all duration-200 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/10"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.a>
              </motion.div>
            )}
          </div>

          {/* Right column - Code decoration */}
          <CodeDecoration />
        </div>

        {/* Scroll indicator */}
        {simpleMode ? (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent/50">
                Scroll
              </span>
              <div className="h-8 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
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
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent/50">
                Scroll
              </span>
              <div className="h-8 w-[1px] bg-gradient-to-b from-accent/50 to-transparent" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
