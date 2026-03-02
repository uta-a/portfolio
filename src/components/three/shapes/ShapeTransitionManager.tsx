"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { SHAPE_CONFIGS } from "./ShapeDefinitions";
import { WireframeShape } from "./WireframeShape";
import type { SectionScrollState } from "../useSectionScroll";

type ShapeTransitionManagerProps = {
  sectionStateRef: React.RefObject<SectionScrollState>;
  mouseRef: React.RefObject<{ x: number; y: number }>;
  isMobile: boolean;
};

export function ShapeTransitionManager({
  sectionStateRef,
  mouseRef,
  isMobile,
}: ShapeTransitionManagerProps) {
  const opacityRefs = useRef(
    SHAPE_CONFIGS.map((_, i) => ({ current: i === 0 ? 1 : 0 }))
  ).current;

  useFrame(() => {
    const { currentIndex, nextIndex, currentOpacity, nextOpacity } =
      sectionStateRef.current;

    for (let i = 0; i < SHAPE_CONFIGS.length; i++) {
      if (i === currentIndex) {
        opacityRefs[i].current = currentOpacity;
      } else if (i === nextIndex) {
        opacityRefs[i].current = nextOpacity;
      } else {
        opacityRefs[i].current = 0;
      }
    }
  });

  return (
    <>
      {SHAPE_CONFIGS.map((config, index) => (
        <WireframeShape
          key={index}
          config={config}
          opacityRef={opacityRefs[index]}
          mouseRef={mouseRef}
          isMobile={isMobile}
        />
      ))}
    </>
  );
}
