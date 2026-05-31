import { ui } from "~/config/site";
import { cn } from "~/lib/cn";
import { pick } from "~/lib/i18n";
import { useSettings } from "~/presentation/context/settings-context";

/** Fixed bottom-left "↓ scroll" hint that fades once the page is scrolled. */
export function ScrollHint({ gone }: { gone: boolean }) {
  const { lang } = useSettings();

  return (
    <div className={cn("hint", gone && "gone")} aria-hidden={gone}>
      <span className="ch" aria-hidden>
        ↓
      </span>
      <span>{pick(ui.scroll, lang)}</span>
    </div>
  );
}
