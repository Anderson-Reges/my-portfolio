import { Suspense } from "react";
import { Await } from "react-router";

import type { Project } from "~/core/domain/entities/project";
import {
  ProjectRows,
  ProjectRowsError,
  ProjectRowsSkeleton,
} from "../projects/project-rows";
import {
  TerminalBlock,
  type BlockState,
  type TerminalLine,
} from "../terminal/terminal-block";

type ProjectsSectionProps = BlockState & { projects: Promise<Project[]> };

/** `ls projects/` — live GitHub repositories, streamed in behind a skeleton. */
export function ProjectsSection({ projects, ...state }: ProjectsSectionProps) {
  const lines: TerminalLine[] = [
    {
      className: "proj",
      content: (
        <Suspense fallback={<ProjectRowsSkeleton />}>
          <Await resolve={projects} errorElement={<ProjectRowsError />}>
            {(items: Project[]) => <ProjectRows items={items} />}
          </Await>
        </Suspense>
      ),
    },
  ];

  return <TerminalBlock {...state} lines={lines} />;
}
