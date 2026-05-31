import { aboutParagraphs } from "~/config/site";
import { pick } from "~/lib/i18n";
import { useSettings } from "~/presentation/context/settings-context";
import { Emphasis } from "../terminal/emphasis";
import {
  TerminalBlock,
  type BlockState,
  type TerminalLine,
} from "../terminal/terminal-block";

/** `cat about.md` — short bio paragraphs. */
export function AboutSection(state: BlockState) {
  const { lang } = useSettings();

  const lines: TerminalLine[] = aboutParagraphs.map((paragraph) => ({
    className: "para",
    content: <Emphasis text={pick(paragraph, lang)} />,
  }));

  return <TerminalBlock {...state} lines={lines} />;
}
