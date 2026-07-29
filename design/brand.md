# troniti brand — the terminal system

One visual system across every surface: X/CMC graphics (born there, 2026-07), the landing
(`troniti.com`), and the cabinet (`app.troniti.com`, repo `troniti-app`). Reference exports
live in [brand/](brand/) — extract tokens from those images, never eyeball.

**The idea:** troniti IS a terminal — an engine with timers, logs, and on-chain-verifiable
actions. The aesthetic documents that, it doesn't cosplay it: near-black ink, a warm orange
brand accent, mono type for everything machine-made, and terminal artifacts (a `$` prompt,
a block cursor ▮) used as *seasoning* — hero, badges, figures, statuses — never as the whole
meal. Quiet surfaces (FAQ, legal, billing tables) stay plain typography.

## Tokens (extracted from brand/ images)

| token | hex | maps to | use |
|---|---|---|---|
| `ink` (bg) | `#0d0f14` | page + terminal background | the base surface everywhere |
| `bg-card` | `#18181b` | zinc-900 | default cards/panels |
| `bg-brand-soft` | `#241c14` | warm dark | brand-tinted panel fill (the "CAN" card) — sparingly |
| `border` | `#27272a` | zinc-800 | 1px card borders |
| `text` | `#f4f4f5` | zinc-100 | primary text |
| `text-soft` | `#d4d4d8` | zinc-300 | terminal body text |
| `text-muted` | `#a1a1aa` / `#8b8b93` | zinc-400/­ish | secondary text |
| **`brand`** | **`#f7941d`** | warm orange | THE accent: emphasis words, borders, CTA fills, topbars |
| `brand-hover` | `#f9a63f` | lighter orange | hover states of brand fills |
| `negative` | `#ef4444` | red-500 | danger / CANNOT / genuine failure — **never brand** |
| `live` | `#22c55e` | green-500 | alive / allowed / positive status: `$` prompt, ✓, cursor, Live badge |
| `warning` | `#facc15` | yellow-400 | attention (low runway). Yellow, NOT amber — amber reads as brand |

## Semantics (the whole point)

- **Orange = brand.** Identity, emphasis, primary buttons. Never used for states.
- **Red = danger only.** Freed from brand duty (the old garnet identity is retired) — `✗`,
  CANNOT, failures. This separation is why the system reads instantly.
- **Green = alive/allowed.** `$`, ✓, block cursor, live badges. Not P&L.
- **On-orange text is ink/black** (`#0d0f14`), never white — contrast (white on `#f7941d`
  is ~1.9:1, fails WCAG; ink is ~13:1). See the banner: black terminal on orange.

## Typography

- **JetBrains Mono** — everything machine-made: numbers, addresses, txids, terminal lines,
  `$` headings, badges. `tnum` on.
- **Inter** — human prose (paragraphs, FAQ, legal).

## Terminal artifacts (dosage rules)

- `$ heading` with one or two accent words (orange = emphasis, red = the scary word).
- Block cursor `▮` in `live` green as a full stop after status lines.
- macOS traffic lights only on actual terminal-window frames (banner style), not on cards.
- Top accent bar (4px, brand orange) on graphics/pages that need instant brand recognition.

## Logo

The orbit mark keeps its geometry; the palette moves: core + near body in brand orange
(`#f7941d` / `#f9a63f`), far body stays white, orbit stroke stays zinc (`#52525b`).
Canonical source: `src/components/Logo.astro` (landing) — keep `public/favicon.svg` and the
cabinet's Logo component in sync with it.

## Where this applies

1. **Landing** (`troniti-web`): tokens in `src/styles/global.css` `@theme` — done with the
   2026-07 rebrand.
2. **Cabinet** (`troniti-app`): same tokens in its Tailwind theme (`--brand`, `--negative`,
   etc.) — mirror this file's table.
3. **X/CMC graphics**: the reference set in [brand/](brand/); new graphics reuse these tokens.
