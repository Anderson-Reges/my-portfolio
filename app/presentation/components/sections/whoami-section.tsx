import { profile } from "~/config/site";
import { pick } from "~/lib/i18n";
import { useSettings } from "~/presentation/context/settings-context";
import {
  TerminalBlock,
  type BlockState,
  type TerminalLine,
} from "../terminal/terminal-block";

/** `whoami` — name, tagline, availability status. */
export function WhoamiSection(state: BlockState) {
  const { lang } = useSettings();

  const lines: TerminalLine[] = [
    {
      className: "name",
      content: (
        <>
          {profile.name}
          <span className="blink" aria-hidden>
            _
          </span>
        </>
      ),
    },
    { className: "tagline", content: pick(profile.tagline, lang) },
    {
      className: "status",
      content: (
        <>
          <span className="dot" aria-hidden />
          <span>{pick(profile.status, lang)}</span>
        </>
      ),
    },
  ];

  return <TerminalBlock {...state} lines={lines} />;
}
