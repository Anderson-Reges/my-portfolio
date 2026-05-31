# anderson reges — portfolio

A single-page, scroll-driven **terminal** portfolio. Scrolling runs a shell
session: each section types its command (`whoami`, `cat stack.txt`,
`ls projects/`, `cat about.md`, `cat contact.txt`) and reveals the output.
Ships **dark / light** (Ubuntu) themes and **en / pt-BR** — defaults: light + en.

Rebuilt from the original Next.js site to: **Vite · React 19 · React Router v7
(framework mode, SPA) · Tailwind CSS v4 · `cn` · clean architecture**, from a
[Claude Design](https://claude.ai/design) handoff.

## Tech stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Build tool     | Vite 6                                              |
| UI library     | React 19                                            |
| Routing / data | React Router v7 — framework mode, **SSR** (`ssr: true`) |
| Styling        | Tailwind CSS v4 (CSS-first `@theme`) + `cn`         |
| Data source    | GitHub REST API via `@octokit/core` (server loader) |
| Type / i18n    | TypeScript (strict) · lightweight en/pt dictionary  |
| Font           | JetBrains Mono, self-hosted (`@fontsource`)         |

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build      # build -> build/server + build/client
npm start          # run the production SSR server (react-router-serve)
npm run typecheck  # react-router typegen + tsc
```

### Environment

`GITHUB_TOKEN` (optional, **server-side only**) raises the GitHub REST API rate
limit used by the `ls projects/` section (60/h → 5000/h). Because the projects
`loader` runs on the server, the token is read from `process.env` and **never
reaches the browser bundle** — set it in your host's env (e.g. Vercel project
env), not in committed files. The site works without it. See `.env.example`.

## Architecture

Dependencies point inward: `presentation` / `infrastructure` → `domain`.

```
app/
├── root.tsx                      # document shell, theme-init script, providers, boundaries
├── routes.ts                     # one index route
├── app.css                       # Tailwind v4 + design tokens + ported terminal CSS
├── routes/home.tsx               # clientLoader → use case (deferred projects)
│
├── core/                         # ── clean architecture ──
│   ├── domain/                   #   Project entity + repository port (pure)
│   ├── application/              #   listFeaturedProjects use case
│   └── infrastructure/           #   Octokit adapter + mapper + composition root
│
├── presentation/                 # ── UI ──
│   ├── pages/terminal-page.tsx   #   assembles the whole session
│   ├── hooks/use-terminal-session.ts   # typing + scroll-reveal engine
│   ├── context/settings-context.tsx    # theme (dark/light) + lang (en/pt)
│   └── components/{chrome,terminal,sections,projects}
│
├── config/site.ts                # all content + en/pt strings
└── lib/                          # cn() + i18n helper
```

### Data flow — `ls projects/`

```
routes/home.tsx (server loader)
  └─ container.server.ts                # composition root (reads GITHUB_TOKEN)
       └─ listFeaturedProjects()        # application use case (deferred)
            └─ ProjectRepository        # domain port (resilient per repo)
                 └─ GithubProjectRepository  # infrastructure (Octokit)
  → <ProjectsSection> streams rows via <Suspense>/<Await> behind a skeleton.
```

The loader and `container.server.ts` run only on the server, so the token never
ships to the client. The domain never imports React, Octokit, or the router.

## Design tokens (`app/app.css`)

| Token        | Light (ubuntu, default) | Dark               |
| ------------ | ----------------------- | ------------------ |
| `--color-bg` | `#300a24`               | `#0a0c0f`          |
| `--color-ink`| `#eeeeec`               | `#dfe5ec`          |
| `--color-ac` | `#7fd93c` (lime)        | `#4fe0d4` (teal)   |
| `--color-mut`| `#a890a1`               | `#697483`          |

Themes switch via `data-theme` on `<body>` (set before paint to avoid a flash;
persisted in `localStorage`). Light is `:root`; dark is `body[data-theme="dark"]`.
Color tokens are also Tailwind utilities (`bg-bg`, `text-ink`, `text-ac`, …).

## Customizing

- **Projects** — edit `app/core/infrastructure/config/featured-projects.ts`
  (repo names + owner). Tech tags come from each repo's GitHub topics (falling
  back to its primary language).
- **Content / translations** — `app/config/site.ts` (tagline, status, stack,
  about, contact, copyright; each `{ en, pt }`).
- **Theme / motion** — palette and `--speed` / `--col` in `app/app.css`.
- **Résumé** — drop a file at `public/resume.pdf` (the contact row points there).

## Deployment

`npm run build` produces a server bundle (`build/server`) + client assets
(`build/client`). Serve it with `npm start` (`react-router-serve`) on any Node
host. On Vercel, add the [`@vercel/react-router`](https://reactrouter.com/start/framework/deploying)
preset and set `GITHUB_TOKEN` in the project env — it stays server-side. (SSR
needs a Node runtime, so this is no longer a pure-static deploy.)

## Docker

Multi-stage `Dockerfile` (build → production-only runtime) + `docker-compose.yml`
(container `portifolio`, listening on port **80** on the compose network).

```bash
docker compose up --build       # build + run; exposed on the network as portifolio:80
```

- The app listens on port **80** inside the container and is `expose`d on the
  compose network (e.g. for a reverse proxy), **not published to the host**. To
  open it from the host, add a `ports:` mapping (a commented example is in the
  compose), e.g. `- "8080:80"`, then browse http://localhost:8080.
- Port 80 is privileged and the image runs as a non-root user, so the compose
  sets `net.ipv4.ip_unprivileged_port_start=80` to allow the bind.
- `GITHUB_TOKEN` is optional and **server-side only** — put it in a local `.env`
  file next to the compose (substituted in, never baked into the image).
- Standalone (defaults to port 3000): `docker build -t anderson-portfolio . && docker run -p 3000:3000 -e GITHUB_TOKEN=… anderson-portfolio`.
