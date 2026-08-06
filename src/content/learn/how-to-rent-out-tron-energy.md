---
title: "How to rent out TRON energy — step by step"
description: "The manual path: stake for energy, price by net, fill orders from your own wallet, verify payouts on-chain — and the one thing you never do: send TRX to anyone."
updated: 2026-08-06
tags: ["energy", "basics"]
order: 5
figure:
  title: "the manual loop"
  lines:
    - { l: "stake → energy", r: "once" }
    - { l: "price by net", r: "gross × seller share" }
    - { l: "fill orders", r: "signed from YOUR wallet ✓", tone: "ok" }
    - { l: "verify payouts", r: "on-chain, every one" }
    - { l: "send TRX to anyone", r: "never ✗", tone: "bad" }
---

Renting out energy (lending it, in some markets' wording) needs no operator and no
special access — just a wallet, staked TRX and some daily discipline. Here's the
honest manual path, the same loop we run in software.

## Step 1 — stake for energy

When staking, pick **energy** as the resource (votes come with the stake either way —
cast them, that's the ~3.3% baseline). Your daily energy allotment is proportional to
your share of all staked TRX; it regenerates every 24 hours and expires if unused.
The basics live in [Stake 2.0 explained](/learn/tron-stake-2-0-explained/).

## Step 2 — pick your venue

Public order books (TronEnergize, TEM) let you fill orders straight away; TronSave
runs on API keys for sellers. Mind the floors: TronSave wants ~100k energy per fill,
TEM ~50k — with a small stake, start where small fills are taken. The measured
numbers per venue are in
[TRON energy markets compared](/learn/tron-energy-markets-compared/).

## Step 3 — price by net, not by the book

The listed price is gross; you receive **gross × seller share** (~70–75% depending on
the venue, minus any flat fee). Always compare venues on the net number — a better
headline price can pay worse after the cut.

## Step 4 — fill: sign the delegation from your own wallet

A fill is a `DelegateResource` transaction **you sign from your own wallet** — the
energy delegates to the buyer for a fixed term (days; the protocol caps locks at 30),
and the market pays you TRX. Two safety anchors:

- Delegation is not a transfer: your TRX stays staked, in your wallet, still voting.
- **Renting out energy never requires sending TRX to anyone.** Any "activation fee"
  or "deposit to start earning" is a scam, full stop.

## Step 5 — verify the payout on-chain

The payout arrives as a TRX transfer from the market's payout wallet. Check it against
your expected net — small drift (fractions of a percent) is normal, since markets
re-derive credited energy at their own conversion. The market's dashboard is a claim;
the transfer in your wallet is the fact.

## Step 6 — the daily part

Reclaim expired delegations, re-list freed energy, claim voting rewards inside the
24-hour window, restake, re-vote, and keep an eye on three order books' prices. Each
step is small; the discipline is the hard part — skip a few days and the idle energy
simply evaporates unearned.

## The alternative to the discipline

That loop is exactly what [troniti's engine](/#engine) runs automatically — same
steps, priced net-of-cut, verified on-chain, every day. If you hand it to any
operator (us included), read the grant first:
[how to verify what a TRON permission can do](/learn/verify-tron-permission/).
