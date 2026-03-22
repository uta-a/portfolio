"use client";

import { Reveal } from "./Reveal";
import { SplitText } from "./TextAnimations";

type SectionHeadingProps = {
  label: string;
  title: string;
};

export function SectionHeading({ label, title }: SectionHeadingProps) {
  return (
    <Reveal className="mb-16 text-center" preset="rotate-in">
      <p className="text-sm font-medium tracking-widest uppercase text-text-secondary">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        <SplitText text={title} delay={0.2} />
      </h2>
    </Reveal>
  );
}
