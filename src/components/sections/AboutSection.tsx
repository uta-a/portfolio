import Image from "next/image";
import { profile, skills } from "@/data/portfolio";

const groups = [
  { key: "frontend", title: "Frontend" },
  { key: "backend", title: "Backend" },
  { key: "tool", title: "Tools" },
];
const marks: Record<string, string> = { "HTML / CSS": "</>", JavaScript: "JS", TypeScript: "TS", React: "⚛", "Next.js": "N", "Tailwind CSS": "≈", "REST API": "{ }", "Git / GitHub": "⑂" };

export function AboutSection() {
  return (
    <section id="about" className="about-section site-container" aria-labelledby="about-title">
      <div className="about-grid"><div className="about-copy"><span className="section-index" aria-hidden="true">02</span><h2 id="about-title">About</h2><h3>つくることで、<br />誰かの可能性を広げたい。</h3><p>フロントエンドを中心に、<br />Webを通じたプロダクト開発を行っています。<br />ユーザーにとって使いやすく、<br />長く育てられるものを目指します。</p><details className="about-details"><summary className="text-link">More about me <span aria-hidden="true">＋</span></summary><div><p>{profile.bio}</p><a className="text-link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a></div></details></div><figure className="about-image"><Image src="/images/about-architecture.webp" alt="光が差し込む白い階段と、規則的に並ぶコンクリートの手すり" fill sizes="(max-width: 600px) 90vw, 45vw" /></figure></div>
      <div className="stack-section"><h3>Tech Stack</h3><div className="stack-grid">{groups.map((group) => <div className="stack-group" key={group.key}><h4>{group.title}</h4><ul>{skills.filter((skill) => skill.category === group.key).map((skill) => <li key={skill.name}><span className={`skill-mark skill-${skill.name.toLowerCase().replace(/[^a-z]/g, "")}`} aria-hidden="true">{marks[skill.name]}</span><span>{skill.name}</span></li>)}</ul></div>)}</div></div>
    </section>
  );
}
