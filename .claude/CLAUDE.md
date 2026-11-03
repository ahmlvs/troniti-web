# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The public landing site for **troniti** ([troniti.com](https://troniti.com)) — a non-custodial
TRON yield-management service. **Live in production** on the custom domain. The repo was originally
forked from a studio-showcase Astro scaffold and has been fully rebranded into the troniti landing
(domain, content, palette, OG image are all troniti). The source-of-truth for design, copy, and
page structure is [docs/landing-brief.md](docs/landing-brief.md) — read it before content/layout changes.

## Commands

```bash
nvm use 22          # repo requires Node >= 22.12 (Astro 6); the default shell node is often older
npm install
npm run dev         # dev server at localhost:4321
npm run build       # static output → dist/
npm run preview     # serve the production build locally
npx astro check     # type-check .astro files (typescript + @astrojs/check are devDeps)
```

There are no unit tests or linters configured; `astro check` is the only static check.

## Architecture

Plain Astro 6 static site, Tailwind CSS v4 (via `@tailwindcss/vite`), zero client-side JS framework.

- [src/pages/](src/pages/) — file-based routes: `index.astro`, `privacy.astro`, `terms.astro`, `404.astro`.
- [src/layouts/BaseLayout.astro](src/layouts/BaseLayout.astro) — the single HTML shell: all `<head>`
  meta / OpenGraph / canonical tags, Google Fonts (Inter + JetBrains Mono), the GA tag (gated on
  `isProd`, so it only ships in the production build), and the `<slot>`.
- [src/components/](src/components/) — one component per section, composed in `index.astro` in order:
  Header · Hero · Problem · HowItWorks · TrustModel · Yield · TrackRecord · Pricing · FAQ · CTA · Footer.
  The TrustModel can/cannot permission card is the signature trust visual (the emotional core).
- [src/styles/global.css](src/styles/global.css) — design tokens as Tailwind v4 `@theme` CSS
  variables, used as utilities (`text-accent`, `bg-bg-card`, `border-border`). Edit tokens here, not
  inline hex. Also defines the `.mono` class (JetBrains Mono + tabular nums) for numbers / addresses /
  txids — per the brief, all figures render in mono.

### Palette (decided, not just brief-intent)

Dark zinc base, **deep garnet crimson accent `#b91c3c`** (`--color-accent`) used sparingly = brand,
never danger. `--color-warning` amber for attention (e.g. the waitlist "coming soon" badge),
`--color-negative` muted red for failures. **No green on the numbers** — troniti's figures are
monotonic-positive, so there is no P&L up/down coloring (this is why we don't copy TronSave's
green-forward palette; we model on TronScan's red identity instead). The one deliberate exception
is `--color-live` (green-500) — used *only* for the "live" system-status badge in TrackRecord, a
status signal, not a P&L color.

### Waitlist

The CTA waitlist form ([src/components/CTA.astro](src/components/CTA.astro)) is intentionally a
**disabled "coming soon" placeholder** — inputs are `disabled`, no real submit handler. To activate:
remove `disabled` and wire `action` to a real endpoint (Formspree / `api.troniti.com`).

### OG image

[public/images/og-image.png](public/images/og-image.png) (1200×630) is generated from the editable
source [public/images/og-image.svg](public/images/og-image.svg) via `sharp`. To regenerate after
editing the SVG:

```bash
node -e "require('sharp')('public/images/og-image.svg',{density:200}).resize(1200,630).png().toFile('public/images/og-image.png')"
```

## Domain & deploy

- Deploys to **Cloudflare Pages** (project `troniti-web`, connected to this repo), built on push to
  `main`: `npm run build` → `dist/`, Node from [.nvmrc](.nvmrc). Moved off GitHub Pages on
  2026-11-03, because GitHub Pages cannot send response headers and the site needs HSTS:
  [public/_headers](public/_headers) sets it, with the basic security headers.
- DNS is on **Cloudflare**: apex `troniti.com` is the Pages project's custom domain (a proxied
  CNAME to `troniti-web.pages.dev`, made by Pages). `www` is a proxied CNAME to the apex, and a
  Redirect Rule sends it there with 301, path and query string kept
  (`http*://www.troniti.com/*` → `https://troniti.com/${2}`).
- troniti.com sends no mail and says so: SPF `v=spf1 -all`, DMARC `p=reject` (2026-11-03). Add a
  mail service and both records change with it. The domain stays verified in GitHub's Pages
  settings, so no other GitHub account can publish on it.
- `site:` in [astro.config.mjs](astro.config.mjs) drives sitemap + canonical generation. SEO-critical
  absolute URLs (og:image, canonical in `BaseLayout.astro`, sitemap in `public/robots.txt`) are
  hardcoded to the domain — update all of them together if the domain ever changes.

## Conventions

- Match the existing component style: Astro components with a minimal/empty frontmatter fence and
  Tailwind utility classes inline. No CSS modules or styled-components.
- Use theme tokens (`accent`, `bg-card`, `text-muted`, `border`) over raw colors so the palette stays
  centralized. Apply `.mono` to any numeric/address/txid text.
