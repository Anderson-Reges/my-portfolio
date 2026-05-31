import type { Project } from "~/core/domain/entities/project";

function tech(project: Project): string {
  if (project.topics.length > 0) return project.topics.join(" · ");
  return project.language ?? "";
}

/** Resolved `ls projects/` listing: one row per repository. */
export function ProjectRows({ items }: { items: Project[] }) {
  return (
    <>
      {items.map((project, index) => (
        <a
          key={project.name}
          href={project.homepageUrl ?? project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.name} (opens in a new tab)`}
        >
          <span className="no">{String(index + 1).padStart(2, "0")}</span>
          <span className="nm">
            {project.name}{" "}
            <span className="ar" aria-hidden>
              ↗
            </span>
          </span>
          <span className="tech">{tech(project)}</span>
        </a>
      ))}
    </>
  );
}

/** Placeholder rows shown while the listing streams in. */
export function ProjectRowsSkeleton() {
  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <a key={index} aria-hidden className="pointer-events-none">
          <span className="no">{String(index + 1).padStart(2, "0")}</span>
          <span className="nm opacity-40">loading…</span>
          <span className="tech" />
        </a>
      ))}
    </>
  );
}

/** Shown if the listing cannot be resolved at all. */
export function ProjectRowsError() {
  return (
    <a aria-disabled>
      <span className="no">!!</span>
      <span className="nm">couldn’t load projects</span>
      <span className="tech" />
    </a>
  );
}
