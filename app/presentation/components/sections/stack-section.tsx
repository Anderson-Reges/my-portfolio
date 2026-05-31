import { stackGroups } from "~/config/site";
import { pick } from "~/lib/i18n";
import { useSettings } from "~/presentation/context/settings-context";
import {
  TerminalBlock,
  type BlockState,
  type TerminalLine,
} from "../terminal/terminal-block";

/** `cat stack.txt` — grouped tech as key/value rows. */
export function StackSection(state: BlockState) {
  const { lang } = useSettings();

  const lines: TerminalLine[] = stackGroups.map((group) => ({
    className: "kv",
    content: (
      <>
        <div className="k">{pick(group.label, lang)}</div>
        <div className="v">
          {group.items.map((item) => (
            <i key={item}>{item}</i>
          ))}
        </div>
      </>
    ),
  }));

  return <TerminalBlock {...state} lines={lines} />;
}
