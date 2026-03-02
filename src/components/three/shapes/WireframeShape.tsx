"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ShapeConfig, generateFibonacciSphere } from "./ShapeDefinitions";

type WireframeShapeProps = {
  config: ShapeConfig;
  opacityRef: React.RefObject<number>;
  mouseRef: React.RefObject<{ x: number; y: number }>;
  isMobile: boolean;
};

export function WireframeShape({
  config,
  opacityRef,
  mouseRef,
  isMobile,
}: WireframeShapeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.LineSegments>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const lineMaterialRef = useRef<THREE.LineBasicMaterial>(null);
  const pointMaterialRef = useRef<THREE.PointsMaterial>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  const edgesGeometry = useMemo(() => {
    const geo = config.createGeometry();
    const edges = new THREE.EdgesGeometry(geo);
    geo.dispose();
    return edges;
  }, [config]);

  const particlePositions = useMemo(
    () => generateFibonacciSphere(config.particleCount, 1.6, 3.5),
    [config.particleCount]
  );

  useEffect(() => {
    return () => {
      edgesGeometry.dispose();
    };
  }, [edgesGeometry]);

  useFrame((state, delta) => {
    const opacity = opacityRef.current;

    // Skip all work when invisible
    if (opacity <= 0) {
      if (groupRef.current) groupRef.current.visible = false;
      return;
    }

    if (groupRef.current) groupRef.current.visible = true;

    // Keep rendering for auto-rotation while visible
    state.invalidate();

    // Update material opacity
    if (lineMaterialRef.current) {
      lineMaterialRef.current.opacity = 0.6 * opacity;
    }
    if (pointMaterialRef.current) {
      pointMaterialRef.current.opacity = 0.5 * opacity;
    }

    // Mouse parallax
    const mouse = mouseRef.current;
    targetRotation.current.x = mouse.y * config.parallaxFactor;
    targetRotation.current.y = mouse.x * config.parallaxFactor;

    // Wireframe rotation
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += delta * config.rotationSpeed.y;
      wireframeRef.current.rotation.x += delta * config.rotationSpeed.x;

      wireframeRef.current.rotation.x = THREE.MathUtils.lerp(
        wireframeRef.current.rotation.x,
        wireframeRef.current.rotation.x + targetRotation.current.x * 0.1,
        delta * 2
      );
      wireframeRef.current.rotation.y = THREE.MathUtils.lerp(
        wireframeRef.current.rotation.y,
        wireframeRef.current.rotation.y + targetRotation.current.y * 0.1,
        delta * 2
      );
    }

    // Particles: reverse rotation + half parallax
    if (particlesRef.current) {
      particlesRef.current.rotation.y -= delta * config.rotationSpeed.y * 0.5;
      particlesRef.current.rotation.x -= delta * config.rotationSpeed.x * 0.5;

      particlesRef.current.rotation.x = THREE.MathUtils.lerp(
        particlesRef.current.rotation.x,
        particlesRef.current.rotation.x + targetRotation.current.x * 0.05,
        delta * 2
      );
      particlesRef.current.rotation.y = THREE.MathUtils.lerp(
        particlesRef.current.rotation.y,
        particlesRef.current.rotation.y + targetRotation.current.y * 0.05,
        delta * 2
      );
    }
  });

  const scale = isMobile ? 1.2 : 1.5;

  return (
    <group ref={groupRef} scale={scale}>
      <lineSegments ref={wireframeRef} geometry={edgesGeometry}>
        <lineBasicMaterial
          ref={lineMaterialRef}
          color="#A1A1AA"
          transparent
          opacity={0.6}
        />
      </lineSegments>

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
            count={config.particleCount}
          />
        </bufferGeometry>
        <pointsMaterial
          ref={pointMaterialRef}
          color="#D4D4D8"
          transparent
          opacity={0.5}
          size={0.03}
          sizeAttenuation
        />
      </points>
    </group>
  );
}
