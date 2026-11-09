---
title: "Barcodes for a small shop: what you need and what you are oversold"
description: "Barcodes for a small shop: why a retailer needs no GS1 membership, what scanners cost in Kenya and Nigeria, and how to code goods that arrive bare."
pubDate: 2026-11-09
lang: "en"
author: "redaction"
tags: ["Barcodes", "Retail", "Kenya", "Nigeria", "digabloPos"]
faq:
  - question: "Does a small shop need to register with GS1 to use barcodes?"
    answer: "No. GS1's own support portal states that a GS1 number is required only when a product will be sold through a retailer or marketplace that scans it at checkout or verifies it in a catalogue, and that tracking stock inside your own business needs no GS1 number. A shop reselling other companies' goods scans codes those companies already paid for."
  - question: "How much does a barcode scanner cost in Kenya or Nigeria?"
    answer: "In Kenya, listings run from about KSh 4,500 for a plug-and-play wired laser scanner to KSh 8,000 for a handheld and KSh 23,000 for a table-mount unit. In Nigeria, Chert lists a Motorola LS2208 at roughly NGN 128,000. Prices on these retail listings are undated, so treat them as indicative and confirm before buying."
  - question: "How do you barcode products that arrive without a barcode?"
    answer: "Print your own in-store codes. GS1 reserves prefixes 020 to 029 for in-store use, and the Code 128 and Code 39 formats are free to generate with no licence or membership. Assign one code per product, never reuse a retired code, and never encode the price in the code itself, because prices change and codes should not."
  - question: "When is a barcode scanner not worth buying?"
    answer: "When your range is small or mostly unpackaged. A shop with under roughly eighty distinct products finds the till keypad faster than a scan, and goods sold loose by weight or scoop have nothing to scan at all. An iKhokha guide makes the same point: small shops with few products may not need a scanner at first."
  - question: "Are cheap reseller barcodes safe to use?"
    answer: "They are fine for in-store scanning and stock control, but risky for selling onward. Resellers sell single numbers cheaply, from around KES 1,000 in Kenya, without membership. The catch is that the number stays registered to the original prefix holder, not to you, and marketplaces that verify codes against the GS1 database may reject them."
---

A plug-and-play laser scanner is listed in Nairobi at [KSh 4,500](https://laptoprice.odoo.com/shop/category/computing-printers-scanners-288). GS1 Kenya's own membership paperwork puts a start-up tier at several times that, every year. Plenty of shopkeepers pay the second because they believe it is the licence that makes the first one work.

It is not. For a shop that resells other people's products, the annual fee buys nothing at all.

## You are a retailer, not a brand owner

A shop that sells goods made by other companies needs no GS1 membership to scan barcodes. GS1's [support portal](https://support.gs1.org/support/solutions/articles/43000734094-do-i-need-to-put-a-barcode-image-on-my-product-) is explicit that a GS1 number is required only when a product will be sold through a retailer or marketplace that scans it at checkout or verifies it in a catalogue, and that tracking stock inside your own business requires no GS1 number.

Read that from the counter and the logic flips. The soda crate, the soap, the bag of flour: each already carries a GS1 number, and the manufacturer paid the fee so that shops like yours could scan it. **You are the retailer the fee was paid for.** Buying your own membership to read someone else's code is like paying for a phone number to receive calls.

Membership becomes relevant only when you start putting your own name on a product, which is a different business and a later section.

## What a scanner actually buys you

Speed at the counter is the obvious gain, and it is the smaller one. The real return is that every sale writes the correct product line into your records.

On accuracy, the orders of magnitude are not close. Manual keying is conventionally put at roughly one error per 300 characters, a figure used in [technical literature on 2D barcodes](https://arxiv.org/pdf/1201.0394), against scanner error rates that sit many orders of magnitude lower. A patent filing on automated checkout gives a throughput figure worth knowing: a busy staffed check stand processes [about 22 scans per minute](https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11481751), with self-checkout as low as 12.

Treat the sharper marketing numbers with suspicion. Most per-item time savings quoted online come from vendors, and at least one openly labels its figures as an illustrative model rather than measured results. The direction is solid, the multipliers are not.

What is not in dispute is the stock effect. A keyed sale attaches the money to whichever product the cashier picked off a list, often the first plausible one. A scanned sale attaches it to the right product every time, which is the only way a stock figure stays usable between counts. We cover what happens when it drifts in the guide to [stock takes in a small shop](/en/blog/stock-take-small-shop-guide).

## When a scanner is not worth buying yet

Below roughly eighty distinct products, or when most of your turnover is sold loose, a scanner earns very little.

An [iKhokha guide](https://www.ikhokha.com/blog/how-does-barcode-scanner-work) makes the first half of that point: small shops with few products may not need a scanner at first. The arithmetic is simple. If your whole range fits on two screens of buttons, a cashier taps faster than they can aim.

The second half matters more across much of the region. Sugar by the kilo, maize meal by the scoop, charcoal by the tin, cooking oil decanted into a customer's own bottle: none of it has a code to read, and none of it will. If that is 70 percent of your counter, buy a scale that talks to your till before you buy a scanner. The pricing logic for goods split out of a carton is its own problem, treated in [breaking bulk](/en/blog/breaking-bulk-unit-pricing).

## What the hardware and the fees actually cost

The gap between scanning and publishing codes is the gap between a one-off purchase and an annual subscription.

| Item | What it is | Indicative cost | Recurring? |
|---|---|---|---|
| Wired laser scanner | Reads existing codes at the counter | KSh 4,500 to 8,000 (Kenya), around NGN 128,000 (Nigeria) | No |
| Table-mount omni scanner | Hands-free, higher volume counters | About KSh 23,000 (Kenya) | No |
| Label printer plus labels | Prints your own in-store codes | Roughly the price of a mid-range scanner | Labels only |
| In-store codes (Code 128 or 39) | Your own numbering, prefixes 020 to 029 | Free | No |
| Reseller barcode number | A single number, no membership | From about KES 1,000 each | No |
| GS1 membership (UK) | Your own prefix, for selling onward | From £50 a year excluding VAT at turnover up to £99,999, rising to £4,250 | Yes, annually |

The UK figures come from a [GS1 UK membership cost guide](https://eancodeshop.co.uk/blog/gs1-uk-membership-cost/) checked in October 2026, which reports ten barcode numbers included at the entry band and notes that numbers stay usable only while the membership is live. GS1 Kenya does not publish current prices on its [membership page](https://www.gs1kenya.org/membership), and the fee tables circulating in its older application forms are ambiguous enough that the only honest advice is to ask for the current schedule in writing. Treat every scanner price above as a retail listing, undated, in a market where exchange rates move.

## Coding the goods that arrive bare

Print your own codes, and do it under a numbering plan you decide once.

GS1 reserves prefixes 020 to 029 for in-store use, which is exactly this case: products that will never leave your shop with that code on them. Code 128 and Code 39 are free to generate, with no licence and no membership, which makes them the standard choice for internal stock, assets and shelf labels.

Three rules keep an in-store scheme from rotting:

- One code per product, and a code is retired permanently when the product goes. Reusing a number merges two products' sales history into nonsense.
- Never encode the price. Prices move, codes should not, and a price baked into a label guarantees that some customer eventually finds the cheaper old sticker.
- Keep weighed goods on scale-printed labels or till keys, not on fixed codes.

Label quality is worth real money here. One industry source attributes 42 percent of self-checkout scanning failures to poor print quality, each failure adding 10 to 30 seconds to the transaction. A cheap thermal label that fades in a month costs more in queue time than the roll saved.

## When you genuinely do need GS1

The moment you own the brand on the packet and want it scanned in someone else's shop, membership stops being optional.

That is the dividing line. Your own-label rice heading for a supermarket chain, a cosmetic line going onto a marketplace, anything a buyer will check against a global database: these need a number registered to you, with a prefix in your name. This is also where the cheap reseller route turns risky. A reseller number remains registered to the original prefix holder, and marketplaces that verify codes against GS1 records can treat it as invalid.

For an independent shop with no own-brand line, that paragraph is simply not your situation, and the annual fee is a subscription to a service you will never use.

## Building the catalogue without losing a week

Set products up as stock arrives, scanning first and typing second, rather than in one long session.

The failure pattern is familiar: an owner decides to computerise, exports a 900-line spreadsheet, imports it, and inherits 900 product names nobody recognises and prices from last quarter. Then nothing is scanned, because half the codes do not match what is on the shelf.

The workflow that survives contact with a real shop is per-delivery. When a carton comes in, scan one unit, let the software open a new product on an unrecognised code, type the name and selling price, enter the quantity received. Thirty lines a day while unpacking, and a shop of 400 products is fully coded in two weeks without a single evening lost. A till that creates a product straight from an unknown scan, as [digabloPos](https://pos.digablo.fr/) does, turns this into one step instead of three, and our [POS comparison](/en/pos-comparison) flags which systems support scan-to-create and which force you into a web dashboard first.

## The cheap part is the part that works

Scanning is one of the few retail upgrades where the useful spend is small and fixed, and the expensive spend is usually someone else's business model. A scanner, a label printer and a numbering plan cover almost every independent shop, at a cost you pay once.

The annual fee only earns its keep when your name is the one on the packet.
