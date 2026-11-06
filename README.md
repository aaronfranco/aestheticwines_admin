# Aesthetic Wines Admin

A separate admin UI for the Aesthetic Wines content editor, based on
[satnaing/shadcn-admin](https://github.com/satnaing/shadcn-admin).
This repository is independent of the public website.

## Local development

Use Node.js 24 LTS (or Node.js 22.13+) and pnpm 11.25.0.

```sh
git clone git@github.com:aaronfranco/aestheticwines_admin.git
cd aestheticwines_admin
nvm install
nvm use
npm install --global pnpm@11.25.0
pnpm install --frozen-lockfile
pnpm dev
```

No environment variables are required for the overview or template examples.
To explore the optional Clerk examples, copy `.env.example` to `.env.local`
and provide your own Clerk publishable key. Never commit secrets or put
server credentials in `VITE_*` variables; those are exposed to the browser.

## Initial scope

- React 19, TypeScript, Vite 8, Tailwind CSS 4 and shadcn/ui.
- TanStack Router, React Query and React Hook Form.
- A branded overview, responsive sidebar, search, and light/dark themes.
- Upstream dashboard, tables, forms, and settings retained as template examples.
- Locked dependencies and GitHub Actions checks, browser tests, and build.

This is a development scaffold. Content editing, storage, uploads, publishing,
and production authentication are not connected. The upstream sign-in forms
and `_authenticated` layout are demos, not an access-control boundary. Do not
add production content or expose this as a production admin until server-side
authentication and authorization are implemented.

## Commands

```sh
pnpm dev                   # Development server
pnpm build                 # Typecheck and production build to dist/
pnpm preview               # Preview the production build
pnpm format:check          # Formatting check
pnpm lint                  # Upstream ESLint configuration
pnpm test:browser:install  # Install Chromium for existing browser tests
pnpm test                  # Run the inherited test suite
```

CI runs formatting, the inherited tests, and the production build. The upstream
ESLint setup is retained for local use.

## Project layout

- `src/features/overview/`: the new admin landing page.
- `src/features/`: upstream examples to adapt into content workflows.
- `src/routes/`: file-based routes; `src/routeTree.gen.ts` is generated.
- `src/components/ui/`: shared shadcn/ui primitives.
- `src/components/layout/`: admin shell and navigation.
- `src/components/layout/data/sidebar-data.ts`: sidebar and search entries.

Next work: implement content lists and edit forms, then connect authenticated
content/media APIs and preview/publish workflows to the website.

## Attribution

Seeded from shadcn-admin v2.2.1 at commit
`e16c87f213a5ba5e45964e9b67c792105ec74d26`. The original MIT license and
Sat Naing copyright notice are preserved in [LICENSE](LICENSE).
See [upstream notes](docs/UPSTREAM.md) before replacing customized UI primitives.
