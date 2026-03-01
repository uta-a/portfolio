import type { Metadata } from "next";
import { Sora, Noto_Sans_JP, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { SimpleModeProvider } from "@/providers/SimpleModeProvider";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "uta_a | Portfolio",
  description:
    "プログラミング学習中の大学生 uta_a のポートフォリオサイト。フロントエンド開発を中心に学習中。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${sora.variable} ${notoSansJP.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <SimpleModeProvider>
          <SmoothScrollProvider>
            <Header />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </SimpleModeProvider>
      </body>
    </html>
  );
}
