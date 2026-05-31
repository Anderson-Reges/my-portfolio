import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { Lang } from "~/lib/i18n";

export type Theme = "dark" | "light";

interface SettingsValue {
  theme: Theme;
  lang: Lang;
  setTheme: (theme: Theme) => void;
  setLang: (lang: Lang) => void;
}

const THEME_KEY = "ar-theme";
const LANG_KEY = "ar-lang";

const SettingsContext = createContext<SettingsValue | null>(null);

/**
 * Holds theme (dark/light) and language (en/pt) and keeps them in sync with the
 * DOM + localStorage. Defaults — light theme, English — match the prerendered
 * HTML, so the first paint is stable; saved preferences are applied on mount.
 */
export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [lang, setLangState] = useState<Lang>("en");

  // Apply any saved preferences once mounted (client only).
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "dark" || savedTheme === "light") setThemeState(savedTheme);
      const savedLang = localStorage.getItem(LANG_KEY);
      if (savedLang === "en" || savedLang === "pt") setLangState(savedLang);
    } catch {
      /* localStorage unavailable — keep defaults */
    }
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    document.body.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    document.documentElement.lang = next === "pt" ? "pt-BR" : "en";
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  // Reflect mounted state back onto the DOM (covers the saved-preference path).
  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo<SettingsValue>(
    () => ({ theme, lang, setTheme, setLang }),
    [theme, lang, setTheme, setLang],
  );

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
}

export function useSettings(): SettingsValue {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
