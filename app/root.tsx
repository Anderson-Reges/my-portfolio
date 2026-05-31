import type { ReactNode } from "react";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "./app.css";
import { siteMeta } from "~/config/site";
import { SettingsProvider } from "~/presentation/context/settings-context";

export const meta: Route.MetaFunction = () => [
  { title: siteMeta.title },
  { name: "description", content: siteMeta.description },
];

// Apply the saved theme before first paint to avoid a flash for returning
// visitors (default is the light "ubuntu" theme).
const themeInit = `try{document.body.dataset.theme=localStorage.getItem('ar-theme')||'light';}catch(e){document.body.dataset.theme='light';}`;

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <Outlet />
    </SettingsProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let title = "error";
  let message = "an unexpected error occurred.";

  if (isRouteErrorResponse(error)) {
    title = error.status === 404 ? "404" : `error ${error.status}`;
    message =
      error.status === 404
        ? "this page could not be found."
        : error.statusText || message;
  } else if (import.meta.env.DEV && error instanceof Error) {
    message = error.message;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-bg px-6 text-center text-ink">
      <h1 className="text-4xl font-bold lowercase">{title}</h1>
      <p className="text-mut">{message}</p>
      <a href="/" className="text-ac underline">
        cd ~
      </a>
    </main>
  );
}
