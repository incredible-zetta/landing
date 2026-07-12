# Design

## Source

Default [shadcn/ui](https://ui.shadcn.com) design system (`radix-nova` style, neutral base) on Astro 5 + Tailwind 4 + React islands.

## Visual Theme

Content-first product landing. Surfaces use shadcn tokens (`background`, `card`, `muted`, `border`). No decorative illustrations, mascots, starfields, or gradient glows. Light mode is the default; users can toggle dark via the navbar.

## Color Strategy

Default shadcn neutral palette with CSS variables. Theme is stored in `localStorage` (`theme=light|dark`). Prefer theme tokens over ad-hoc hex:

- `bg-background` / `text-foreground`
- `bg-card` / `text-card-foreground`
- `text-muted-foreground`
- `border-border` / `ring-ring`
- `bg-primary` / `text-primary-foreground`

## Typography

Geist Variable for UI and headings. System mono stack for code snippets and release tags. Keep body line length readable; headings use tracking-tight weight contrast.

## Layout

Comfortable density (`gap-3`–`gap-8`, `p-6`/`p-8`). Max content width ~1120px via `container-page`. Mobile-first single column; trust/features/deploy grids expand at `sm`/`lg`.

## Components

Use shadcn primitives from `src/components/ui/`:

- `Button` / `buttonVariants` — primary and outline CTAs
- `Badge` / `badgeVariants` — release labels, tags, eyebrows (`~/components/ui/badge`)
- `Card` (+ Header/Title/Description/Content/Footer) — section surfaces
- `Separator` — footer divider
- `Sheet` — mobile navigation

Directory badges (Product Hunt, Launchpadly) live in `DirectoryBadges.astro` with official embed paths.

## Motion

Keep motion minimal. Prefer CSS transitions on interactive controls. Respect `prefers-reduced-motion`.

## Responsive Rules

Mobile first. Touch targets ≥44px on primary CTAs. Sticky header with `Sheet` menu below `lg`.
