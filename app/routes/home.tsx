import type { Route } from "./+types/home";
import { siteMeta } from "~/config/site";
import { listFeaturedProjects } from "~/core/infrastructure/container.server";
import { TerminalPage } from "~/presentation/pages/terminal-page";

export function meta() {
  return [
    { title: siteMeta.title },
    { name: "description", content: siteMeta.description },
  ];
}

/**
 * Server loader: kicks off the featured-projects fetch (with the private token)
 * and hands the pending promise to the page, so the hero renders instantly
 * while the `ls projects/` section streams in behind a skeleton.
 */
export function loader() {
  return { projects: listFeaturedProjects() };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <TerminalPage projects={loaderData.projects} />;
}
