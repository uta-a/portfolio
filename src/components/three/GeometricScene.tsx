"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type GeometricSceneProps = {
  scrollProgress: number;
  mousePosition: { x: number; y: number };
  isMobile: boolean;
};

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

/* ── Wireframe main object ──────────────────── */

function WireframeBody({
  children,
  rotSpeedX,
  rotSpeedY,
  opacity,
}: {
  children: React.ReactNode;
  rotSpeedX: number;
  rotSpeedY: number;
  opacity: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshBasicMaterial>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current || !matRef.current) return;
    const t = clock.elapsedTime;
    meshRef.current.rotation.x = t * rotSpeedX;
    meshRef.current.rotation.y = t * rotSpeedY;
    meshRef.current.position.y = Math.sin(t * 0.5) * 0.15;
    matRef.current.opacity = opacity * 0.25;
  });

  return (
    <mesh ref={meshRef}>
      {children}
      <meshBasicMaterial
        ref={matRef}
        wireframe
        color="#00d4ff"
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

/* ── Solid orbiting sub object ──────────────── */

function OrbitingSolid({
  children,
  orbitRadius,
  orbitSpeed,
  selfSpeed,
  phase,
  opacity,
  scale,
}: {
  children: React.ReactNode;
  orbitRadius: number;
  orbitSpeed: number;
  selfSpeed: number;
  phase: number;
  opacity: number;
  scale: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.MeshStandardMaterial>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current || !matRef.current) return;
    const t = clock.elapsedTime;
    meshRef.current.position.x =
      Math.cos(t * orbitSpeed + phase) * orbitRadius;
    meshRef.current.position.y =
      Math.sin(t * orbitSpeed * 0.7 + phase) * orbitRadius * 0.5;
    meshRef.current.position.z =
      Math.sin(t * orbitSpeed + phase) * orbitRadius;
    meshRef.current.rotation.x = t * selfSpeed * 0.5;
    meshRef.current.rotation.y = t * selfSpeed * 0.75;
    matRef.current.opacity = opacity * 0.3;
  });

  return (
    <mesh ref={meshRef} scale={scale}>
      {children}
      <meshStandardMaterial
        ref={matRef}
        color="#8b5cf6"
        transparent
        metalness={0.8}
        roughness={0.2}
        depthWrite={false}
      />
    </mesh>
  );
}

/* ── Main scene ─────────────────────────────── */

export function GeometricScene({
  scrollProgress,
  mousePosition,
  isMobile,
}: GeometricSceneProps) {
  const rootRef = useRef<THREE.Group>(null);

  const heroOpacity = 1 - smoothstep(0.2, 0.3, scrollProgress);
  const skillsOpacity =
    smoothstep(0.2, 0.3, scrollProgress) *
    (1 - smoothstep(0.45, 0.55, scrollProgress));
  const projectsOpacity =
    smoothstep(0.45, 0.55, scrollProgress) *
    (1 - smoothstep(0.7, 0.8, scrollProgress));
  const contactOpacity = smoothstep(0.7, 0.8, scrollProgress);

  useFrame(() => {
    if (!rootRef.current) return;
    rootRef.current.rotation.x = THREE.MathUtils.lerp(
      rootRef.current.rotation.x,
      mousePosition.y * 0.1,
      0.05
    );
    rootRef.current.rotation.y = THREE.MathUtils.lerp(
      rootRef.current.rotation.y,
      mousePosition.x * 0.1,
      0.05
    );
  });

  const subCount = isMobile ? 1 : 3;

  return (
    <group ref={rootRef}>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#00d4ff" />
      <pointLight position={[-5, -5, -5]} intensity={0.4} color="#8b5cf6" />

      {/* Hero: Icosahedron + Spheres */}
      {heroOpacity > 0.01 && (
        <group>
          <WireframeBody
            rotSpeedX={0.08}
            rotSpeedY={0.12}
            opacity={heroOpacity}
          >
            <icosahedronGeometry args={[2, 1]} />
          </WireframeBody>
          <OrbitingSolid
            orbitRadius={3}
            orbitSpeed={0.5}
            selfSpeed={1.5}
            phase={0}
            opacity={heroOpacity}
            scale={0.2}
          >
            <sphereGeometry args={[1, 16, 16]} />
          </OrbitingSolid>
          {subCount >= 2 && (
            <OrbitingSolid
              orbitRadius={3.5}
              orbitSpeed={0.4}
              selfSpeed={1.2}
              phase={Math.PI * 0.66}
              opacity={heroOpacity}
              scale={0.15}
            >
              <sphereGeometry args={[1, 16, 16]} />
            </OrbitingSolid>
          )}
          {subCount >= 3 && (
            <OrbitingSolid
              orbitRadius={2.8}
              orbitSpeed={0.6}
              selfSpeed={1.8}
              phase={Math.PI * 1.33}
              opacity={heroOpacity}
              scale={0.18}
            >
              <sphereGeometry args={[1, 16, 16]} />
            </OrbitingSolid>
          )}
        </group>
      )}

      {/* Skills: TorusKnot + Octahedrons */}
      {skillsOpacity > 0.01 && (
        <group>
          <WireframeBody
            rotSpeedX={0.06}
            rotSpeedY={0.1}
            opacity={skillsOpacity}
          >
            <torusKnotGeometry args={[1.5, 0.4, 64, 8]} />
          </WireframeBody>
          <OrbitingSolid
            orbitRadius={3.2}
            orbitSpeed={0.45}
            selfSpeed={1.3}
            phase={0}
            opacity={skillsOpacity}
            scale={0.25}
          >
            <octahedronGeometry args={[1]} />
          </OrbitingSolid>
          {subCount >= 2 && (
            <OrbitingSolid
              orbitRadius={3}
              orbitSpeed={0.55}
              selfSpeed={1.6}
              phase={Math.PI}
              opacity={skillsOpacity}
              scale={0.2}
            >
              <octahedronGeometry args={[1]} />
            </OrbitingSolid>
          )}
        </group>
      )}

      {/* Projects: Dodecahedron + Boxes */}
      {projectsOpacity > 0.01 && (
        <group>
          <WireframeBody
            rotSpeedX={0.07}
            rotSpeedY={0.09}
            opacity={projectsOpacity}
          >
            <dodecahedronGeometry args={[2, 0]} />
          </WireframeBody>
          <OrbitingSolid
            orbitRadius={3.3}
            orbitSpeed={0.5}
            selfSpeed={1.4}
            phase={0}
            opacity={projectsOpacity}
            scale={0.22}
          >
            <boxGeometry args={[1, 1, 1]} />
          </OrbitingSolid>
          {subCount >= 2 && (
            <OrbitingSolid
              orbitRadius={2.9}
              orbitSpeed={0.4}
              selfSpeed={1.1}
              phase={Math.PI * 0.66}
              opacity={projectsOpacity}
              scale={0.18}
            >
              <boxGeometry args={[1, 1, 1]} />
            </OrbitingSolid>
          )}
          {subCount >= 3 && (
            <OrbitingSolid
              orbitRadius={3.5}
              orbitSpeed={0.55}
              selfSpeed={1.7}
              phase={Math.PI * 1.33}
              opacity={projectsOpacity}
              scale={0.15}
            >
              <boxGeometry args={[1, 1, 1]} />
            </OrbitingSolid>
          )}
        </group>
      )}

      {/* Contact: Torus + Tetrahedrons */}
      {contactOpacity > 0.01 && (
        <group>
          <WireframeBody
            rotSpeedX={0.05}
            rotSpeedY={0.11}
            opacity={contactOpacity}
          >
            <torusGeometry args={[1.8, 0.5, 12, 24]} />
          </WireframeBody>
          <OrbitingSolid
            orbitRadius={3.1}
            orbitSpeed={0.5}
            selfSpeed={1.5}
            phase={0}
            opacity={contactOpacity}
            scale={0.25}
          >
            <tetrahedronGeometry args={[1]} />
          </OrbitingSolid>
          {subCount >= 2 && (
            <OrbitingSolid
              orbitRadius={3.4}
              orbitSpeed={0.45}
              selfSpeed={1.3}
              phase={Math.PI}
              opacity={contactOpacity}
              scale={0.2}
            >
              <tetrahedronGeometry args={[1]} />
            </OrbitingSolid>
          )}
        </group>
      )}
    </group>
  );
}
