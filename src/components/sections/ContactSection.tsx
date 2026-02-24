"use client";

import { motion } from "motion/react";
import { profile } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const socialLinks = [
  {
    label: "GitHub",
    href: profile.github,
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  ...(profile.twitter
    ? [
        {
          label: "X (Twitter)",
          href: profile.twitter,
          icon: (
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          ),
        },
      ]
    : []),
  ...(profile.email
    ? [
        {
          label: "Email",
          href: `mailto:${profile.email}`,
          icon: (
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          ),
        },
      ]
    : []),
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function ContactSection() {
  return (
    <section id="contact" className="relative bg-slate-50/50 py-24 sm:py-32 overflow-hidden">
      {/* Top separator */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-violet-200/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-sky-100/30 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 md:px-8 relative">
        <SectionHeading label="Contact" title="お問い合わせ" />

        <FadeIn direction="up">
          <div className="mx-auto max-w-4xl">
            {/* 2-column layout on desktop */}
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              {/* Left: message */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  一緒に何か
                  <br />
                  <span className="bg-gradient-to-r from-accent to-blue-400 bg-clip-text text-transparent">
                    つくりませんか？
                  </span>
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-500">
                  お仕事のご相談やお問い合わせなど、
                  <br className="hidden sm:block" />
                  お気軽にご連絡ください。
                </p>
                {profile.email && (
                  <p className="mt-4 font-mono text-xs text-slate-400">
                    {profile.email}
                  </p>
                )}
              </div>

              {/* Right: social + CTA */}
              <div className="flex flex-col items-center md:items-end gap-8">
                {/* Social icons with staggered animation */}
                <motion.div
                  className="flex items-center gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={
                        link.href.startsWith("mailto")
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 transition-colors duration-200 hover:border-accent hover:text-accent hover:shadow-lg hover:shadow-accent/10"
                      aria-label={link.label}
                      variants={itemVariants}
                      whileHover={{ scale: 1.15, rotate: 8, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </motion.div>

                {profile.email && (
                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-accent/20 blur-md animate-pulse-glow" />
                    <a
                      href={`mailto:${profile.email}`}
                      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-accent px-8 py-3.5 font-mono text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-accent/25 hover:-translate-y-0.5"
                    >
                      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                      <span className="relative">メールを送る</span>
                      <svg
                        className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
