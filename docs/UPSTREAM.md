# Upstream notes

Source: https://github.com/satnaing/shadcn-admin

Version: 2.2.1; commit: e16c87f213a5ba5e45964e9b67c792105ec74d26.

The template is retained as a reference library while the content editor takes
shape. Demo routes and their mock data are not connected to production services.
The original project is licensed under MIT; retain its license notice.

## Customized shadcn/ui components

The upstream scroll-area, sonner, and separator components contain customizations.
Alert-dialog, calendar, command, dialog, dropdown-menu, select, table, sheet,
sidebar, and switch include right-to-left layout adjustments. Review these
changes before replacing components through the shadcn CLI.

## Validation

Verified with Node.js 24.4.1 and pnpm 11.25.0:

- Frozen-lockfile dependency installation passes.
- `pnpm build` passes (TypeScript and production bundle).
- `pnpm format:check` passes.
- `pnpm test` passes: 21 files, 130 tests.
- Local browser checks confirm the overview, sidebar, and example dashboard render.

The committed `pnpm-workspace.yaml` records build-script approvals for esbuild
and the optional Clerk integration so fresh installs are non-interactive.
