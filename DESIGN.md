# Design

## Source

Derived from `reff/README.md`, `reff/colors_and_type.css`, and current Astro implementation.

## Visual Theme

Dark, luminous, glassmorphic anime-tech. Physical scene: AI operator reviewing private agent/customer data on a large monitor in a dim workspace, moving fast but needing confidence that data stays inside own infrastructure. Dark theme is correct because ambient scene, glow language, and operator context all reinforce high-contrast night-work tooling.

## Color Strategy

Committed dark violet-blue system. Near-black background carries most of surface, purple/blue/cyan gradients carry brand and data energy. Pink is rare highlight only. Use OKLCH-compatible tinted neutrals in spirit, no pure black/white in new work.

### Core Tokens

- Background: `#0B0F1C`
- Surface: `#11162A`
- Elevated surface: `#171C33`
- Border: `#2A3150`
- Primary: `#7B5CFF`
- Secondary: `#4F8CFF`
- Cyan accent: `#00D5FF`
- Pink accent: `#FF3CF7`
- Primary text: `#F4F6FF`
- Secondary text: `#A6ACCE`
- Muted text: `#6B7096`
- Success: `#22D3A1`
- Warning: `#F5C542`
- Danger: `#FF5C7C`

## Typography

Use Inter for UI and marketing. Use JetBrains Mono for snippets, infra labels, IDs, API hints. Display scale should feel tight and technical, not editorial. Keep body line length under 75ch. Headings use strong scale and weight contrast.

## Layout

8pt grid. Landing sections use generous vertical rhythm, wide gutters, and asymmetric hero balance. Avoid identical card grids where possible; when cards remain, vary density and content roles. Keep mobile layouts single-column, readable, and touch-safe.

## Components

- Buttons: rounded 8-12px, primary gradient purple to blue, hover glow, clear focus ring.
- Cards/panels: translucent dark surface, 1px border, soft elevation, limited blur.
- Badges: pill, uppercase or concise label, soft brand/status fill.
- Icons: Lucide only, outline, 24px grid, 1.5px stroke, rounded caps/joins.
- Mascot/portrait: anime-tech portrait should sit transparent over background, not boxed in a harsh opaque card.

## Motion

Motion personality: corporate/energetic hybrid. Fast, controlled, technical. Use GSAP for page-load sequencing, scroll-triggered reveals, and subtle parallax. Animate transforms and opacity only. Use `power4.out`, `expo.out`, or existing `--ease-out`. No bounce, no elastic, no endless decorative loops. Respect `prefers-reduced-motion` by showing final state.

## Responsive Rules

Mobile first. No horizontal scroll. Touch targets minimum 44px. Hero copy remains primary, mascot becomes supportive and transparent. Nav should not crowd viewport. Dashboard mock and dense panels must scale or stack without clipped content.
