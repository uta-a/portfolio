"use client";

import { Suspense, useRef, useEffect, useSyncExternalStore } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { ShapeTransitionManager } from "./shapes/ShapeTransitionManager";
import { useSectionScroll } from "./useSectionScroll";

function checkWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
    return !!gl;
  } catch {
    return false;
  }
}

function subscribeNoop() {
  return () => {};
}

function getIsMobile() {
  return typeof window !== "undefined" ? window.innerWidth < 768 : false;
}

function getWebGLSupported() {
  return typeof window !== "undefined" ? checkWebGL() : true;
}

type SceneProps = {
  isMobile: boolean;
  sectionStateRef: ReturnType<typeof useSectionScroll>;
};

function Scene({ isMobile, sectionStateRef }: SceneProps) {
  const mouseRef = useRef({ x: 0, y: 0 });
  const { invalidate } = useThree();

  useEffect(() => {
    invalidate();
  }, [invalidate]);

  // Re-render on scroll so shape transitions update
  useEffect(() => {
    const handleScroll = () => invalidate();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [invalidate]);

  useEffect(() => {
    if (isMobile) return;
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
      invalidate();
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, invalidate]);

  return (
    <ShapeTransitionManager
      sectionStateRef={sectionStateRef}
      mouseRef={mouseRef}
      isMobile={isMobile}
    />
  );
}

export default function ThreeBackground() {
  const webglSupported = useSyncExternalStore(subscribeNoop, getWebGLSupported, () => true);
  const isMobile = useSyncExternalStore(subscribeNoop, getIsMobile, () => false);
  const sectionStateRef = useSectionScroll();

  if (!webglSupported) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none h-screen w-full lg:w-1/2 lg:left-auto lg:right-0">
      <Canvas
        frameloop="demand"
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={isMobile ? 1 : Math.min(window.devicePixelRatio, 2)}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <Scene isMobile={isMobile} sectionStateRef={sectionStateRef} />
        </Suspense>
      </Canvas>
    </div>
  );
}
