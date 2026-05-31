import { sections } from "~/config/site";
import { cn } from "~/lib/cn";
import { scrollToSection } from "~/presentation/lib/scroll-to-section";

/** Fixed right-side section index (hidden under 1120px via CSS). */
export function IndexNav({ activeIndex }: { activeIndex: number }) {
  return (
    <nav className="nav" aria-label="Sections">
      {sections.map((section, index) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(event) => {
            event.preventDefault();
            scrollToSection(section.id);
          }}
          aria-current={index === activeIndex ? "true" : undefined}
          aria-keyshortcuts={String(index + 1)}
          className={cn(index === activeIndex && "active")}
        >
          <span className="ix">{section.ix}</span>
          <span>{section.nav}</span>
          <span className="ln" aria-hidden />
        </a>
      ))}
    </nav>
  );
}
