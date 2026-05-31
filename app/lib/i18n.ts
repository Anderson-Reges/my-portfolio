export type Lang = "en" | "pt";

/** A string available in both supported languages. */
export interface Localized {
  en: string;
  pt: string;
}

/** Resolve a localized string for the active language (falls back to English). */
export function pick(value: Localized, lang: Lang): string {
  return value[lang] ?? value.en;
}
