"use client";

import { useRef, useCallback, type ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
};

export function TiltCard({
  children,
  className = "",
  maxTilt = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectCache = useRef<DOMRect | null>(null);
  const rafId = useRef(0);

  const handleMouseEnter = useCallback(() => {
    if (ref.current) {
      rectCache.current = ref.current.getBoundingClientRect();
      ref.current.style.transition = "transform 0.1s ease-out";
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = rectCache.current;
      if (!rect || !ref.current) return;

      if (rafId.current) cancelAnimationFrame(rafId.current);

      const clientX = e.clientX;
      const clientY = e.clientY;

      rafId.current = requestAnimationFrame(() => {
        if (!ref.current) return;
        const x = (clientX - rect.left) / rect.width - 0.5;
        const y = (clientY - rect.top) / rect.height - 0.5;
        ref.current.style.transform = `perspective(600px) rotateX(${-y * maxTilt}deg) rotateY(${x * maxTilt}deg)`;
      });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rectCache.current = null;
    if (ref.current) {
      ref.current.style.transition = "transform 0.4s ease-out";
      ref.current.style.transform = "";
    }
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </div>
  );
}
