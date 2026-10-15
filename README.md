# uta Portfolio

Next.js 16 / React 19 / TypeScript によるポートフォリオサイト。

## 開発

```bash
npm ci
npm run dev
```

http://localhost:3000 で表示します。

```bash
npm run build
npm run start
npm run lint
```

## 掲載内容とスタイル

- プロフィール・実績・技術・サービス: `src/data/portfolio.ts`
- ページ構成: `src/app/page.tsx`
- 各セクション: `src/components/sections/`
- ヘッダー・フッター: `src/components/layout/`
- 編集可能な配色・書体トークン: `tokens.css`
- 新レイアウト・レスポンシブスタイル: `src/app/editorial.css`
- 共通のTailwindエントリー: `src/app/globals.css`

## 2026-10 リニューアル

参照画像に合わせ、白基調のエディトリアル構成へ変更。ヒーロー、主役の実績1件と2件のカード、About、Tech Stack、濃色フッターで構成しています。追加の実績・プロフィールは開閉式で、Servicesは常時表示です。モバイルナビゲーションはEscapeキーで閉じられます。Music Dashboardは掲載していません。

`public/images/hero-ribbon.webp` と `about-architecture.webp` は生成画像です。`project-invoice.png`、`project-choiceassist.png`、`project-salary-screen.png` は実サイトのスクリーンショットです。給料計算アプリは認証前のログイン画面を掲載しています。それ以外の実績画像は既存のGitHubプレビューをローカルに保存しています。生成画像を実績画面として使用していません。

すかいらーく給料計算アプリは移転後の公開URL `https://rakushifu-detail.vercel.app` とGitHubリポジトリ `uta-a/rakushifu-detail` にリンクしています。連絡先はプロフィールに設定されているものだけを表示します。メールアドレスが未設定のため、メールフォームはありません。

旧3D背景・カスタムカーソル・スムーズスクロールプロバイダーは新ページでは読み込みません。既存ファイルは維持しています。全体lintには、旧 `src/components/three/shapes/ShapeTransitionManager.tsx` の `react-hooks/refs` エラーが残っています。
