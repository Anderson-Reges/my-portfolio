import type { Config } from "@react-router/dev/config";

export default {
  // Server-side rendering: route loaders run on the server, so secrets like
  // GITHUB_TOKEN stay in process.env and never reach the client bundle.
  ssr: true,
} satisfies Config;
