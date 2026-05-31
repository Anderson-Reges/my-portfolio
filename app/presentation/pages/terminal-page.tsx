import type { Project } from "~/core/domain/entities/project";
import { profile, sections } from "~/config/site";
import { useSectionShortcuts } from "~/presentation/hooks/use-section-shortcuts";
import { useTerminalSession } from "~/presentation/hooks/use-terminal-session";
import { Brand } from "../components/chrome/brand";
import { Controls } from "../components/chrome/controls";
import { IndexNav } from "../components/chrome/index-nav";
import { ScrollHint } from "../components/chrome/scroll-hint";
import { AboutSection } from "../components/sections/about-section";
import { ContactSection } from "../components/sections/contact-section";
import { ProjectsSection } from "../components/sections/projects-section";
import { ReadySection } from "../components/sections/ready-section";
import { StackSection } from "../components/sections/stack-section";
import { WhoamiSection } from "../components/sections/whoami-section";
import type { BlockState } from "../components/terminal/terminal-block";

interface TerminalPageProps {
  /** Deferred list of featured projects from the route loader. */
  projects: Promise<Project[]>;
}

// Stable across renders (derived from static config) so the effects that key
// off these arrays run once rather than on every state update.
const COMMANDS = sections.map((section) => section.cmd);
const SECTION_IDS = sections.map((section) => section.id);

/** The whole portfolio: one scroll-driven terminal session. */
export function TerminalPage({ projects }: TerminalPageProps) {
  const term = useTerminalSession(COMMANDS);
  useSectionShortcuts(SECTION_IDS);

  const blockState = (index: number): BlockState => ({
    id: sections[index].id,
    command: term.typed[index],
    cursorOn: term.cursorAt === index,
    revealed: term.revealed[index],
    registerRef: term.registerBlock(index),
  });

  return (
    <>
      <Brand />
      <Controls />
      <IndexNav activeIndex={term.activeIndex} />
      <ScrollHint gone={term.hintGone} />

      <main>
        {/* Visually-hidden document title — the visible name is a styled div. */}
        <h1 className="sr-only">{profile.name} — full stack developer</h1>

        <WhoamiSection {...blockState(0)} />
        <StackSection {...blockState(1)} />
        <ProjectsSection projects={projects} {...blockState(2)} />
        <AboutSection {...blockState(3)} />
        <ContactSection {...blockState(4)} />
        <ReadySection />
      </main>
    </>
  );
}
