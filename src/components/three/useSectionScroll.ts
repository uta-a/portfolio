import { useRef, useEffect, useCallback } from "react";

const SECTION_IDS = ["hero", "services", "projects", "skills", "about", "contact"];

export type SectionScrollState = {
  currentIndex: number;
  nextIndex: number;
  currentOpacity: number;
  nextOpacity: number;
};

export function useSectionScroll() {
  const stateRef = useRef<SectionScrollState>({
    currentIndex: 0,
    nextIndex: -1,
    currentOpacity: 1,
    nextOpacity: 0,
  });

  const sectionsRef = useRef<{ top: number; bottom: number }[]>([]);

  const measureSections = useCallback(() => {
    sectionsRef.current = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return { top: 0, bottom: 0 };
      return { top: el.offsetTop, bottom: el.offsetTop + el.offsetHeight };
    });
  }, []);

  const updateState = useCallback(() => {
    const sections = sectionsRef.current;
    if (sections.length === 0) return;

    const scrollCenter = window.scrollY + window.innerHeight * 0.5;

    // Find which section boundary region we're in.
    // Transition zone: 120px centered on each section boundary.
    const ZONE_HALF = 60;
    const state = stateRef.current;

    for (let i = 0; i < sections.length - 1; i++) {
      const boundary = sections[i + 1].top;
      const zoneStart = boundary - ZONE_HALF;
      const zoneEnd = boundary + ZONE_HALF;

      if (scrollCenter >= zoneStart && scrollCenter <= zoneEnd) {
        // In transition zone between section i and i+1
        const t = (scrollCenter - zoneStart) / (zoneEnd - zoneStart);
        state.currentIndex = i;
        state.nextIndex = i + 1;
        state.currentOpacity = 1 - t;
        state.nextOpacity = t;
        return;
      }
    }

    // Not in any transition zone — find which section we're fully in
    let idx = 0;
    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollCenter >= sections[i].top) {
        idx = i;
        break;
      }
    }

    state.currentIndex = idx;
    state.nextIndex = -1;
    state.currentOpacity = 1;
    state.nextOpacity = 0;
  }, []);

  useEffect(() => {
    measureSections();
    updateState();

    const handleScroll = () => updateState();
    const handleResize = () => {
      measureSections();
      updateState();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [measureSections, updateState]);

  return stateRef;
}
