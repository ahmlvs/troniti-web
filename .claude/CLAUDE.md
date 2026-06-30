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

- Deploys to **GitHub Pages via GitHub Actions** ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)),
  auto-triggered on push to `main`. The job builds and publishes `dist/`. Pages source must be
  "GitHub Actions" in repo settings.
- DNS is on **Cloudflare**: apex `troniti.com` → 4 GitHub Pages A records (185.199.108–111.153),
  `www` → CNAME `ahmlvs.github.io`; both **DNS only (grey cloud)** so GitHub can issue the cert.
  GitHub auto-redirects `www` → apex because the custom domain is the apex.
- The custom domain is bound by [public/CNAME](public/CNAME) (`troniti.com`), copied into `dist/` at
  build — this is what GitHub Pages reads. A domain can be claimed by only one repo.
- `site:` in [astro.config.mjs](astro.config.mjs) drives sitemap + canonical generation. SEO-critical
  absolute URLs (og:image, canonical in `BaseLayout.astro`, sitemap in `public/robots.txt`) are
  hardcoded to the domain — update all of them together if the domain ever changes.

## Conventions

- Match the existing component style: Astro components with a minimal/empty frontmatter fence and
  Tailwind utility classes inline. No CSS modules or styled-components.
- Use theme tokens (`accent`, `bg-card`, `text-muted`, `border`) over raw colors so the palette stays
  centralized. Apply `.mono` to any numeric/address/txid text.
