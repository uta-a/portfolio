"use client";

import { ParallaxLayer } from "./ParallaxLayer";

type BlobSpec = {
  position: string;
  classes: string;
  speed?: number;
  rotateRange?: [number, number];
};

type BlobVariant = "hero" | "about" | "projects" | "services" | "contact";

const blobPresets: Record<BlobVariant, BlobSpec[]> = {
  hero: [
    {
      position: "-top-24 -left-24",
      classes: "h-72 w-72 rounded-full bg-stone-300/40",
      speed: 0.1,
      rotateRange: [-4, 4],
    },
    {
      position: "top-1/3 -right-20",
      classes: "h-56 w-56 rounded-[2.5rem] rotate-12 bg-stone-400/30",
      speed: 0.25,
      rotateRange: [3, -3],
    },
    {
      position: "bottom-20 left-1/4",
      classes: "h-36 w-36 rounded-full bg-stone-300/50",
      speed: 0.45,
    },
  ],
  about: [
    {
      position: "-top-16 -left-20",
      classes: "h-64 w-64 rounded-full bg-stone-300/35",
      speed: 0.1,
      rotateRange: [-3, 3],
    },
    {
      position: "top-1/3 -right-14 md:right-0",
      classes: "h-48 w-48 rounded-[2rem] rotate-6 bg-stone-400/30",
      speed: 0.3,
      rotateRange: [2, -2],
    },
    {
      position: "bottom-10 left-[12%]",
      classes: "h-28 w-28 rounded-full bg-stone-300/45",
      speed: 0.5,
    },
  ],
  projects: [
    {
      position: "top-10 -left-24",
      classes: "h-72 w-72 rounded-full bg-stone-400/30",
      speed: 0.1,
      rotateRange: [-3, 3],
    },
    {
      position: "-top-12 -right-16",
      classes: "h-44 w-44 rounded-3xl -rotate-12 bg-stone-300/35",
      speed: 0.3,
      rotateRange: [4, -4],
    },
    {
      position: "bottom-16 left-1/3",
      classes: "h-32 w-32 rounded-full bg-stone-300/45",
      speed: 0.45,
    },
  ],
  services: [
    {
      position: "-top-16 -right-20",
      classes: "h-60 w-60 rounded-full bg-stone-300/35",
      speed: 0.1,
      rotateRange: [-2, 2],
    },
    {
      position: "bottom-10 -left-16",
      classes: "h-48 w-48 rounded-[2rem] rotate-12 bg-stone-400/30",
      speed: 0.3,
      rotateRange: [3, -3],
    },
  ],
  contact: [
    {
      position: "-top-12 -left-16",
      classes: "h-56 w-56 rounded-full bg-stone-400/35",
      speed: 0.1,
      rotateRange: [-3, 3],
    },
    {
      position: "bottom-10 -right-20",
      classes: "h-64 w-64 rounded-[2.5rem] -rotate-6 bg-stone-300/35",
      speed: 0.15,
      rotateRange: [2, -2],
    },
    {
      position: "bottom-1/3 left-1/2",
      classes: "h-28 w-28 rounded-full bg-amber-200/40",
      speed: 0.45,
    },
  ],
};

type SectionBlobsProps = {
  variant: BlobVariant;
};

export function SectionBlobs({ variant }: SectionBlobsProps) {
  const blobs = blobPresets[variant];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {blobs.map((blob, i) => (
        <ParallaxLayer
          key={i}
          speed={blob.speed}
          rotateRange={blob.rotateRange}
          className={`absolute ${blob.position}`}
        >
          <div className={blob.classes} />
        </ParallaxLayer>
      ))}
    </div>
  );
}
