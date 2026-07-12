# Design

## Source

Default [shadcn/ui](https://ui.shadcn.com) design system (`radix-nova` style, neutral base) on Astro 5 + Tailwind 4 + React islands.

Motion language is inspired by editorial full-scroll sites (e.g. Studio Modular): pinned story beats, text reveals, parallax planes, marquees, and stacking panels — adapted to a product landing, not a design portfolio.

## Visual Theme

Brand-first product landing. Surfaces use shadcn tokens (`background`, `card`, `muted`, `border`). Atmosphere comes from layered grid/noise fields and full-bleed brand planes — not decorative illustrations, mascots, starfields, or gradient glows. Light mode is the default; users can toggle dark via the navbar.

## Color Strategy

Default shadcn neutral palette with CSS variables. Theme is stored in `localStorage` (`theme=light|dark`). Prefer theme tokens over ad-hoc hex:

- `bg-background` / `text-foreground`
- `bg-card` / `text-card-foreground`
- `text-muted-foreground`
- `border-border` / `ring-ring`
- `bg-primary` / `text-primary-foreground`

Avoid purple-on-white themes, cream/terracotta editorial clichés, and neon crypto looks.

## Typography

Geist Variable for UI and headings. System mono stack for code snippets and release tags. Hero brand wordmark uses oversized tracking-tight weight contrast. Keep body line length readable.

## Layout

Comfortable density with intentional full-bleed sections. Max content width ~1120px via `container-page`; hero and story bands may break out edge-to-edge. Mobile-first single column; capability grids expand at `sm`/`lg`.

Hero budget: brand, one headline, one supporting sentence, one CTA group, one dominant visual plane. No stats strips, promo chips, or secondary marketing in the first viewport.

## Components

Use shadcn primitives from `src/components/ui/`:

- `Button` / `buttonVariants` — primary and outline CTAs
- `Badge` / `badgeVariants` — release labels, tags, eyebrows (`~/components/ui/badge`)
- `Card` (+ Header/Title/Description/Content/Footer) — interactive / docs surfaces only (not hero)
- `Separator` — footer divider
- `Sheet` — mobile navigation

Directory badges (Product Hunt, Launchpadly) live in `DirectoryBadges.astro` with official embed paths.

## Motion

GSAP + ScrollTrigger drive scroll interaction:

- Fade/rise reveals on section copy
- Parallax on hero/story visual planes
- Horizontal capability marquee
- Stacking capability panels on desktop
- Respect `prefers-reduced-motion` (skip ScrollTrigger, show final states)

Prefer transform/opacity. Keep interactive control transitions on CSS.

## Responsive Rules

Mobile first. Touch targets ≥44px on primary CTAs. Sticky header with `Sheet` menu below `lg`. Disable pinning/stacking on small viewports when it hurts readability.
