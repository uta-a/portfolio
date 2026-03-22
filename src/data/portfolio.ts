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
  {
    title: "Music Dashboard",
    description:
      "音楽ストリーミング分析ダッシュボード。アーティスト・アルバム・トラックの再生データを可視化。",
    category: "Webアプリ",
    techStack: ["Next.js", "React", "TypeScript", "CSS Modules", "motion"],
    thumbnail:
      "https://opengraph.githubassets.com/6a140cbd4a561ea2b9c81982e4219aa42f7e11c9ab6a2a4f71369293ec5b67c2/uta-a/music-dashboard",
    githubUrl: "https://github.com/uta-a/music-dashboard",
  },
  {
    title: "Portfolio Brutalist",
    description:
      "ブルータリストデザインのポートフォリオサイト。CSSカスタムプロパティとIntersection Observerでスクロールアニメーションを実装。",
    category: "Webサイト",
    techStack: ["HTML", "CSS", "JavaScript"],
    thumbnail:
      "https://opengraph.githubassets.com/a836b975f90f8bd17533818b226172b7aa98d714778bdd45d756c33e83a3eebc/uta-a/portfolio-brutalist",
    githubUrl: "https://github.com/uta-a/portfolio-brutalist",
  },
  {
    title: "Photographer Portfolio",
    description:
      "都市建築写真家のポートフォリオ。Sticky Scroll Galleryで没入感のある写真閲覧体験を実現。",
    category: "Webサイト",
    techStack: ["HTML", "CSS", "JavaScript"],
    thumbnail:
      "https://opengraph.githubassets.com/3379b5e109f115575c5df95a63b20447613d97724b737c43d0edf2713f948d82/uta-a/photographer-portfolio",
    githubUrl: "https://github.com/uta-a/photographer-portfolio",
  },
  {
    title: "REPOUtility",
    description:
      "R.E.P.O.のBepInEx MOD開発を支援するユーティリティライブラリ。プレイヤー操作・敵管理・アイテム制御等を提供。",
    category: "ライブラリ",
    techStack: ["C#", ".NET", "BepInEx"],
    thumbnail:
      "https://opengraph.githubassets.com/cf8ac8ec8f7623deb839fe6bf8ad8c4f61f277fe269b3088706df6da7412fc12/uta-a/repo-utility",
    githubUrl: "https://github.com/uta-a/repo-utility",
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
    { label: "制作実績", value: 7, suffix: "件" },
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
