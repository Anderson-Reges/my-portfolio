import { cn } from "~/lib/cn";
import { useSettings } from "~/presentation/context/settings-context";

/** Fixed top-right language (en/pt) and theme (dark/light) toggles. */
export function Controls() {
  const { theme, lang, setTheme, setLang } = useSettings();

  return (
    <div className="ctl">
      <div className="seg" role="group" aria-label="Language">
        <button
          type="button"
          aria-label="English"
          aria-pressed={lang === "en"}
          className={cn(lang === "en" && "on")}
          onClick={() => setLang("en")}
        >
          en
        </button>
        <span className="d" aria-hidden>
          /
        </span>
        <button
          type="button"
          aria-label="Português"
          aria-pressed={lang === "pt"}
          className={cn(lang === "pt" && "on")}
          onClick={() => setLang("pt")}
        >
          pt
        </button>
      </div>

      <div className="seg" role="group" aria-label="Theme">
        <button
          type="button"
          aria-label="Dark theme"
          aria-pressed={theme === "dark"}
          className={cn(theme === "dark" && "on")}
          onClick={() => setTheme("dark")}
        >
          dark
        </button>
        <span className="d" aria-hidden>
          /
        </span>
        <button
          type="button"
          aria-label="Light theme"
          aria-pressed={theme === "light"}
          className={cn(theme === "light" && "on")}
          onClick={() => setTheme("light")}
        >
          light
        </button>
      </div>
    </div>
  );
}
