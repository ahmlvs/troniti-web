# Landing design + copy — `troniti.com` (Phase W / W1)

> Source-of-truth for the public landing. **Port this into a separate repo `troniti-web`** (Astro,
> static, deployed to a CDN) and build it there with Claude. Self-contained — everything Claude needs
> about the product is below. Track-record numbers are **hardcoded for now**; later they come from
> `api.troniti.com/track-record`.

## What troniti is (one paragraph)

A **non-custodial** TRON yield-management service. It maximizes the TRX-denominated yield on a holder's
staked TRX — claiming voting rewards, restaking, re-voting, and renting out idle energy — through a
**restricted on-chain permission that can never move the client's funds**. The client keeps custody at
all times; troniti is an *active operator*, not an owner.

## The positioning (why anyone cares)

- **More yield:** ~15% combined TRX yield (≈3.3% voting + ≈11.9% energy rental) vs the ~3% most stakers
  get from voting alone. **Energy rental is the engine (~4/5 of the value)** and almost nobody does it
  well.
- **Zero custody risk — the differentiator:** the operator's permission allows exactly five actions
  (stake, vote, claim, delegate/undelegate energy) and **cannot** transfer, unstake, or change
  permissions. It is **on-chain verifiable** and **revocable anytime**. This is the whole pitch: *the
  upside of a managed strategy with none of the "give them your coins" risk.*
- **Hands-off:** staking, claiming, re-voting, and energy rental are continuous and fiddly (24h claim
  limits, bandwidth budgeting, 30-day delegation cycles). troniti runs it automatically.
- **Transparent pricing:** a flat **2%/year** fee on capital under management, prepaid as metered
  credit — **not** a revenue share. You keep the yield.

## The trust model (make this unmissable)

The heart of the landing. Show, concretely, what the granted permission **can** and **cannot** do:

| Can do (the 5 ops) | Cannot do (ever) |
|---|---|
| `FreezeBalanceV2` — stake | `Transfer` / `TransferAsset` — move TRX/tokens out |
| `VoteWitness` — vote for SRs | `UnfreezeBalanceV2` — unstake your principal |
| `WithdrawBalance` — claim rewards | `AccountPermissionUpdate` — change who controls the account |
| `DelegateResource` — rent out energy | |
| `UnDelegateResource` — reclaim energy | |

Threshold 1, one key, weight 1 — a strictly smaller op set than a full account. The funds **never
leave the client's wallet**; rental income and rewards land **in the client's wallet**. Revoke by
removing the permission in any TRON wallet. (This is the trust edge vs custodial managers and vs
competitors whose grant asks for `UnfreezeBalanceV2`.)

## Page structure (sections, in order)

1. **Hero** — headline + subhead + primary CTA + a "non-custodial · you keep your keys" trust badge.
2. **The problem** — idle/voting-only TRX underperforms; managing stake+vote+energy is complex and
   continuous.
3. **How it works (3 steps)** — `Stake your TRX` → `Grant a restricted permission` → `troniti maximizes
   yield (claim → restake → vote + rent energy)`. Simple icons/diagram.
4. **Trust model** — the can/cannot table above + "on-chain verifiable · revocable anytime". The
   emotional core. Link to a real on-chain permission as proof.
5. **Yield breakdown** — voting ~3.3% + energy ~11.9% ≈ ~15%; energy is the engine. Framed as the model
   / "live on mainnet", not a guarantee.
6. **Track record** — "live on mainnet" + a few real on-chain proof txids (delegation + payout) +
   capital managed. Honest framing (see the hardcoded block below); the *method* is the proof, not the
   (currently small) absolute sums.
7. **Pricing** — 2%/year AUM, prepaid credit, no profit share. One clear sentence + a small example.
8. **FAQ** — custody, "can you steal my funds?", revocation, supported chain, minimums.
9. **CTA / waitlist** — email capture and/or "Connect wallet" → `app.troniti.com`.
10. **Footer** — links, on-chain proofs, contact, socials (@ahmlvs).

## Draft copy

**Hero**
- Headline: **Earn more on your TRX. Keep your keys.**
- Subhead: *troniti maximizes the yield on your staked TRX — claiming, restaking, voting, and renting
  out energy — through an on-chain permission that can never move your funds.*
- CTA: **Join the waitlist** (secondary: *See how it works*).
- Badge: **Non-custodial — you keep custody, always.**

**How it works**
1. *Stake your TRX* — you stake in your own wallet; nothing is sent to us.
2. *Grant a restricted permission* — a 5-action operator permission: stake, vote, claim, rent energy.
   No transfers, no unstaking, no account changes.
3. *We maximize your yield* — continuous claim → restake → re-vote, plus renting your idle energy. All
   rewards and rental income land in **your** wallet.

**Trust model**
- *You stay in control.* troniti operates your stake but can never move it. The permission is on-chain,
  inspectable, and revocable in seconds.
- *The five things we can do — and the things we can't.* (render the table)

**Yield**
- *~15% TRX yield, combined.* Voting rewards (~3.3%) plus energy rental (~11.9%) — the part almost
  nobody optimizes. We do.

**Pricing**
- *2% per year, on the capital we manage. Prepaid. No profit share — you keep the yield.*

**FAQ (seed)**
- *Is this custodial?* No. You keep your keys; we hold a restricted permission, not your funds.
- *Can troniti move or unstake my TRX?* No — the permission has no Transfer or Unfreeze rights. Verify
  it on-chain.
- *How do I stop?* Remove the permission in any TRON wallet, anytime.
- *Which chain?* TRON (Stake 2.0).
- *Is there a minimum?* (TBD — set when onboarding opens.)

## Track-record block (hardcoded for now)

Frame as "live on mainnet — verify every number on-chain." Use the **real** proofs we already have;
keep absolute sums honest (they're small while we onboard):

```
Status:        Live on TRON mainnet
Method:        Non-custodial restricted permission (5 ops, on-chain verifiable)
Proof (sample): delegate txid 5091276e7f6da12426c92dbde2573998fbafec9d28297f434103b333172a9d26
                payout to client wallet (energy rental), TronEnergize order #47375
Yield model:   ~15% combined (voting ~3.3% + energy ~11.9%)
```

(When `api.troniti.com/track-record` exists, replace the hardcoded numbers with a fetch; the shape is
in [../api.md](../api.md).)

## Visual style (UI reference)

**Vision:** a serious on-chain operations tool — dark, precise, **mono-numbers-forward** — with a
confident **TronScan-red identity used sparingly** (identity, not alarm). Model the look on **TronScan**
— **the same brand as the cabinet** (which replicates TronScan's panels), so landing and app read as
**one product**.

**Take from TronScan** (tronscan.org): the restraint. Dark theme, data-forward, everything on clean
**cards** (1px `zinc-800` borders, `rounded-xl`, low elevation, generous whitespace), **monospace for
numbers / addresses / txids**, **pill badges** for status, tidy **data tables**, minimal-but-confident
buttons. It reads as a real tool, not a hype site — exactly our register. **Reuse the cabinet's stat-tile
and table components** where the landing shows numbers (yield, track-record) — shared design tokens, one
brand. (We add a signature *trust* visual, below — that's ours, not TronScan's.)

**Color — red as identity, no green.** A refined crimson (à la **TronScan**, the block explorer — it
borrows the "official, on-chain, verifiable" association that matches our pitch) on a dark neutral base.
Principle: **red = brand, not danger** — keep it to accents (logo, primary CTA, links, active states, a
"live" dot), never flood the data. And because our numbers are **monotonic-positive** (income accrues,
credit depletes) there's no P&L up/down — so we **drop green entirely**: figures in bright neutral mono,
**amber** as the one "attention" state (low runway), a **muted red** only for genuine failures.

| token | role | value |
|---|---|---|
| `bg` | page background | near-black `zinc-950` (#09090b) |
| `surface` · `border` | cards / panels | `zinc-900` · `zinc-800` |
| `text` · `muted` | text | `zinc-100` · `zinc-400` |
| `brand` (RED) | CTA, links, active, "live" — **used sparingly** | refined crimson ~`#E11D2E` (red-600), not neon |
| `warning` | attention (low runway) | amber-500 |
| `negative` | genuine failure (failed tx) | muted red ~`#9f1239` |

No green anywhere. Optional: a faint red glow/gradient in the hero only.

**Type & elements:** UI sans **Inter / Geist**; numbers/addresses/txids in **mono** (Geist Mono /
JetBrains Mono) — mono = "precise, on-chain", and the figures are the hero. The headline yield/income
number is big, mono, confident, with a small red "live" pill.

**Signature visual — the trust table.** The "5 things we can do / 3 we can never do" permission table
(check/cross icons) is the brand's emotional core and our differentiator vs custodial managers — design
it as a **showpiece** here (a reassuring badge in the cabinet).

**Shared tokens + craft bar.** Define palette/type/radii as design tokens (Tailwind theme / CSS
variables) shared with the cabinet, so both are visibly one brand. Aim for the polish of TronScan (red +
dark + data tables) and Linear / Vercel dashboards (dark, restrained, great type).

## Design / SEO notes

- **Astro, static, CDN.** Fast, crawlable, great Lighthouse.
- Strong meta + OpenGraph (title, description, OG image with the "non-custodial" hook).
- Trust-forward visual language: the can/cannot table and a permission-diagram are the hero assets.
- One primary CTA repeated (waitlist / connect). Keep it short and credible — under-promise on
  numbers, over-deliver on the trust story.

## Suggested Astro structure

```
src/
  pages/index.astro
  components/ Hero · HowItWorks · TrustModel · Yield · TrackRecord · Pricing · FAQ · CTA · Footer
  layouts/Base.astro            # meta/OG, fonts, analytics
  content/                      # FAQ items, copy as MD if useful
```

## Do NOT copy (our differentiators vs TronSave's seller UX)
- Their permission grant asks for `UnfreezeBalanceV2`; **ours never does** — our smaller op set is the
  trust edge. Our grant screen shows strictly fewer powers.
- Their billing is a ~25% revenue share; **ours is a flat 2%/yr AUM prepaid credit.** Pricing copy must
  reflect metered credit, not a profit split.
