// ─── Types ───────────────────────────────────────────

export type Skill = {
  name: string;
  category: "frontend" | "backend" | "tool";
};

export type Project = {
  title: string;
  description: string;
  techStack: string[];
  category?: string;
  thumbnail?: string;
  githubUrl?: string;
  liveUrl?: string;
};

export type Profile = {
  name: string;
  subtitle: string;
  bio: string;
  available: boolean;
  email?: string;
  github: string;
  twitter?: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
  features: string[];
};

export type AboutInfo = {
  heading: string;
  description: string;
  highlights: { label: string; value: number; suffix: string }[];
};

// ─── Data ────────────────────────────────────────────

export const profile: Profile = {
  name: "uta_a",
  subtitle: "Web Developer",
  bio: "フロントエンド開発を中心に、React / Next.js を使ったモダンなWebサイト・Webアプリケーションの制作を行っています。レスポンシブ対応、パフォーマンス最適化、アクセシビリティを意識した実装が得意です。",
  available: true,
  github: "https://github.com/uta-a",
};

export const skills: Skill[] = [
  { name: "HTML / CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "REST API", category: "backend" },
  { name: "Git / GitHub", category: "tool" },
];

export const projects: Project[] = [
  {
    title: "すかいらーく給料計算アプリ",
    description:
      "「らくしふ」シフト管理サイトから確定シフトデータを取得し、給料を自動計算するWebアプリ。月間シフト一覧・深夜割増計算・交通費設定に対応。",
    category: "Webアプリ",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite", "Vercel Serverless Functions"],
    thumbnail: "https://opengraph.githubassets.com/4646d6309d4041c4966dc8df2892b57f582d3e6b9c3c2438fcab87f2508d87a4/uta-a/skylark-salary-detail",
    liveUrl: "https://skylark-salary-detail.vercel.app",
    githubUrl: "https://github.com/uta-a/skylark-salary-detail",
  },
  {
    title: "請求書カード払いナビ",
    description: "請求書カード払いサービスの比較ランキングサイト。ユーザーが最適なサービスを選べるよう、手数料・特徴を一覧比較できる構成に。",
    category: "Webサイト",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    thumbnail: "https://opengraph.githubassets.com/1ec87b05f1ba26fd0841ba15b8e60b36b8a4d4cc2686a46c1a4c77bf6a169e93/uta-a/invoice-card-payment-navi",
    liveUrl: "https://invoice-card-payment-navi.vercel.app/",
  },
  {
    title: "ChoiceAssist コーポレートサイト",
    description: "ChoiceAssist株式会社のコーポレートサイト。企業イメージに合わせたデザインとレスポンシブ対応を実装。",
    category: "コーポレートサイト",
    techStack: ["HTML", "CSS", "JavaScript"],
    thumbnail: "https://opengraph.githubassets.com/e516e7ac7c2a42854d846f50edf8f211e16bfecb723395ba3adae169f94409fb/uta-a/choiceassist-corporate-site",
    liveUrl: "https://choiceassist-corporate-site.vercel.app/",
  },
];

export const services: Service[] = [
  {
    title: "Webサイト制作",
    icon: "bx bx-globe",
    description: "コーポレートサイトやLPなど、目的に合わせたWebサイトを制作します。",
    features: ["レスポンシブ対応", "SEO最適化", "高速表示"],
  },
  {
    title: "Webアプリ開発",
    icon: "bx bx-code-block",
    description: "React / Next.js を使った、インタラクティブなWebアプリケーションを開発します。",
    features: ["SPA / SSR対応", "API連携", "モダンUI"],
  },
  {
    title: "UI実装",
    icon: "bx bx-palette",
    description: "デザインカンプからの正確なUI実装。アニメーションやインタラクションも対応します。",
    features: ["Figmaからの実装", "アニメーション", "コンポーネント設計"],
  },
  {
    title: "コーディング代行",
    icon: "bx bx-terminal",
    description: "HTML/CSS/JSのコーディング作業を代行します。既存サイトの修正・改修にも対応。",
    features: ["既存サイト改修", "WordPress対応", "保守運用"],
  },
];

export const aboutInfo: AboutInfo = {
  heading: "確かな技術で、期待を超える成果を",
  description:
    "フロントエンド開発を中心に、クリーンで保守性の高いコードを書くことを心がけています。React / Next.js / TypeScript を主な技術スタックとし、レスポンシブデザイン、パフォーマンス最適化、アクセシビリティを意識した制作を得意としています。\n\nクライアントの要望を丁寧にヒアリングし、最適な技術選定と実装で期待以上の成果物をお届けします。納期厳守、丁寧なコミュニケーションをお約束します。",
  highlights: [
    { label: "制作実績", value: 3, suffix: "件" },
    { label: "使用技術", value: 8, suffix: "種類" },
    { label: "対応可能", value: 24, suffix: "h以内返信" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;
