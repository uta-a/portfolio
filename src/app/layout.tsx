import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import "./editorial.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});


export const metadata: Metadata = {
  title: "uta | Web Developer",
  description:
    "フロントエンド開発を中心に、Webサイト制作・Webアプリ開発を行うフリーランス開発者のポートフォリオ。React / Next.js / TypeScript が得意です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={notoSansJP.variable}
    >
      <body>
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
