"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

type SimpleModeContextType = {
  simpleMode: boolean;
  toggleSimpleMode: () => void;
};

const SimpleModeContext = createContext<SimpleModeContextType>({
  simpleMode: false,
  toggleSimpleMode: () => {},
});

const STORAGE_KEY = "portfolio-simple-mode";

export function SimpleModeProvider({ children }: { children: ReactNode }) {
  const [simpleMode, setSimpleMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setSimpleMode(true);
      document.documentElement.setAttribute("data-simple-mode", "");
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (simpleMode) {
      document.documentElement.setAttribute("data-simple-mode", "");
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      document.documentElement.removeAttribute("data-simple-mode");
      localStorage.setItem(STORAGE_KEY, "false");
    }
  }, [simpleMode, mounted]);

  const toggleSimpleMode = useCallback(() => {
    setSimpleMode((prev) => !prev);
  }, []);

  return (
    <SimpleModeContext.Provider value={{ simpleMode, toggleSimpleMode }}>
      {children}
    </SimpleModeContext.Provider>
  );
}

export function useSimpleMode() {
  return useContext(SimpleModeContext);
}
