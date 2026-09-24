---
title: "Multi-branch POS: what breaks when you open shop number two"
description: "Multi-branch POS: till numbers per outlet, stock transfers, eTIMS invoices and offline sync. What actually breaks at branch two, with Kenya and Nigeria data."
pubDate: 2026-09-24
lang: "en"
author: "redaction"
tags: ["Multi-branch", "Retail", "POS", "Kenya", "Nigeria"]
faq:
  - question: "What is a multi-branch POS system?"
    answer: "A multi-branch POS is a point of sale where each outlet runs its own till and stock, while the owner sees consolidated sales and inventory from one account. The distinguishing feature is not the dashboard, it is that every branch keeps selling when its internet drops and reconciles cleanly once the connection returns."
  - question: "Should each branch have its own M-Pesa till number?"
    answer: "Yes, in almost every case. A till number is a five or six digit Buy Goods number tied to your business, and one shared till across three shops means you cannot tell which counter took which payment. A till per branch makes cash accountability possible and cuts month-end reconciliation from guesswork to matching."
  - question: "Does an M-Pesa confirmation count as a tax receipt in Kenya?"
    answer: "No. The M-Pesa SMS confirms that money moved, but it does not satisfy the Kenya Revenue Authority. You still have to issue an eTIMS tax invoice for the sale. For a multi-branch business this matters twice over, because invoice numbering and branch identification have to stay consistent across every outlet."
  - question: "Where do multi-branch retailers lose the most money?"
    answer: "Stock transfers between outlets. Goods leave one branch, arrive at another days later, and nobody records the gap. The shortfall surfaces at the annual count as a single unexplained number, by which point it cannot be attributed to a person, a route or a date. Transfers need to be documented on both ends, as dispatch and receipt."
  - question: "How many branches can you run on spreadsheets?"
    answer: "One, reliably. Two, painfully, if both managers are disciplined. At three, the numbers stop agreeing and the owner spends their week reconciling instead of trading. Kenya's formal retail history is instructive here: several chains expanded fast and collapsed not from lack of demand but from losing visibility over what each branch held."
---

Kenya's formal retail chains went from 314 branches to 189, with Nakumatt, Tuskys and Uchumi taking the heaviest losses, according to [Business Daily](https://www.businessdailyafrica.com/bd/corporate/marketplace/a-look-at-weak-chains-in-kenya-s-retail-sector-3228526). Demand never disappeared. Naivas grew to 106 outlets over the same period and Quick Mart to 51.

The chains that shrank did not lose customers. They lost track of what each branch was holding, selling and banking.

## What actually breaks at branch two

The first shop runs on the owner's attention. The second one cannot, and that is the whole problem.

Three things fail almost immediately once a second counter opens, and none of them is the till itself. Cash accountability disappears, because one payment stream cannot be attributed to a location. Stock becomes a rumour, because goods move between outlets faster than anyone records them. And tax documents drift, because two people are numbering invoices independently.

A multi-branch POS is not a dashboard with a branch filter. It is a system where **each outlet owns its own till, its own stock and its own operators**, and the owner reads a consolidated ledger they did not assemble by hand.

## The markets where this decision is made

| Market | Formal or modern outlets | Traditional trade share | Source |
|---|---|---|---|
| Kenya | 189 formal chain branches, down from 314 | Informal trade employs 10.7M of 18.1M informal workers | Business Daily, KNBS 2026 Economic Survey |
| Nigeria | About 15,000 modern outlets, projected 18,000 | Over 90% of retail sales | Ken Research, FieldAssist |
| Nigeria, value | USD 15 billion modern trade in 2025 | USD 27 billion projected by 2031, 10.29% CAGR | Ken Research |

The Kenyan informal figures come from the [2026 Economic Survey](https://www.capitalfm.co.ke/business/2026/04/kenya-adds-882100-jobs-in-2025/), which puts informal sector employment at 18.1 million workers in 2025, up 4.1% on the year, with wholesale and retail trade, hotels and restaurants accounting for 10.7 million of them. The Nigerian side comes from [Ken Research](https://www.kenresearch.com/industry-reports/nigeria-fmcg-retail-modern-trade-market), which sizes modern trade at USD 15 billion in 2025 across roughly 15,000 formal outlets, while [FieldAssist](https://www.fieldassist.com/blog/how-fmcg-brands-digitize-traditional-trade-nigeria) puts traditional trade, meaning kiosks, tabletop sellers and open-market stalls, above 90% of retail sales.

Read together, those numbers describe the actual opportunity. Most African multi-branch retail is not a supermarket chain. It is a trader with three shops, or four, or seven, who crossed from one outlet to several without changing a single tool.

## One till number, or one per branch

One till per branch, in almost every case. The exception is a business where a single supervisor physically handles every counter.

A till number is a [five or six digit Buy Goods number](https://veirahq.com/blog/mpesa-till-number/) tied to your business: the customer picks Buy Goods, enters the till and the amount. Share one till across three shops and the money arrives correctly, but you have no idea which counter earned it. That sounds survivable until a shortfall appears and there is no way to place it.

| Setup | Cash accountability | Month-end work | When it fits |
|---|---|---|---|
| One shared till | None, payments cannot be attributed to a branch | Manual guesswork against sales notes | A single owner covering every counter |
| One till per branch | Per branch, and per operator when operators are registered | Match till statement to branch sales report | Two outlets and up |
| Till per branch plus POS reconciliation | Per receipt | Exceptions only | Any chain that intends to keep growing |

Registering a till needs an ID, a KRA PIN and business details, then operators are added once the till is live. Doing this per outlet is a morning of admin that saves a weekend a month. Our [M-Pesa merchant guide](/en/blog/m-pesa-pos-guide/) covers the reconciliation mechanics in detail. In Ghana, the MoMo merchant equivalent follows the same logic: one merchant ID per location, not per business.

## Stock transfers are where the money leaves

Goods moving between your own branches are the single largest leak in a small chain, and the reason is procedural rather than criminal.

A manager in Branch A sends twelve cartons to Branch B. The driver takes two days. Branch B receives eleven. Nobody wrote down the twelfth, so the difference never becomes a question, it becomes part of the annual count. At that point it is one unexplained number with no date, no route and no name attached.

The fix is dull and it works: **a transfer must exist as two documents, a dispatch and a receipt**, with a quantity on each and a person's name on both. Any POS that treats an inter-branch move as a single adjustment rather than a two-sided document will hide this class of loss by design. Ask the vendor to demonstrate a transfer where the received quantity is deliberately lower than the dispatched one, and watch what the system does with the difference.

## Compliance is per outlet, not per business

Tax obligations attach to each point of sale, which is the part owners discover late.

In Kenya, the M-Pesa confirmation message proves payment but [does not satisfy KRA](https://tuma.co.ke/online-pos-solution-integrated-with-m-pesa-kra-etims-and-all-kenyan-banks/): an eTIMS tax invoice still has to be issued for the sale. Across several branches that means invoice sequences, branch identifiers and VAT rates have to stay consistent even when one shop is offline and the others are not. Nigeria and Ghana are moving along comparable paths, which we set out in our piece on [e-invoicing in Africa](/en/blog/e-invoicing-africa-retail-2026/).

The practical test for a multi-branch setup: if Branch C loses connectivity for six hours and keeps trading, does it produce invoices that remain valid and correctly numbered once it syncs? If the answer involves a manual renumbering exercise, the system will fail an audit the first time the network does.

## Offline sync, and the conflict nobody plans for

Every vendor claims offline mode. What separates them is what happens when two branches edit the same record while disconnected.

Two shops selling from a shared stock pool can both sell the last unit of an item. Both sales are legitimate at the moment they happen. On reconnection, a weak system silently picks one version and the other sale vanishes from your stock movements, leaving a discrepancy you will find months later. A serious one keeps both sales, flags the negative stock, and tells you which branch to chase.

So the question to put to a vendor is not "do you work offline". It is: which record wins, and do I get told? Our guide on [offline POS software](/en/blog/offline-pos-software/) sets out the full list of questions, and the [POS comparison](/en/pos-comparison) shows how the main options handle it. [digabloPos](https://pos.digablo.fr/) records locally on each device and syncs per branch, so a shop with an intermittent connection is not a shop with intermittent accounting.

## The manager problem

The moment you stop standing behind the counter, someone else needs permission to fix things, and every permission you grant is a hole you have to be able to see through.

A branch manager will need to void a mistaken line, apply a discount to keep a regular customer, and accept a return. Refuse all three and they will work around the system, usually by not recording the sale at all, which costs you the data you opened the branch to get. Grant all three without limits and your margin becomes negotiable at four counters at once.

What works in practice is a ceiling plus a trace. Discounts up to a fixed percentage without approval, anything above it requiring a supervisor code. Voids permitted, but logged with the operator's name, the time and the amount, and visible in the owner's daily report rather than buried in a menu nobody opens. **The point is not to prevent overrides, it is to make them countable.** A chain where discounts rose from 2% to 6% of turnover in one branch over a quarter has a specific conversation to have with a specific person, and it can only have it if the log exists.

Same logic for cash. Each branch closes its own drawer, declares a counted figure, and the system records the variance against expected cash before anyone sees the expected figure. Reverse that order and the declared amount will always match.

## Before you sign the second lease

Four checks, and they cost nothing.

Open a second branch in a trial account before opening one in reality. Move stock between them, sell the same item from both, disconnect one, reconnect it. Fifteen minutes of this tells you more than any demo.

Confirm each branch can have its own till or merchant number, its own operators, and its own cash-up, with an audit trail naming the person.

Ask how the per-branch price scales. Per-terminal pricing is fine at two outlets and punitive at eight, and that is exactly when you will be least able to migrate.

Get a straight answer on data export. A chain that cannot extract its own sales and stock history by branch is not a chain with a system. It is a chain with a dependency.
