"use client";

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from "react";
import type { Locale } from "@/content/locale";

export type { Locale };

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const storageKey = "portfolio-locale";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readLocale(): Locale {
  return window.localStorage.getItem(storageKey) === "de" ? "de" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore<Locale>(subscribe, readLocale, () => "en");

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    window.localStorage.setItem(storageKey, next);
    listeners.forEach((listener) => listener());
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>{children}</LanguageContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(LanguageContext);
  if (!value) {
    throw new Error("useLocale must be used within LanguageProvider");
  }
  return value;
}
