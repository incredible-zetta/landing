<div align="center">

<img src="public/zetta-mark.png" alt="Zetta CRM" height="64" />

# Zetta CRM — Landing

**Marketing site for Zetta CRM, the open-source MCP backend for AI agents.**

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-deployed-F6921E?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)
[![Built with Astro](https://img.shields.io/badge/Astro-5-FF5D01?logo=astro&logoColor=white)](https://astro.build)

<sub>A partnership between <b>Incredible Zetta</b> and <a href="https://github.com/cds-id">Ciptadusa (CDS)</a></sub>

</div>

---

## Overview

This is the landing page for [Zetta CRM](https://github.com/incredible-zetta/crm) — a self-hosted Go MCP server that gives any AI agent a full CRM: contacts, email, campaigns, tracking, scheduling, and analytics.

The site communicates the product's value proposition to AI operators, vibecoders, and developers who use AI agents daily.

## Tech Stack

| Layer | Tool |
|-------|------|
| Framework | [Astro 5](https://astro.build) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) |
| Motion | [GSAP](https://gsap.com) + ScrollTrigger |
| Icons | [Lucide](https://lucide.dev) (inline SVG) |
| Hosting | Cloudflare Pages |
| DNS | Ciptadusa (CDS) Cloudflare |

## Development

```bash
# Install
npm install

# Dev server
npm run dev

# Build (static output → dist/)
npm run build

# Preview production build
npm run preview
```

## Deployment

Deployed automatically via Cloudflare Pages on push to `main`.

| Setting | Value |
|---------|-------|
| Build command | `npm run build` |
| Output directory | `dist` |
| Node version | `22` |

## Project Structure

```
src/
├── components/     # Astro components (Navbar, Hero, Features, etc.)
├── layouts/        # BaseLayout with SEO meta
├── lib/            # Data (data.ts), Icon renderer
├── pages/          # index.astro
└── styles/         # global.css (design tokens + utilities)
public/             # Static assets (logos, mascot, OG images)
```

## Brand

- **Primary color**: Electric lime `oklch(93.98% 0.2077 121.13)` — `#D7FF3F`
- **Background**: Deep dark `#0B0F1C`
- **Typography**: Inter + JetBrains Mono
- **Motion**: GSAP with reduced-motion respect

## Related

- [Zetta CRM Backend](https://github.com/incredible-zetta/crm) — Go MCP server (28 tools)
- [Ciptadusa](https://github.com/cds-id) — Partner organization

## License

MIT
