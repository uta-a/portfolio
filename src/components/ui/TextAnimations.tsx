"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import { useSimpleMode } from "@/providers/SimpleModeProvider";

/* ── TypingText ──────────────────────────────────── */

type TypingTextProps = {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
};

export function TypingText({
  text,
  delay = 0,
  speed = 40,
  className = "",
  cursor = true,
  onComplete,
}: TypingTextProps) {
  const { simpleMode } = useSimpleMode();
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (simpleMode) {
      setDisplayed(text);
      setDone(true);
      onComplete?.();
      return;
    }
    if (!isInView) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [isInView, delay, simpleMode, text, onComplete]);

  useEffect(() => {
    if (simpleMode) return;
    if (!started) return;
    if (displayed.length >= text.length) {
      setDone(true);
      onComplete?.();
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [started, displayed, text, speed, onComplete, simpleMode]);

  return (
    <span ref={ref} className={className}>
      {simpleMode ? text : displayed}
      {cursor && !done && !simpleMode && (
        <span className="animate-cursor-blink ml-0.5 inline-block w-[2px] h-[1em] bg-accent align-middle" />
      )}
    </span>
  );
}

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
  const { simpleMode } = useSimpleMode();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  if (simpleMode) {
    return (
      <span ref={ref} className={`inline ${className}`}>
        {text.split("").map((char, i) => (
          <span key={`${char}-${i}`} className={`inline-block ${charClassName}`}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span ref={ref} className={`inline ${className}`}>
      {text.split("").map((char, i) => (
        <motion.span
          key={`${char}-${i}`}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.05,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className={`inline-block ${charClassName}`}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── GlitchText ──────────────────────────────────── */

type GlitchTextProps = {
  text: string;
  className?: string;
};

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const { simpleMode } = useSimpleMode();

  return (
    <span
      className={`${simpleMode ? "" : "glitch"} ${className}`}
      data-text={text}
    >
      {text}
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
  const { simpleMode } = useSimpleMode();
  const [count, setCount] = useState(simpleMode ? end : 0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (simpleMode) {
      setCount(end);
      return;
    }
    if (!isInView) return;

    const startTime = Date.now();
    const durationMs = duration * 1000;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, simpleMode]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
