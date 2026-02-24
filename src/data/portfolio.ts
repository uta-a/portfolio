// ─── Types ───────────────────────────────────────────

export type Skill = {
  name: string;
  icon: string;
  level: number; // 1-5
  category: "frontend" | "backend" | "tool";
};

export type Project = {
  title: string;
  description: string;
  gradient: string; // Tailwind gradient classes for placeholder
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
};

export type Profile = {
  name: string;
  tagline: string;
  bio: string;
  email: string;
  github: string;
  twitter: string;
};

// ─── Data ────────────────────────────────────────────

export const profile: Profile = {
  name: "uta_a",
  tagline: "フロントエンドを中心に学習中の大学生",
  bio: "大学でプログラミングを学びながら、Webフロントエンド技術を中心にスキルを磨いています。React / Next.js を使ったモダンなWebアプリケーション開発に興味があり、API連携やレスポンシブデザインの実装にも取り組んでいます。",
  email: "your-email@example.com",
  github: "https://github.com/uta_a",
  twitter: "https://x.com/uta_a",
};

export const skills: Skill[] = [
  { name: "HTML / CSS", icon: "🌐", level: 4, category: "frontend" },
  { name: "JavaScript", icon: "⚡", level: 3, category: "frontend" },
  { name: "TypeScript", icon: "🔷", level: 3, category: "frontend" },
  { name: "React", icon: "⚛️", level: 3, category: "frontend" },
  { name: "Next.js", icon: "▲", level: 2, category: "frontend" },
  { name: "Tailwind CSS", icon: "🎨", level: 3, category: "frontend" },
  { name: "REST API", icon: "🔗", level: 2, category: "backend" },
  { name: "Git / GitHub", icon: "🐙", level: 3, category: "tool" },
];

export const projects: Project[] = [
  {
    title: "天気予報アプリ",
    description:
      "OpenWeatherMap APIを使用した天気予報アプリ。現在地の天気と5日間予報を表示。レスポンシブ対応。",
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    techStack: ["React", "TypeScript", "Tailwind CSS", "OpenWeatherMap API"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "タスク管理アプリ",
    description:
      "ドラッグ&ドロップ対応のカンバンボード風タスク管理アプリ。ローカルストレージでデータ永続化。",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "ポートフォリオサイト",
    description:
      "このサイト自体。Next.js App Router + Tailwind CSS で構築し、Vercelにデプロイ。",
    gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

export const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
