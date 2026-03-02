import * as THREE from "three";

export type ShapeConfig = {
  createGeometry: () => THREE.BufferGeometry;
  particleCount: number;
  rotationSpeed: { x: number; y: number };
  parallaxFactor: number;
};

export const SHAPE_CONFIGS: ShapeConfig[] = [
  // Hero: TorusKnot (high detail)
  {
    createGeometry: () => new THREE.TorusKnotGeometry(0.9, 0.3, 128, 16),
    particleCount: 160,
    rotationSpeed: { x: 0.03, y: 0.08 },
    parallaxFactor: 0.3,
  },
  // Services: TorusKnot (3,5) — complex trefoil variant
  {
    createGeometry: () => new THREE.TorusKnotGeometry(0.7, 0.25, 100, 12, 3, 5),
    particleCount: 120,
    rotationSpeed: { x: 0.02, y: 0.06 },
    parallaxFactor: 0.25,
  },
  // Projects: Icosahedron (high subdivision — dense sphere wireframe)
  {
    createGeometry: () => new THREE.IcosahedronGeometry(1.2, 3),
    particleCount: 140,
    rotationSpeed: { x: 0.025, y: 0.07 },
    parallaxFactor: 0.3,
  },
  // Skills: TorusKnot (2,5) — cinquefoil knot
  {
    createGeometry: () => new THREE.TorusKnotGeometry(0.7, 0.2, 100, 12, 2, 5),
    particleCount: 120,
    rotationSpeed: { x: 0.035, y: 0.05 },
    parallaxFactor: 0.25,
  },
  // About: Torus (high resolution — dense grid wireframe)
  {
    createGeometry: () => new THREE.TorusGeometry(0.9, 0.35, 32, 64),
    particleCount: 120,
    rotationSpeed: { x: 0.02, y: 0.06 },
    parallaxFactor: 0.3,
  },
  // Contact: Dodecahedron (high subdivision)
  {
    createGeometry: () => new THREE.DodecahedronGeometry(1.2, 2),
    particleCount: 100,
    rotationSpeed: { x: 0.04, y: 0.09 },
    parallaxFactor: 0.25,
  },
];

export function generateFibonacciSphere(
  count: number,
  minR: number,
  maxR: number
): Float32Array {
  const positions = new Float32Array(count * 3);
  const goldenRatio = (1 + Math.sqrt(5)) / 2;

  for (let i = 0; i < count; i++) {
    const theta = (2 * Math.PI * i) / goldenRatio;
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
    const r = minR + Math.random() * (maxR - minR);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return positions;
}
