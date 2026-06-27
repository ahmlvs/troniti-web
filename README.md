# troniti.com

Public landing site for **[troniti](https://troniti.com)** — a non-custodial TRON yield-management service.

troniti maximizes the TRX-denominated yield on staked TRX — claiming voting rewards,
restaking, re-voting, and renting out idle energy — through a restricted on-chain permission
that **can never move the client's funds**. The client keeps custody at all times.

## Tech Stack

- [Astro](https://astro.build) 6 — static site generator
- [Tailwind CSS](https://tailwindcss.com) v4 — styling (design tokens in `src/styles/global.css`)

## Development

```bash
nvm use 22         # requires Node.js >= 22.12 (Astro 6)
npm install
npm run dev        # dev server at localhost:4321
```

## Build

```bash
npm run build      # static output → dist/
npm run preview    # preview the production build locally
npm run astro check  # type-check .astro files
```

## Deploy

GitHub Pages via GitHub Actions — auto-deploys on push to `main`.
Custom domain `troniti.com` is bound via [public/CNAME](public/CNAME); keep `site:` in
[astro.config.mjs](astro.config.mjs) in sync with it.

## Structure

- `src/pages/` — routes (`index.astro`, `privacy.astro`, `terms.astro`, `404.astro`)
- `src/layouts/BaseLayout.astro` — HTML shell: head meta / OpenGraph / fonts
- `src/components/` — one component per landing section (Hero, HowItWorks, TrustModel, Yield,
  TrackRecord, Pricing, FAQ, CTA, Footer)
- `src/styles/global.css` — design tokens (`@theme` CSS variables)
