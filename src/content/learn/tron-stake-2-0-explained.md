---
title: "TRON Stake 2.0: votes, energy, bandwidth — explained"
description: "What staking TRX actually gives you: votes and voting rewards, a daily resource (energy or bandwidth), and a 14-day exit — all in your own wallet."
updated: 2026-08-01
tags: ["basics", "staking"]
order: 1
figure:
  title: "stake 2.0 — what you get"
  lines:
    - { l: "you stake TRX", r: "stays in your wallet ✓", tone: "ok" }
    - { l: "you get votes", r: "rewards ~3.3%/yr" }
    - { l: "you get a resource", r: "energy / bandwidth · daily" }
    - { l: "you unstake", r: "14-day protocol wait" }
    - { l: "the bigger half", r: "the resource", tone: "accent" }
---

Plain TRX produces nothing. Staked, the same TRX keeps sitting in your wallet — and
starts producing two things at once. Here's the whole model in one read.

## Staking on TRON doesn't send your TRX anywhere

Under Stake 2.0 — TRON's staking model since 2023 — staking is an operation your wallet
performs on itself. The TRX is frozen in place, in your own account: there's no staking
contract to deposit into and no validator holding your coins. Unstaking is one
transaction away (plus a waiting period — below).

That's worth pausing on, because it's different from most chains: on TRON, "staked"
never means "sent somewhere".

## Thing one: votes

Every staked TRX gives you one vote. You cast votes for **super representatives** — the
block producers — and the network pays voting rewards for backing them. In practice
that lands around **~3.3% a year**, varying a little by validator and their commission.

Two mechanics people miss:

- Rewards aren't streamed — they accumulate and must be **claimed**, and a claim is
  allowed once per 24-hour window.
- Rewards don't compound by themselves. Compounding means claim → restake → re-vote,
  and doing it daily. That's exactly the kind of grind that quietly doesn't happen.

## Thing two: a resource

When you stake, you choose what the stake produces: **energy** or **bandwidth**. Your
share of all staked TRX decides how much regenerates for you every 24 hours.

- **Bandwidth** pays for plain transactions, like TRX transfers. Every account also
  gets a small free daily allowance (600 points — roughly one transfer a day), so
  casual wallets rarely need more.
- **Energy** pays for smart-contract calls — including every USDT transfer on TRON.
  This is where the network's real, daily demand lives.

If your goal is yield, the choice is not close: energy is the half that can be
[rented out for real income](/learn/how-tron-energy-rental-works/) — typically the
bigger stream, on top of the votes you keep either way.

## Leaving: the 14-day exit

You can unstake any amount, anytime. Two timing rules apply, both protocol-level:

- The unstaked TRX waits **14 days** before it can be withdrawn. Its votes and resource
  stop immediately — the wait applies to the money, not to your exposure.
- Energy you've delegated out has to come back first: a delegation runs to the end of
  its term (days, capped at 30) before that slice of stake can be unstaked.

No permissions, no operator, no market changes any of this — it's how the protocol
works for everyone.

## The quiet catch

Everything above happens only if someone drives it. Rewards sit unclaimed, idle energy
expires every single day, votes drift as validators change their terms. That's why most
holders stop at ~3% — not because more isn't there, but because capturing it is
[a daily operations job](/#engine).

The mechanics, though, are now yours: two streams, one wallet, reversible.
