---
title: "Breaking bulk: what selling a carton by the piece really costs"
description: "Breaking bulk quietly eats margin: repack loss, rounded change, uncounted units. The arithmetic for pricing a carton by the piece, with Kenya 2026 data."
pubDate: 2026-10-19
lang: "en"
author: "redaction"
tags: ["Pricing", "Margin", "Retail", "Kenya", "Nigeria"]
faq:
  - question: "How do you calculate the cost of one piece from a carton?"
    answer: "Add the purchase price of the carton to the transport and handling you paid to get it onto your shelf, then divide by the number of pieces you can actually sell, not the number printed on the box. Damaged, leaking or repacked units never reach a customer, so leaving them in the divisor understates your cost on every single sale."
  - question: "Why does breaking bulk reduce margin even when the price looks right?"
    answer: "Three leaks run at the same time. Pieces lost to damage and repacking, which raise the cost of every remaining unit. Change rounding, which pushes the shelf price down to the nearest coin you actually have. And untracked stock, where a carton opened but not recorded means you cannot tell shrinkage from a normal sale."
  - question: "What should a POS do when one product is sold both by carton and by piece?"
    answer: "It should hold one product with two selling units and a conversion ratio, so a carton sale deducts the equivalent number of pieces from the same stock line. It should also carry a cost price per piece. Systems that force you to create two unrelated products split your stock in half and make reordering guesswork."
  - question: "When is breaking bulk the wrong decision for a shop?"
    answer: "When turnover is too slow for the opened pack to clear before it spoils, when the product is regulated in small formats, and when the piece price has to be rounded so far down that the carton margin disappears. A slow-moving opened carton ties up cash and loses weight or quality while it waits for buyers."
---

A carton of 24 bought at 1,440 shillings and sold at 70 a piece looks like a 14% margin. Count what actually leaves the shelf, and it is closer to 7%.

That gap is not an accounting curiosity. It is the difference between a shop that grows and one that works hard for nothing, and it hides in the most ordinary operation in African retail: opening a carton and selling its contents one at a time.

## Cost per piece is not the carton price divided by the count

The real cost of a piece is the landed cost of the carton divided by the number of pieces you can actually sell. Transport goes in the numerator. Damage comes out of the denominator.

Most shopkeepers do the arithmetic the other way round, and the error is always in the same direction: it flatters the margin.

| Line | Naive costing | Real costing |
|---|---|---|
| Carton purchase price | KES 1,440 | KES 1,440 |
| Transport and handling per carton | ignored | KES 60 |
| Pieces printed on the carton | 24 | 24 |
| Pieces lost to damage or repacking | 0 | 1 |
| Sellable pieces | 24 | 23 |
| Cost per sellable piece | KES 60.00 | KES 65.22 |
| Shelf price per piece | KES 70 | KES 70 |
| Margin per piece | KES 10.00 (14.3%) | KES 4.78 (6.8%) |
| Margin on the whole carton | KES 240 | KES 110 |

Same carton, same shelf price, less than half the profit. And nothing in this table involves theft, a bad supplier or a slow month.

Run it in naira and the same pattern holds. A carton of 20 sachets at 14,000 naira, plus 500 naira to get it to the shop, with one sachet burst in transit, costs 763 naira per sellable piece rather than 700. Sell at 800 and you are working on 4.6%, not 14%.

## The change you do not have decides your real price

Your shelf price is not the price your arithmetic produces. It is the nearest price your till can actually settle in coins and notes you hold, and that rounding is almost always downward.

Take the 65.22 shillings per piece above. A 20% margin on the selling price needs 81.50. You will charge 80, because nobody wants 1.50 in change at a counter where small coins are scarce.

| Target margin | Price the maths needs | Price you can charge | Margin you realise |
|---|---|---|---|
| 20% | KES 81.50 | KES 80 | 18.5% |
| 20% | KES 81.50 | KES 75 | 13.0% |
| 15% | KES 76.70 | KES 70 | 6.8% |
| 10% | KES 72.50 | KES 70 | 6.8% |

The two bottom rows are the trap. Round 76.70 down to 70 and your 15% target lands on 6.8%, which is the same result as not targeting anything at all.

The fix is not a price ending in 99. It is **choosing the pack size to fit the price point**, working backwards. Decide the price your customers will hand over without change, then pick the piece count or weight that makes that price profitable. Shops that price the pack and then look for the money get squeezed every time.

The multi-buy version of this error costs even more. Two for 1,500 naira on a piece that costs 763 means you are selling below cost and calling it marketing.

## Repack loss is a cost line, not bad luck

Anything you measure out of a bag loses weight on the way to the customer, and the loss belongs in the price rather than in a sigh at the end of the month.

Three sources, in order of size:

- **Spillage and weighing generosity.** A scoop filled to the eye runs over the stated weight far more often than under it. On a 50kg bag broken into 1kg units, a 2% overfill is a kilo of free product per bag.
- **Packaging.** Bags, ties and labels are cheap per unit and real per sack. Price them in once rather than ignoring them every time.
- **Internal consumption.** The opened carton is the one staff treat as common property. This is the quiet overlap between repacking and shrinkage, and it is why an opened pack needs a stock record as much as a sealed one. The five patterns and the controls that catch them are in our piece on [employee theft at the till](/en/blog/till-fraud-stock-loss-controls/).

A practical standard: record the break. When a carton is opened, the stock line should move from one carton to the number of pieces it yielded, with the shortfall visible. If your books cannot show the shortfall, you cannot distinguish a leak from a sale, and you will discover the difference at stocktake, months late.

## What your POS has to do

One product, two selling units, one stock pool. That is the whole requirement, and a surprising number of tills fail it.

| Approach | How stock behaves | What it costs you |
|---|---|---|
| Two separate products, "carton" and "piece" | two independent stock lines for the same goods | reorder decisions made on half the data, and a carton sale that never reduces piece stock |
| One product, two units, conversion ratio | a carton sale deducts the equivalent pieces | correct stock and correct cost per piece, provided the ratio is set once and audited |
| Manual adjustment at the end of the day | depends on who remembers | the record is only as good as the busiest evening of the week |

Three settings matter beyond the unit itself. A **cost price held per piece**, so your reports show margin rather than turnover. **Offline recording**, because a counter where the network drops is a counter where the break never gets entered. And per-item reporting, so you can see which broken packs earn their shelf space and which only earn you work.

## When breaking bulk is the wrong call

Sometimes the answer is to keep the carton sealed. Three cases, and the first is the most common.

**Turnover too slow.** An opened pack has a shorter clock than a sealed one. If the remaining units will not clear before the product stales, dries out or absorbs moisture, you have converted sellable stock into a write-off with extra steps.

**Regulated formats.** Small formats attract rules of their own, and they change. Nigeria's regulator moved against sachet alcohol in December 2025, with manufacturers contesting the measure and warning of a 1.9 trillion naira hit to the sector ([StreamlineFeed](https://streamlinefeed.co.ke/news/inside-the-multi-billion-naira-clash-over-nigerias-sachet-alcohol-ban)). Before you build a line of business on a pack size, check whether it is allowed to exist next year.

**No viable price point.** If the only price customers will pay sits below your real per piece cost, breaking the carton is a decision to lose money in smaller increments.

## Costs move faster than your shelf labels

Per piece costing has to be redone on a schedule, because the inputs keep moving. Kenyan inflation reached **6.8% in September 2026**, its highest in about a year, with food and non-alcoholic beverages at 9.5% and transport at 15.6% ([Kenya National Bureau of Statistics, via Nairametrics](https://nairametrics.com/2026/09/30/kenyas-inflation-rises-to-6-8-in-september-highest-in-one-year/)). Transport is the line that moves your landed cost per carton, and it is moving at more than twice the headline rate.

Nigeria's picture is growth with persistent price pressure: the World Bank expects activity to strengthen to **4.3% in 2026** from 4.0% in 2025 ([Vanguard](https://www.vanguardngr.com/2026/10/nigerias-economy-to-grow-at-4-3-in-2026-world-bank-2/)), while PwC's outlook keeps inflation in double digits and flags food prices as an upside risk ([Strategy&](https://www.strategyand.pwc.com/a1/en/insights/nigeria-economic-outlook.html)).

What that means at the counter is simple. The piece price you calculated from a carton bought three months ago is costed against a replacement carton that no longer exists at that price. Our guide on [repricing the shelf when costs move](/en/blog/retail-repricing-margin-guide/) sets out the routine; for broken packs, add one step: recalculate the per piece cost at every delivery, not every quarter.

## How we handle it

[digabloPos](https://pos.digablo.fr/) holds a cost price and a selling price per item, records stock movements on the device and syncs when the connection returns, with no licence fee. For a shop that breaks bulk, the point is that the break and the sale land in the same record, on the same phone, whether or not the network is up that afternoon.

If you are comparing systems, our [POS comparison](/en/pos-comparison) shows which ones hold a cost price at all, since several popular free tills do not, and a till without a cost price cannot tell you that your 14% margin is really 7%.

Selling broken packs on credit as well? That combination is where shops lose the most, and the controls that contain it are in our piece on [selling on credit](/en/blog/selling-on-credit-controls/).

## Sources

- [Kenya's inflation rises to 6.8% in September, Nairametrics](https://nairametrics.com/2026/09/30/kenyas-inflation-rises-to-6-8-in-september-highest-in-one-year/)
- [Nigeria's economy to grow at 4.3% in 2026, World Bank via Vanguard](https://www.vanguardngr.com/2026/10/nigerias-economy-to-grow-at-4-3-in-2026-world-bank-2/)
- [Nigeria Economic Outlook, Strategy& (PwC)](https://www.strategyand.pwc.com/a1/en/insights/nigeria-economic-outlook.html)
- [Inside the clash over Nigeria's sachet alcohol ban, StreamlineFeed](https://streamlinefeed.co.ke/news/inside-the-multi-billion-naira-clash-over-nigerias-sachet-alcohol-ban)
