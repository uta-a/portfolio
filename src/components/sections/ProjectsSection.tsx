"use client";

import { useRef } from "react";
import Image from "next/image";
import { projects, type Project } from "@/data/portfolio";

const featured = projects[1];
const selected = [projects[2], projects[0]];
const remaining = projects.filter((project) => project !== featured && !selected.includes(project));

function ProjectImage({ project, featured: large = false }: { project: Project; featured?: boolean }) {
  const source = project.thumbnail;
  return source ? (
    <div className={`project-visual${large ? " featured-visual" : ""}`}>
      <Image src={source} alt={`${project.title} のプレビュー`} fill sizes={large ? "(max-width: 600px) 90vw, 58vw" : "(max-width: 600px) 40vw, 30vw"} />
    </div>
  ) : null;
}

function Tags({ project }: { project: Project }) {
  return <ul className="tech-tags" aria-label="使用技術">{project.techStack.map((tech) => <li key={tech}>{tech}</li>)}</ul>;
}

function ProjectLinks({ project }: { project: Project }) {
  return <div className="project-links">{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Visit site <span aria-hidden="true">↗</span></a>}{project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>}</div>;
}

function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card"><ProjectImage project={project} /><div className="project-card-copy"><h3>{project.title}</h3><p>{project.description}</p><Tags project={project} /><ProjectLinks project={project} /></div></article>;
}

export function ProjectsSection() {
  const allProjectsRef = useRef<HTMLDetailsElement>(null);
  return (
    <section id="projects" className="projects-section site-container" aria-labelledby="projects-title">
      <div className="section-heading"><div><span className="section-index" aria-hidden="true">01</span><h2 id="projects-title">Featured Projects</h2></div><a href="#all-projects" className="text-link view-all" onClick={() => { if (allProjectsRef.current) allProjectsRef.current.open = true; }}>View all <span aria-hidden="true">↓</span></a></div>
      <article className="featured-project"><ProjectImage project={featured} featured /><div className="featured-copy"><p className="project-category">{featured.category}</p><h3>{featured.title}</h3><p>比較をわかりやすく。<br />最適な選択を、もっとスムーズに。</p><Tags project={featured} /><ProjectLinks project={featured} /></div></article>
      <div className="project-grid project-grid-selected">{selected.map((project) => <ProjectCard project={project} key={project.title} />)}</div>
      <details ref={allProjectsRef} id="all-projects" className="more-projects"><summary>All projects <span>すべての制作実績</span><span aria-hidden="true">＋</span></summary><div className="project-grid">{remaining.map((project) => <ProjectCard project={project} key={project.title} />)}</div></details>
    </section>
  );
}
