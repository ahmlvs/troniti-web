---
title: "How TRON energy rental works — and why it pays ~12%"
description: "Every USDT transfer on TRON burns energy. Staked TRX produces it daily, idle energy expires — and renters pay real TRX for it. The mechanics, the market, the math."
updated: 2026-08-01
tags: ["energy", "basics"]
figure:
  title: "energy → income"
  lines:
    - { l: "USDT transfer", r: "burns energy" }
    - { l: "your staked TRX", r: "makes energy · daily" }
    - { l: "left idle", r: "expires ✗", tone: "bad" }
    - { l: "rented out", r: "TRX in your wallet ✓", tone: "ok" }
    - { l: "the rate, net", r: "~11.9%/yr", tone: "accent" }
---

If you hold staked TRX, you produce a resource every single day. Most holders let it
expire unused — which is roughly like owning an apartment and keeping it empty.

This is the mechanism behind the biggest part of TRON yield, from the ground up.

## Energy is what TRON's busiest traffic runs on

TRON settles more USDT than any other chain. Every USDT transfer is a smart-contract
call, and smart-contract calls consume **energy** — one of TRON's two renewable
resources (the other, bandwidth, pays for plain transactions).

A single USDT transfer burns roughly 65,000–130,000 energy, depending on whether the
receiving address has held USDT before. Whoever doesn't have energy still pays — by
burning TRX at a much worse rate. For a business moving hundreds of transfers a day,
that difference is a real line item.

So there is constant, structural demand for energy — from exchanges, payment
processors, merchants, bots. Not speculation: operating costs.

## Where energy comes from

Under [Stake 2.0](/learn/tron-stake-2-0-explained/), staking TRX gives you two things
at once:

- **Votes** — you back a validator (a super representative), and the network pays
  voting rewards for it, around 3–4% a year.
- **A resource allotment** — you choose energy or bandwidth. Your share of all staked
  TRX defines how much regenerates for you every 24 hours.

The catch — and it's the whole point: **idle energy expires**. It regenerates daily
whether you use it or not; nothing accumulates, nothing carries over. Unused energy is
yield you already paid for (by staking) and then threw away.

## The rental market

TRON has a native operation for lending your resource: `DelegateResource`. It hands
the *use* of your energy — never the TRX itself — to another address for a fixed term.
The protocol caps any delegation lock at 30 days; when the term ends, the energy comes
back on its own.

Marketplaces (TronSave, TronEnergize, TEM and others) sit between holders and buyers:
a buyer posts an order and pays TRX, the market matches it against available energy,
the delegation is signed on-chain, and the payout lands **directly in the holder's
wallet**.

Two properties worth pausing on:

- **Delegation is not a transfer.** Your stake stays staked, in your wallet, and keeps
  voting. The renter can spend the energy — nothing else.
- **The income is other people's operating fees.** Nobody prints a token, nobody pools
  deposits. That's why this yield doesn't have the usual "where does it actually come
  from" problem.

## The math

Rates float with supply and demand, so treat this as a live model, not a promise — but
the shape is stable:

| stream          | what drives it              | a year, roughly |
| --------------- | --------------------------- | --------------- |
| voting rewards  | network emission to voters  | ~3.3%           |
| energy rental   | fees paid by USDT movers    | ~11.9%          |
| **combined**    |                             | **~15%**        |

One honesty note most listings skip: the prices you see on market order books are
**gross**. Markets keep a share of every deal — typically 25–30% — so the real income
is the *net* number. When we quote ~11.9%, that's net of market cuts, based on
measured fills, not book prices.

## The catch: it's a daily operations job

Doing this well by hand means claiming voting rewards inside the 24-hour window,
restaking them, re-voting, watching several markets' prices, filling orders at sane
rates, reclaiming expired delegations — and budgeting bandwidth so none of it burns
your TRX on fees. Every day.

That's the job [troniti's engine](/#engine) automates, through a
[restricted on-chain permission](/#trust) that can stake, vote, claim and delegate —
and can never move funds. But the mechanism above is just TRON: you can run it
yourself, and you should understand it either way before granting anyone anything.

## Is it safe?

The failure modes are narrow by construction. Your principal never leaves your wallet —
delegation moves the resource, not the TRX. The protocol caps locks at 30 days, so the
worst case of a bad delegation is a delayed slice of resource yield, not lost capital.
And if whoever operates for you disappears, delegations simply expire and your stake
goes back to earning plain voting rewards.

The real thing to check is *what you sign*: a proper operator permission allows exactly
five operations — stake, vote, claim, delegate, reclaim — and nothing else. No
transfers, no unstaking, no account changes. [Here's ours, verifiable on-chain.](/#trust)

The longer version, risk by risk:
[Is renting out TRON energy safe?](/learn/is-renting-out-tron-energy-safe/)
