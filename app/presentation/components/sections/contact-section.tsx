import { contactRows } from "~/config/site";
import { pick } from "~/lib/i18n";
import { useSettings } from "~/presentation/context/settings-context";
import {
  TerminalBlock,
  type BlockState,
  type TerminalLine,
} from "../terminal/terminal-block";

/** `cat contact.txt` — contact + résumé links as key/value rows. */
export function ContactSection(state: BlockState) {
  const { lang } = useSettings();

  const lines: TerminalLine[] = contactRows.map((row) => ({
    className: "kv",
    content: (
      <>
        <div className="k">{pick(row.key, lang)}</div>
        <div className="v">
          <a
            href={row.href}
            {...(row.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {row.value}
            {row.external && (
              <span className="ar" aria-hidden>
                ↗
              </span>
            )}
          </a>
        </div>
      </>
    ),
  }));

  return <TerminalBlock {...state} lines={lines} />;
}
