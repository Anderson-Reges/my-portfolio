import { prompt, ui } from "~/config/site";
import { pick } from "~/lib/i18n";
import { useSettings } from "~/presentation/context/settings-context";

/** Closing block: an idle prompt with a blinking cursor and the copyright. */
export function ReadySection() {
  const { lang } = useSettings();

  return (
    <section className="ready" id="ready">
      <div className="prompt">
        <span className="user">{prompt.user}</span>
        <span className="sep">:</span>
        <span className="path">{prompt.path}</span>
        <span className="sign">{prompt.sign}</span>
        <span className="cur on" aria-hidden />
      </div>
      <div className="copy">{pick(ui.copyright, lang)}</div>
    </section>
  );
}
