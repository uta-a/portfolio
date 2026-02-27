"use client";

import { Stars } from "@react-three/drei";

export function BackgroundStars() {
  return (
    <Stars
      radius={100}
      depth={60}
      count={2000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}
