---
title: "How much does renting TRON energy actually pay?"
description: "Worked numbers by wallet size: what 10k, 100k and 1M staked TRX earn per year from energy rental plus voting — net of market cuts, and what moves the rate."
updated: 2026-08-06
tags: ["energy", "markets"]
order: 3
figure:
  title: "what a stake earns, per year"
  lines:
    - { l: "10,000 TRX", r: "~1,400 TRX/yr" }
    - { l: "100,000 TRX", r: "~15,200 TRX/yr", tone: "accent" }
    - { l: "1,000,000 TRX", r: "~152,000 TRX/yr" }
    - { l: "of which energy", r: "about 4/5 of the total" }
    - { l: "a live model", r: "not a fixed APY ✗", tone: "bad" }
---

Short answer: at recent market rates, staked TRX earns **~15% a year combined** —
roughly ~3.3% from voting and ~11.9% from renting energy out (you'll also see it
called energy *lending* — same mechanism). Here's what that looks like in actual TRX,
by wallet size, and what makes the number move.

## The worked example: 100,000 TRX

- **Voting rewards:** ~3,300 TRX/yr — about 9 TRX landing every day, claimable once
  per 24 hours, compounding only if someone claims, restakes and re-votes daily.
- **Energy rental:** ~11,900 TRX/yr net — call it ~33 TRX/day on average, arriving as
  payout transfers when fills happen, not as a smooth drip.
- **Together: ~15,200 TRX/yr**, or ~1,270 TRX a month. Energy is about four fifths of
  the total — which is why "just staking" leaves most of the money on the table.

Net matters: order books quote gross, and markets keep 25–30% of every deal. All
numbers above are after those cuts — the arithmetic behind that is in
[TRON energy markets compared](/learn/tron-energy-markets-compared/).

## What changes with size

| stake         | a year, roughly | the catch                                    |
| ------------- | --------------- | -------------------------------------------- |
| 10,000 TRX    | ~1,400 TRX      | fewer venues accept your fill sizes          |
| 100,000 TRX   | ~15,200 TRX     | the model rate — all venues in reach         |
| 1,000,000 TRX | ~152,000 TRX    | fills spread across venues and days          |

The mechanics behind the first row: markets set minimum fill sizes (TronSave ~100k
energy per fill, TEM ~50k), so a small stake can only sell where small orders are
taken — which trims the effective rate below the model. From ~100,000 TRX everything
is in reach and the model rate applies. At whale sizes the question flips to demand
depth: the energy sells, just across more orders and venues.

## What moves the rate

Energy prices float like any market: up when USDT traffic runs hot and demand for
cheap transfers grows, down when more TRX gets staked and supply expands. Voting
rewards are steadier but drift with total network stake too. That's why everything
here is a **live model, not an APY promise** — the honest way to read it is "this is
what the machine earns at current prices", re-measured every day.

## Seeing your own number

Generic math only goes so far — the [dashboard](/#how) reads your actual stake and
shows what it produces, and every rental it books is backed by an on-chain payout you
can verify. For the mechanism behind all of this, start at
[how TRON energy rental works](/learn/how-tron-energy-rental-works/).
