---
title: "QR code payments: who actually pays the fee"
description: "QR code payment fees compared in 2026: GhQR, NQR, M-Pesa till, SnapScan and UPI. What merchants really pay, who settles the money, and what to check first."
pubDate: 2026-11-02
lang: "en"
author: "redaction"
tags: ["QR payments", "Mobile Money", "Ghana", "Nigeria", "Kenya"]
faq:
  - question: "Do customers pay a fee to scan a QR code?"
    answer: "In most African schemes, no. GhIPSS states that the customer pays no fee for using GhQR, and paying a Kenyan M-Pesa till through Buy Goods is free for the payer. The merchant carries the cost instead. That asymmetry is deliberate: schemes want shoppers to scan without hesitating, so the price sits on the receiving side."
  - question: "How much does a merchant pay on a QR code payment?"
    answer: "It depends entirely on who issued the code. A Ghanaian merchant generating a GhQR code paid nothing at launch, a Kenyan till is charged around 0.5 percent capped at 200 shillings, and South African QR providers such as SnapScan and Zapper charge between 2.55 and 2.95 percent excluding VAT. The same technology, a sixfold spread in price."
  - question: "Is a QR code safer than reading out a till number?"
    answer: "Yes, on one specific risk. A scanned code removes mistyped till numbers and the wrong-recipient transfers that follow them. It does not protect you against fake payment confirmation screens, because that fraud happens after the payment is supposedly made. You still need to confirm the credit in your own statement or POS, never on the customer's phone."
  - question: "What changed for UPI QR payments in October 2026?"
    answer: "India ended six years of zero merchant discount rate on part of its QR traffic. From 15 October 2026, reports describe a 0.4 percent fee on certain person-to-merchant transactions above 2,000 rupees, capped at 300 rupees. Small merchants receiving up to 100,000 rupees a month keep a zero rate, so the change targets larger volumes rather than street traders."
  - question: "Does a QR payment show up in my POS automatically?"
    answer: "Only if the two systems are connected. Most small merchants use a static code printed on a sticker, which credits the wallet or bank account without telling the till anything. The sale must then be recorded manually as a QR payment line, otherwise your daily totals will not match your settlement and reconciliation becomes guesswork."
---

Two shops on the same street accept the same payment method, scanned from the same phone. One pays nothing. The other pays almost 3 percent of every sale.

That gap has nothing to do with the QR code, which is a free, published standard. It has everything to do with who printed the sticker. **The code is not the product, the rail behind it is**, and the rail is where the pricing lives.

## The fee is set by the rail, not by the code

A merchant-presented QR code is just a string of digits in a visual format defined by EMVCo, which anyone may implement. What varies between markets is the switch that moves the money and whether a central bank, a bank consortium or a private processor sets the price.

| Market | Who gives you the code | What the merchant pays | What the customer pays |
|---|---|---|---|
| Ghana | GhQR, from GhIPSS via your bank or wallet | Nothing to generate the code, per GhIPSS reporting in 2023 | Nothing, per GhIPSS |
| Nigeria | NQR, from NIBSS via your bank | Flat tiers from 0.50 to 25 naira at launch, repriced from 1 March 2025 | Not charged at launch |
| Nigeria | A gateway reselling NQR, such as Flutterwave | 1.4 percent, capped at 2,000 naira, per Flutterwave documentation | Nothing |
| Kenya | M-Pesa Buy Goods till, scanned or typed | Around 0.5 percent, capped at 200 shillings | Nothing |
| South Africa | SnapScan | 2.55 to 2.95 percent excluding VAT, by prior month turnover | Nothing |
| South Africa | Zapper | 2.9 percent excluding VAT on the free plan | Nothing |
| India | UPI, from any bank or wallet app | Zero up to 2,000 rupees, then 0.4 percent capped at 300 rupees from 15 October 2026 | Nothing |

Read the table twice. Between a Ghanaian shop on GhQR and a South African shop on a private QR app, the cost of accepting an identical payment differs by nearly three percentage points of revenue. On 2 million rand of annual turnover, that is close to 60,000 rand.

## Ghana runs the cheapest QR in the region

Ghana's advantage comes from GhIPSS, a subsidiary of the Bank of Ghana, which operates GhQR as a universal scheme: one image on the counter accepts bank, wallet and card payments from different providers. GhIPSS states on its [customer FAQ](https://ghipss.net/index.php/publications/ghqr-customer) that the customer pays no fee.

On the merchant side, [The Business and Financial Times](https://thebftonline.com/2023/07/10/universal-ghqr-most-secure-most-affordable-way-to-pay/) reported that generating a universal GhQR code, effectively a digital point of sale, cost the merchant nothing, with around 130,000 merchants signed up at that time. That article dates from 2023, so treat the zero as a starting point to confirm with your bank rather than a current guarantee.

The volume behind it is real. Bank of Ghana figures compiled by [Banks in Ghana](https://banksinghana.com/mobile-money-ghana) put mobile money transactions at 8.09 billion in 2024 and 9.70 billion in 2025, a 20 percent rise in a single year.

## Nigeria: cheap on paper, priced by your provider

NQR, designed by NIBSS, was built as a flat-fee scheme rather than a percentage one, which suits small baskets. At launch, [Condia](https://thecondia.com/nibss-nqr-payment-nigeria/) reported tiers of 0.50 naira below 250 naira, 1 naira up to 999.99, 5 naira up to 4,999.99 and a flat 25 naira above 5,000.

Those numbers are historical. NIBSS introduced a new NQR pricing structure on 1 March 2025, reported by [Nairametrics](https://nairametrics.com/2025/02/07/nibss-upgrades-nqr-payment-to-enhance-digital-transactions-in-nigeria/) without published amounts, so the current schedule has to come from your bank.

Here is the part that costs shops money. If you obtain your code through a gateway rather than your bank, you pay the gateway's rate, not the scheme's. Flutterwave's own documentation prices its NQR service at **1.4 percent capped at 2,000 naira**. On a 20,000 naira sale, that is 280 naira against a flat 25 naira in the launch schedule, for the same scan.

The direction of travel favours merchants. NIBSS cut the NIP transfer fee to 2 naira in January 2026 and is exploring a zero-rated model, according to [ThisDay](https://www.thisdaylive.com/2026/02/02/how-strategic-shift-of-nibss-is-rewiring-nigerias-payments-system/). Ask your bank for the current NQR circular before accepting a percentage quote.

## Kenya: your till number is already the code

Kenyan merchants rarely think of themselves as QR merchants, but a Buy Goods till scanned from the M-Pesa app is exactly that. The [Kenya Quick Response Code Standard](https://www.centralbank.go.ke/QR/KenyaQuickResponseCodeStandard.pdf) published by the Central Bank of Kenya builds on the same EMVCo merchant-presented specification, which is why a till number can be scanned at all. The customer pays nothing. The merchant is charged roughly 0.5 percent of the amount, capped at 200 shillings per transaction, a figure repeated across fee trackers such as [Lipa na M-Pesa guides](https://mpesa.or.ke/guides/lipa-na-mpesa-buy-goods-business-till-charges/), though these are third-party sources rather than Safaricom's published tariff.

The cap is what makes this cheap at the top end. On a 50,000 shilling sale, 200 shillings is 0.4 percent. On a 500,000 shilling sale it is 0.04 percent. Any percentage-only provider loses badly on large baskets, which is why wholesalers should price their payment mix by ticket size, not by headline rate. We worked through the full fee picture in our guide to [mobile money merchant fees in 2026](/en/blog/mobile-money-merchant-fees-2026/).

Scanning instead of typing also removes a specific operational loss: the mistyped till number. A transfer sent to the wrong business is recoverable only through the operator's reversal process, and the hours spent chasing it cost more than the fee on the sale.

## South Africa is the outlier

South African shops pay the most for QR acceptance of any market in this comparison, because the codes come from private processors rather than a central scheme. SnapScan's merchant fees run from 2.55 to 2.95 percent excluding VAT depending on the previous month's turnover, and Zapper charges 2.9 percent excluding VAT on its free plan, per a [2026 fee comparison](https://antondevilliers.com/tools/payment-gateway-fees-south-africa).

A national alternative is coming, slowly. Industry reporting says a standardised QR+ code was expected in November 2026, with a pilot planned for the first quarter of 2027. Until it carries real wallet acceptance, the published standard changes nothing at the counter.

## What India's October change tells every small merchant

India just demonstrated that zero-cost QR is a policy choice, not a permanent feature. UPI had operated at zero merchant discount rate since January 2020. From 15 October 2026, coverage including [Moneylife](https://www.moneylife.in/article/upi-charges-on-transactions-over-2000-from-15th-october-what-new-mdr-framework-means-for-consumers-and-merchants/81663.html) describes a 0.4 percent charge on specified person-to-merchant transactions above 2,000 rupees, capped at 300 rupees, while merchants receiving up to 100,000 rupees a month keep a zero rate.

Scale explains why it held so long. UPI processed about 24.51 billion transactions in August 2026 alone, and roughly 145 billion between April and September 2026 against 114 billion a year earlier.

The lesson for a shop in Accra, Lagos or Nairobi is practical. Free acceptance today is a tariff decision that can be revised, so build your pricing with a point of margin in reserve rather than assuming the fee stays at zero.

## Five questions before you stick a code on the counter

1. **Who issues the code, the scheme or a reseller?** The answer sets your rate, as the Nigerian comparison above shows.
2. **Is the fee a percentage, a flat amount, or capped?** Flat and capped pricing favours large baskets, percentages favour small ones.
3. **When does the money arrive?** Same-day credit to your wallet and weekly settlement to a bank account are very different cash positions.
4. **Is the code static or dynamic?** A static sticker cannot carry the amount, so the customer types it and typos become your reconciliation problem.
5. **Does anything verify the payment?** A scan is not a receipt, and [fake payment confirmations](/en/blog/fake-payment-confirmation-fraud/) remain the most common counter fraud in the region.

## Where the till fits

A QR payment that never reaches your point of sale is an unrecorded sale. Record every scan as its own payment line, then match the day's QR total against the wallet or bank statement before you close.

[digabloPos](https://pos.digablo.fr/) is free, works offline and records each payment method on its own line, including mobile money and QR, so a daily reconciliation takes minutes rather than an evening. If you are still choosing a system, our [POS comparison](/en/pos-comparison) shows which ones let you define multiple payment methods and export them separately.

## Sources

- [GhQR customer FAQ, GhIPSS](https://ghipss.net/index.php/publications/ghqr-customer)
- [Universal GhQR: most secure, most affordable way to pay, The Business and Financial Times](https://thebftonline.com/2023/07/10/universal-ghqr-most-secure-most-affordable-way-to-pay/)
- [NIBSS upgrades NQR payment, Nairametrics](https://nairametrics.com/2025/02/07/nibss-upgrades-nqr-payment-to-enhance-digital-transactions-in-nigeria/)
- [NQR launch pricing tiers, Condia](https://thecondia.com/nibss-nqr-payment-nigeria/)
- [How NIBSS is rewiring Nigeria's payments system, ThisDay](https://www.thisdaylive.com/2026/02/02/how-strategic-shift-of-nibss-is-rewiring-nigerias-payments-system/)
- [Kenya Quick Response Code Standard, Central Bank of Kenya](https://www.centralbank.go.ke/QR/KenyaQuickResponseCodeStandard.pdf)
- [South Africa payment gateway fees compared](https://antondevilliers.com/tools/payment-gateway-fees-south-africa)
- [UPI charges on transactions over 2,000 rupees, Moneylife](https://www.moneylife.in/article/upi-charges-on-transactions-over-2000-from-15th-october-what-new-mdr-framework-means-for-consumers-and-merchants/81663.html)
