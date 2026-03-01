"use client";

import dynamic from "next/dynamic";
import { useSimpleMode } from "@/providers/SimpleModeProvider";

const ThreeBackground = dynamic(
  () => import("@/components/three/ThreeBackground"),
  { ssr: false }
);

export function ThreeBackgroundLoader() {
  const { simpleMode } = useSimpleMode();

  if (simpleMode) {
    return (
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(0,212,255,0.05) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.04) 0%, transparent 50%), #050816",
        }}
      />
    );
  }

  return <ThreeBackground />;
}
