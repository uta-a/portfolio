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

制作実績は `projects` 配列で管理し、先頭のDaylineをメインに掲載しています。DaylineはAndroid / iOS向けの個人用タスク・予定管理アプリで、自作MCPサーバーによるClaude / ChatGPT連携を紹介し、公開中の紹介ページ `https://dayline-1je.pages.dev/` へリンクします。アプリの一般配布はしていません。2件目は寺院・占いサービスのWebサイトリニューアル提案デモで、コンペ用に制作したことを明記し、`https://ryumon-heritage-demo.vercel.app/` へリンクします。実績がない場合は「現在、掲載中の制作実績はありません。」と表示し、カード・画像・外部リンク・View allは表示しません。

## 2026-10 リニューアル

参照画像に合わせ、白基調のエディトリアル構成へ変更。ヒーロー、Projects、About、Tech Stack、濃色フッターで構成しています。実績を追加すると、配列順に主役1件、カード2件、残りは開閉式で表示します。プロフィールは開閉式で、Servicesは常時表示です。モバイルナビゲーションはEscapeキーで閉じられます。

`public/images/hero-ribbon.webp` と `about-architecture.webp` は生成画像です。`project-dayline.png` はDaylineプロジェクトの既存のアプリ紹介画像、`project-ryumon.png` は公開中のデモサイトを撮影したスクリーンショットです。旧実績6件の画像は削除しています。

連絡先はプロフィールに設定されているものだけを表示します。メールアドレスが未設定のため、メールフォームはありません。

旧3D背景・カスタムカーソル・スムーズスクロールプロバイダーは新ページでは読み込みません。既存ファイルは維持しています。全体lintには、旧 `src/components/three/shapes/ShapeTransitionManager.tsx` の `react-hooks/refs` エラーが残っています。
