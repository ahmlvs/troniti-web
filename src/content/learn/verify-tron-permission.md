---
title: "How to verify what a TRON permission can do"
description: "Before granting anyone an active permission, read the grant itself: keys, threshold, the operations list — what to check on tronscan, and the red flags."
updated: 2026-08-04
tags: ["security", "basics"]
figure:
  title: "read the grant, not the promise"
  lines:
    - { l: "stake, vote, claim", r: "needed ✓", tone: "ok" }
    - { l: "delegate, reclaim", r: "needed ✓", tone: "ok" }
    - { l: "Transfer / Unfreeze", r: "never ✗", tone: "bad" }
    - { l: "AccountPermissionUpdate", r: "never ✗", tone: "bad" }
    - { l: "anything extra", r: "walk away", tone: "accent" }
---

Any service that operates your TRON wallet — troniti included — works through an
**active permission**: an on-chain grant that lets a specific key perform a specific
list of operations on your account. The marketing can say anything. The grant says
exactly what it says.

This is how to read one before you sign it — and how to audit one you've already
granted.

## What a permission actually is

A TRON account has one **owner permission** (your key, full power, including the power
to change permissions) and up to eight **active permissions**. Each active permission
defines three things:

- **Keys and weights** — who can sign with it;
- **Threshold** — how much combined weight a signature needs;
- **Operations** — the exact list of transaction types this permission may execute,
  stored on-chain as a bitmap. Not a description. A list.

Nothing outside that operations list can be signed with the permission — the network
itself rejects it. Which is why the whole security question collapses into one
exercise: *read the list*.

## How to read it on tronscan

1. Open your account page on tronscan (paste your address into the search).
2. Find the **permissions** section — it lists every active permission with its
   name, threshold, keys and the decoded operations.
3. For each permission, check three things:
   - **Whose key is in it** — one key you recognize (the operator's), with threshold
     matching its weight. Extra keys you can't explain are a stop sign.
   - **Which operations are allowed** — the decoded names, one by one.
   - **Whether anything extra snuck in** — see below.

## What a yield operator needs — and nothing else

Running stake, votes and energy rental requires exactly five operations:

- `FreezeBalanceV2` — stake
- `VoteWitness` — vote
- `WithdrawBalance` — claim rewards
- `DelegateResource` — rent energy out
- `UnDelegateResource` — take it back

That's the complete toolbox. Every one of them moves value *inside* your account or
back *into* it. None of them can send anything out.

## The red flags

- **`Transfer` / `TransferAsset`** — can send your TRX or tokens away. No operator
  needs it. Ever.
- **`UnfreezeBalanceV2`** — can unstake your principal, the first step of walking it
  out. Not needed to run yield.
- **`AccountPermissionUpdate`** — can rewrite the permissions themselves, including
  adding everything above. Granting it hands over the account.
- **`TriggerSmartContract`** — the quiet one. It looks technical and harmless, but
  it's the operation behind every TRC-20 transfer — a permission holding it can move
  your **USDT**. A yield operator has no business with it.
- **Anything you can't name.** The list is exact by design; an allowlist you don't
  fully understand is a blocklist you can't trust. Extra operation — walk away. And it
  should go without saying: no legitimate service ever asks for your seed phrase.

## The exact-match principle

The strongest form of this check isn't "no bad operations" — it's "**exactly the
expected operations, bit for bit**". There are 256 possible transaction types, and a
blocklist can't anticipate all of them; an exact allowlist can't be surprised. That's
how [our own verification works](/#trust): the permission must match the five-op set
precisely, and one extra bit fails it.

## Undoing it

The owner key always outranks any active permission. Removing a grant is one
`AccountPermissionUpdate` signed by *you*, in any wallet that edits permissions —
takes effect immediately, no cooperation from the operator required. (What happens to
your stake afterwards is covered in
[is renting out TRON energy safe?](/learn/is-renting-out-tron-energy-safe/))

Don't trust. Verify — it's a two-minute read of one list.
