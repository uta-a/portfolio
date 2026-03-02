"use client";

import { useEffect, useRef } from "react";
import { useInView } from "motion/react";

/* ── SplitText ───────────────────────────────────── */

type SplitTextProps = {
  text: string;
  delay?: number;
  className?: string;
  charClassName?: string;
};

export function SplitText({
  text,
  delay = 0,
  className = "",
  charClassName = "",
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className={`inline ${className}`}>
      {text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`inline-block ${charClassName}`}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            transition: `opacity 0.4s cubic-bezier(0.25,0.1,0.25,1) ${delay + i * 0.05}s, transform 0.4s cubic-bezier(0.25,0.1,0.25,1) ${delay + i * 0.05}s`,
            willChange: isInView ? "auto" : "opacity, transform",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

/* ── CountUp ─────────────────────────────────────── */

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
};

export function CountUp({
  end,
  duration = 1.5,
  suffix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const el = ref.current;
    const startTime = Date.now();
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = `${Math.floor(eased * end)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
