"use client";

import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { ParticleNetwork } from "@/components/ui/ParticleNetwork";

/* ── Floating geometric shapes ─────────────────────── */

function FloatingShapes() {
  return (
    <>
      {/* Triangle */}
      <motion.div
        className="pointer-events-none absolute right-[15%] top-[18%] hidden lg:block"
        animate={{
          y: [0, -12, 0],
          rotate: [0, 8, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L22 20H2L12 2Z"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/20"
          />
        </svg>
      </motion.div>

      {/* Circle */}
      <motion.div
        className="pointer-events-none absolute bottom-[30%] right-[10%] hidden lg:block"
        animate={{
          y: [0, 10, 0],
          x: [0, -6, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle
            cx="10"
            cy="10"
            r="8"
            stroke="currentColor"
            strokeWidth="1"
            className="text-slate-300/40"
          />
        </svg>
      </motion.div>

      {/* Square */}
      <motion.div
        className="pointer-events-none absolute bottom-[45%] right-[25%] hidden lg:block"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect
            x="2"
            y="2"
            width="12"
            height="12"
            stroke="currentColor"
            strokeWidth="1"
            className="text-accent/15"
          />
        </svg>
      </motion.div>
    </>
  );
}

/* ── Decorative code snippet ───────────────────────── */

function CodeDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="hidden lg:block"
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Terminal window */}
        <div className="w-[340px] overflow-hidden rounded-xl border border-slate-200/60 bg-white/40 shadow-lg shadow-slate-200/20 backdrop-blur-md">
          {/* Title bar */}
          <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300/60" />
            <span className="ml-2 font-mono text-[10px] text-slate-400">
              profile.ts
            </span>
          </div>

          {/* Code content */}
          <div className="px-4 py-4 font-mono text-xs leading-6">
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-slate-700">developer</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-accent">{`"${profile.name}"`}</span>
              <span className="text-slate-400">;</span>
            </div>
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-slate-700">stack</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-slate-400">[</span>
            </div>
            <div className="pl-4">
              <span className="text-emerald-500">{`"React"`}</span>
              <span className="text-slate-400">,</span>{" "}
              <span className="text-emerald-500">{`"Next.js"`}</span>
              <span className="text-slate-400">,</span>
            </div>
            <div className="pl-4">
              <span className="text-emerald-500">{`"TypeScript"`}</span>
              <span className="text-slate-400">,</span>{" "}
              <span className="text-emerald-500">{`"Tailwind"`}</span>
            </div>
            <div>
              <span className="text-slate-400">];</span>
            </div>
            <div className="mt-2">
              <span className="text-purple-400">const</span>{" "}
              <span className="text-slate-700">status</span>{" "}
              <span className="text-slate-400">=</span>{" "}
              <span className="text-emerald-500">{`"learning"`}</span>
              <span className="text-slate-400">;</span>{" "}
              <span className="text-slate-300">{"// 🚀"}</span>
            </div>
          </div>
        </div>

        {/* Secondary floating card */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-12 -left-8 w-[200px] overflow-hidden rounded-lg border border-slate-200/60 bg-white/50 p-3 shadow-md shadow-slate-200/10 backdrop-blur-md"
        >
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
              <p className="font-mono text-sm font-semibold text-slate-700">
                365+
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

/* ── Main Hero ─────────────────────────────────────── */

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Particle network */}
      <ParticleNetwork />

      {/* Animated gradient orb - top right */}
      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated gradient orb - bottom left */}
      <motion.div
        className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-400/5 blur-[80px]"
        animate={{
          x: [0, -20, 0],
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle accent orb - center */}
      <motion.div
        className="pointer-events-none absolute left-1/3 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-purple-300/3 blur-[80px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating geometric shapes */}
      <FloatingShapes />

      <div className="mx-auto w-full max-w-6xl px-6 py-32 md:px-8">
        <div className="flex items-center justify-between gap-12">
          {/* Left column - Content */}
          <div className="max-w-2xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-1.5 font-mono text-xs text-slate-500 backdrop-blur-sm">
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

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
            >
              {profile.name}
              <motion.span
                className="inline-block text-accent"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                .
              </motion.span>
            </motion.h1>

            {/* Decorative line under name */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
              className="mt-3 h-[2px] w-20 origin-left bg-gradient-to-r from-accent to-accent/0"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-4 text-xl text-slate-500 sm:text-2xl"
            >
              {profile.tagline}
            </motion.p>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400"
            >
              {profile.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-mono text-sm text-white shadow-lg shadow-slate-900/10 transition-colors duration-200 hover:bg-slate-800"
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
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 font-mono text-sm text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50"
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
          </div>

          {/* Right column - Code decoration (desktop only) */}
          <CodeDecoration />
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
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              Scroll
            </span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-slate-400 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
