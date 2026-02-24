"use client";

import { motion } from "motion/react";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

function FloatingShapes() {
  return (
    <>
      {/* Floating circle */}
      <motion.div
        className="absolute right-6 top-8 h-16 w-16 rounded-full border border-white/20"
        animate={{ y: [0, -8, 0], rotate: [0, 90, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Floating square */}
      <motion.div
        className="absolute bottom-8 left-8 h-10 w-10 rounded-md border border-white/15 rotate-12"
        animate={{ y: [0, 6, 0], rotate: [12, -12, 12] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      {/* Small dot */}
      <motion.div
        className="absolute right-1/3 bottom-6 h-3 w-3 rounded-full bg-white/20"
        animate={{ y: [0, -6, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading label="Projects" title="制作物" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={index * 0.12} direction="up">
              <div className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-slate-300/40 hover:border-slate-300">
                {/* Gradient thumbnail area */}
                <div className="relative h-44 w-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-110`}
                  />
                  {/* Grid overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                  {/* Floating decorative shapes */}
                  <FloatingShapes />
                  {/* Small project number top-left */}
                  <span className="relative z-10 inline-block p-6 font-mono text-sm font-medium text-white/90">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* Large decorative project number */}
                  <span className="absolute -bottom-3 right-4 font-mono text-7xl font-black text-white/10 leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-lg font-bold tracking-tight text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 font-mono text-[11px] text-slate-600 transition-colors duration-200 hover:bg-accent/10 hover:text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 transition-colors hover:text-accent"
                      >
                        <svg
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:-rotate-12"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="group/link inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 transition-colors hover:text-accent"
                      >
                        <svg
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
