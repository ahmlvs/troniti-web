---
title: "Is renting out TRON energy safe?"
description: "What actually leaves your wallet (nothing), what a delegation can and can't do, the 30-day cap, and how to vet anyone who operates for you."
updated: 2026-08-01
tags: ["safety", "energy"]
order: 4
figure:
  title: "risk map"
  lines:
    - { l: "your TRX principal", r: "never moves ✓", tone: "ok" }
    - { l: "delegated energy", r: "busy ≤ 30 days" }
    - { l: "bad operator, worst case", r: "delayed yield ✗", tone: "bad" }
    - { l: "operator vanishes", r: "delegations expire ✓", tone: "ok" }
    - { l: "rule of thumb", r: "never send TRX to anyone", tone: "accent" }
---

"Renting out" sounds like lending someone your money. It isn't — and that difference is
most of the answer. Let's walk the actual risk surfaces, one by one, with their bounds.

## What actually leaves your wallet

Nothing. Renting out energy is an on-chain delegation (`DelegateResource`): it grants
the **use** of your energy to another address for a fixed term. Your TRX stays staked,
in your wallet, still voting, still yours.

The renter cannot move your TRX, cannot extend the lock, cannot pass the energy on to
someone else, and cannot touch anything else in your account. When the term ends, the
delegation expires by itself — no action needed from either side.

## Risk 1: your resource is busy for a while

A delegation locks that slice of your stake until its term ends. The protocol caps any
lock at **30 days**; in practice market deals run much shorter. While delegated, that
slice can't be unstaked and its energy isn't yours to spend.

Note what this is: not a risk of loss — it's precisely the service you're being paid
for. It matters only for liquidity planning: if you might need a fast exit, remember
the order is delegation term first, then [TRON's own 14-day unstake
wait](/learn/tron-stake-2-0-explained/).

## Risk 2: economics, not custody

You can rent out energy at a bad price. Order books show **gross** prices — markets
keep a share of every deal, typically 25–30% — and rates float with supply and demand.
Renting too cheap, or reading gross as net, quietly shaves the yield.
([How the market and the math actually work.](/learn/how-tron-energy-rental-works/))

None of this touches your principal. It moves the yield number, nothing else.

## Risk 3: whoever operates for you

Renting out by hand is safe by construction — but it's a daily job, so many holders
hand it to an operator. At that moment the entire question becomes: **what exactly did
you sign?**

A safe operator permission allows exactly five operations — stake, vote, claim,
delegate, reclaim — and nothing else. No `Transfer`. No `UnfreezeBalanceV2`. No
`AccountPermissionUpdate`. It's inspectable on-chain and revocable with your own key at
any second. ([Here's ours, as a live example.](/#trust))

With a grant shaped like that, the worst cases are narrow:

- **Operator gets hacked** — the attacker still can't move funds; the most they can do
  is delay a slice of your resource yield, bounded by the 30-day cap.
- **Operator disappears** — delegations expire on their own, and your stake goes back
  to earning plain voting rewards until you revoke or take over.

Red flags, by contrast: any service that asks for withdrawal or unstaking rights, wants
to "hold" your TRX, or asks for a seed phrase. Walk away — none of that is needed to
operate a stake.

## Risk 4: what nothing protects you from

Honesty section. Renting energy doesn't hedge the TRX price — your capital is in TRX
either way. And rental rates are a market: if total staked energy grows faster than
USDT traffic, rates drift down. That's yield variance, not a safety hole.

One genuine safety rule, because scams love this niche: **renting out energy never
requires sending TRX to anyone.** Any "activation fee", "unlock payment" or "deposit to
start earning" is theft with extra steps.

## The five questions to ask any service

1. Can it transfer my funds? — must be *no, provably*.
2. Can it unstake my principal? — *no*.
3. Can it change my account's permissions? — *no*.
4. Can I verify all of that on-chain, myself? — *yes*.
5. What happens if the service vanishes tomorrow? — *delegations expire, stake reverts
   to plain voting, nothing is stranded*.

If a service can't answer all five in one screen, that's the answer. Don't trust —
verify.
