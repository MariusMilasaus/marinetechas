"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations["lt"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "marinetech-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("lt");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in translations) {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
