"use client";

import dynamic from "next/dynamic";

const ThreeBackground = dynamic(
  () => import("@/components/three/ThreeBackground"),
  { ssr: false }
);

export function ThreeBackgroundLoader() {
  return <ThreeBackground />;
}
