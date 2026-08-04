---
title: "TRON energy markets compared: what sellers actually net"
description: "TronSave, TronEnergize and TEM quote gross prices — sellers net 70–75% of them. Measured shares, flat fees, minimum fills, and how payouts actually arrive."
updated: 2026-08-04
tags: ["markets", "energy"]
order: 3
figure:
  title: "what sellers actually keep"
  lines:
    - { l: "TronEnergize", r: "~75% of book price" }
    - { l: "TronSave", r: "~75% − 0.3 TRX per fill" }
    - { l: "TEM", r: "~70% of book price" }
    - { l: "order books", r: "quote gross ✗", tone: "bad" }
    - { l: "your wallet", r: "receives net ✓", tone: "ok" }
---

Energy market order books show one number. Your wallet receives another. The gap is
the market's cut — and no market prints it next to the price.

The shares below aren't guesses or terms-of-service archaeology: they're measured on
our own production fills through mid-2026, and re-measured continuously, because we
price by them every day.

## The number nobody prints

When a buyer pays, say, 45 SUN per unit of energy per day, the seller does not receive
45 SUN. The market keeps a share of every deal — in our measurements, **25–30%
depending on the venue** — and some add a flat fee per fill on top.

That means two things worth internalizing:

- **Book prices overstate your income by a quarter or more.** Any yield estimate built
  on order-book prices is fiction until it's multiplied by the seller share.
- **Ranking markets by book price is a mistake.** A higher gross on a 70% venue can
  pay less than a lower gross on a 75% one. The only number that matters is net.

## The three markets, measured

| market       | seller keeps | flat fees      | practical floor    |
| ------------ | ------------ | -------------- | ------------------ |
| TronEnergize | ~75%         | —              | takes small fills  |
| TronSave     | ~75%         | ~0.3 TRX/fill  | ~100k energy/fill  |
| TEM          | ~70%         | —              | ~50k energy/fill   |

A few notes that don't fit in a table:

- **TronSave's flat fee matters at the small end.** 0.3 TRX is noise on a large fill
  and a real bite on a tiny one — small orders there can net less than the share
  suggests.
- **The floors decide who can play where.** With a small stake, TronSave's ~100k-energy
  minimum per fill may simply be out of reach, and TEM's ~50k too — which leaves
  TronEnergize as the venue that takes the small orders the others won't.
- **Access differs.** TronEnergize and TEM are public order books; TronSave runs an
  API-key model for sellers. None of them ever hold your TRX — fills are on-chain
  delegations either way.

## How payouts actually arrive

Payouts land as plain TRX transfers from the market's payout wallet, usually shortly
after the delegation confirms. Two habits keep this honest:

- **Expect small drift, verify within tolerance.** Markets re-derive the credited
  energy at their own conversion rate, so the payout can differ from your estimate by
  a fraction of a percent. We match every payout on-chain against the expected net and
  flag anything beyond ~0.1%.
- **Distrust the register, trust the chain.** A market's API response is a claim; the
  delegation landing on-chain and the transfer arriving in the wallet are facts. Our
  cycle confirms both before income is ever booked.

## What this does to strategy

Pricing by net changes the picture in ways book-watching never shows. A venue with the
best headline prices can be the worst payer after its cut; a "worse" venue can win on
small fills because it charges no flat; and when rates float, the spread between
venues' *net* prices is what decides where the next delegation goes.

Doing this by hand means watching three books, three fee models and three floors,
daily. That comparison shopping is a big part of what [the engine](/#engine) automates
— every fill is priced net-of-cut before it's placed.

New to the mechanism itself? Start with
[how TRON energy rental works](/learn/how-tron-energy-rental-works/) — and the honest
list of what can and can't go wrong is in
[is renting out TRON energy safe?](/learn/is-renting-out-tron-energy-safe/)

*Shares and floors are our measurements, mid-2026, on real fills. Markets can change
their terms — when they do, this page gets updated, not defended.*
