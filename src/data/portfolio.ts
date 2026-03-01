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
  email?: string;
  github: string;
  twitter?: string;
};

// ─── Data ────────────────────────────────────────────

export const profile: Profile = {
  name: "uta_a",
  tagline: "フロントエンドを中心に学習中の大学生",
  bio: "大学でプログラミングを学びながら、Webフロントエンド技術を中心にスキルを磨いています。React / Next.js を使ったモダンなWebアプリケーション開発に興味があり、API連携やレスポンシブデザインの実装にも取り組んでいます。",
  github: "https://github.com/uta-a",
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

// プロジェクトを追加するときはこの配列にオブジェクトを追加するだけでOK
// 例:
// {
//   title: "アプリ名",
//   description: "説明文",
//   gradient: "from-sky-400 via-blue-500 to-indigo-600",
//   techStack: ["React", "TypeScript"],
//   githubUrl: "https://github.com/uta-a/...",
//   liveUrl: "https://...",
// },
export const projects: Project[] = [
  {
    title: "請求書カード払いナビ",
    description: "請求書カード払いサービスの比較ランキングサイト",
    gradient: "from-sky-400 via-blue-500 to-indigo-600",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://invoice-card-payment-navi.vercel.app/",
  },
  {
    title: "ChoiceAssist コーポレートサイト",
    description: "ChoiceAssist株式会社のコーポレートサイト",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    techStack: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://choiceassist-corporate-site.vercel.app/",
  },
];

export const navLinks = [
  { label: "About", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;
