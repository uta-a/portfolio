# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
npm run dev      # 開発サーバー起動 (http://localhost:3000)
npm run build    # プロダクションビルド
npm run start    # プロダクションサーバー起動
npm run lint     # ESLint実行
```

## 技術スタック

- Next.js 16 (App Router) + React 19 + TypeScript (strict mode)
- Tailwind CSS v4 (@tailwindcss/postcss経由、PostCSSプラグインとして使用)
- Three.js (@react-three/fiber, drei) でヒーローの3Dガラス球体
- Motion (Framer Motion) でアニメーション
- Lenis でスムーズスクロール
- Boxicons（CDN経由アイコンフォント）

## アーキテクチャ

シングルページポートフォリオサイト（フリーランス案件獲得向け）。ライトテーマ・ミニマルデザイン。ルーティングはアンカーベース（`#hero`, `#services`, `#projects`, `#skills`, `#about`, `#contact`）。

### パスエイリアス

`@/*` → `./src/*`

### ディレクトリ構成

- `src/app/` — Next.js App Router（layout.tsx, page.tsx, globals.css）
- `src/components/layout/` — Header, Footer
- `src/components/sections/` — 各セクション（Hero, Services, Projects, Skills, About, Contact）
- `src/components/three/` — Three.js関連（MorphingSphere, ThreeBackground, ThreeBackgroundLoader, useScrollProgress）
- `src/components/ui/` — 再利用可能UIコンポーネント（FadeIn, TextAnimations, TiltCard, SectionHeading）
- `src/data/portfolio.ts` — 全コンテンツデータ（プロフィール、スキル、プロジェクト、サービス、About、ナビ）
- `src/providers/` — SmoothScrollProvider (Lenis)

### データ駆動設計

ポートフォリオの内容（プロフィール、スキル、プロジェクト、サービス、About情報）は全て `src/data/portfolio.ts` に集約。コンテンツ更新はこのファイルのみで完結する。

### クライアントコンポーネント

インタラクティブなセクションは全て `"use client"` を使用。ThreeBackgroundは `next/dynamic` でSSR無効化して読み込み。

### デザイントークン

`src/app/globals.css` に Tailwind v4 の `@theme inline` でカラー・フォント等を定義:
- テーマ: ライトテーマ
- アクセントカラー: `--color-accent` (#18181B), `--color-accent-secondary` (#A1A1AA)
- 背景: `--color-bg` (#FAFAF9), `--color-surface` (#FFFFFF)
- テキスト: `--color-text-primary` (#1C1917), `--color-text-secondary` (#78716C)
- ボーダー: `--color-border` (#E7E5E4)
- フォント: Sora + Noto Sans JP (本文), JetBrains Mono (コード)
- カスタムアニメーション: shimmer, float, draw-line, spin-slow
- カードスタイル: `.card` (白背景 + ボーダー + 微細シャドウ)

### 3D表現

ヒーローセクションにガラス風の球体（MeshDistortMaterial）を表示。スクロール連動でdistort量・回転速度が変化し、マウス追従で回転。スクロールに応じてopacityでフェードアウト。

### モバイル最適化

Three.jsコンポーネントはモバイルでポリゴン数削減。レスポンシブはTailwindのブレークポイント（sm, md, lg）で対応。
