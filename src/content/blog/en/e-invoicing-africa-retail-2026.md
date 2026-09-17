---
title: "E-invoicing in Africa: what your POS must do in 2026"
description: "E-invoicing in Africa 2026: Kenya eTIMS, Nigeria's NRS platform, Ghana E-VAT. Deadlines, penalties and the POS features that keep a shop compliant offline."
pubDate: 2026-09-17
lang: "en"
author: "redaction"
tags: ["Compliance", "E-invoicing", "Kenya", "Nigeria", "POS"]
faq:
  - question: "Which African countries require electronic invoicing in 2026?"
    answer: "Kenya requires eTIMS invoices from every business in operation, with non VAT traders using the lighter eTIMS Lite route. Nigeria is rolling out its national e-invoicing platform by turnover band, starting with the largest taxpayers. Ghana's E-VAT covers VAT registered businesses. South Africa has published a consultation paper but has not yet set a mandate for small retailers."
  - question: "What is the difference between eTIMS OSCU and VSCU?"
    answer: "Both are control units that sign invoices so the Kenya Revenue Authority recognises them. OSCU, the Online Sales Control Unit, suits systems that are connected while trading and transmits invoices as they are issued. VSCU, the Virtual Sales Control Unit, suits high volume or intermittently connected systems and transmits in batches. A shop with unreliable internet usually needs the second behaviour."
  - question: "What happens if a supplier cannot issue an eTIMS invoice?"
    answer: "The buyer loses the deduction. Kenya Revenue Authority validates expense claims against eTIMS records, so a business customer who receives a manual receipt cannot claim that cost against taxable income. In practice this pushes formal buyers to drop suppliers who are not onboarded, which is why compliance now affects sales volume and not only tax exposure."
  - question: "Does e-invoicing work when the shop has no internet connection?"
    answer: "It depends on the integration method. Systems built around batch transmission can queue signed invoices locally and send them once connectivity returns, which is why the batch route exists in the first place. Systems that require a live call to the tax platform for every sale will stop the queue at the counter. Ask a vendor to demonstrate a sale with the router switched off."
  - question: "When must small businesses in Nigeria comply with e-invoicing?"
    answer: "Businesses with annual turnover below one billion naira sit in the final phase. They are expected to complete integration with the national platform during 2027, with enforcement beginning in January 2028. Larger taxpayers are already transmitting. Small traders who sell to corporate customers usually move earlier than the deadline, because those customers require compliant documents."
---

A hardware shop in Nairobi lost a corporate account last quarter for a reason that had nothing to do with price. The buyer's accountant could not claim the expense, because the invoice was a manual receipt. Kenya Revenue Authority now validates expense claims against eTIMS records, and a cost without an eTIMS invoice behind it is simply disallowed ([Adamjee Auditors](https://adamjeeauditors.com/etims-compliance-kenya-2026/)).

That is the shift worth understanding. Electronic invoicing stopped being a tax department problem and became a commercial one, because your customers now lose money when you are not compliant.

## The short version

Four markets are moving at once, at very different speeds. Kenya is furthest along and already touches the smallest traders. Nigeria is phasing by turnover. Ghana has narrowed who is in scope while tightening the rules for those who remain. South Africa is still consulting.

| Market | System | Who is in scope now | Headline penalty |
|---|---|---|---|
| Kenya | eTIMS (KRA) | All businesses, including non VAT traders via eTIMS Lite | Up to KSh 1,000,000 or 10% of the tax, with floors of KSh 100,000 for companies |
| Nigeria | NRS Merchant Buyer Solution | Turnover above 1 billion naira, transmitting since July 2026 | 1,000,000 naira for the first day, then 10,000 naira per day |
| Ghana | E-VAT (GRA) | VAT registered businesses above the new GHS 750,000 threshold | VAT Act penalties, plus loss of input claims |
| South Africa | Digital VAT Model (consultation) | Nobody yet, mandate expected from 2030 | Not set |
| United Kingdom | Making Tax Digital for VAT | All VAT registered businesses | Points based penalties for late filing |

Two lines in that table decide most purchasing conversations: Kenya, because compliance is already unavoidable, and Nigeria, because the clock is visible and the penalty is daily.

## Kenya: the till became a tax device

In Kenya, invoices must be signed by a control unit before they count. Businesses integrate through an **OSCU**, meant for systems that are online while trading, or a **VSCU**, meant for bulk invoicing and systems that are not always connected ([RSM Kenya](https://www.rsm.global/kenya/insights/tax-alert-all-you-need-know-about-tims-and-etims)). Very small service businesses can use eTIMS Lite from a phone, but a shop running dozens of sales an hour needs the integration to sit inside the point of sale, not beside it.

Adoption is broad and still incomplete. KRA reported **750,915 taxpayers onboarded to eTIMS as at 30 June 2026**, against a stated target of one million for the financial year ([Techweez](https://techweez.com/2026/07/10/kra-revenue-collection-2026-tax-performance/)). The gap is mostly small traders, which is exactly where enforcement is heading.

Then came the September notice. On 4 September 2026, KRA told all taxpayers in business to maintain accurate and current **stock records inside TIMS and eTIMS**, covering goods purchased, sold, transferred, returned, adjusted or otherwise disposed of ([Kenyans.co.ke](https://www.kenyans.co.ke/news/126795-kra-issues-new-stock-records-directive-businesses-using-tims-etims)). The legal basis is not new, it sits in Regulation 4(3)(c) of the Tax Procedures (Electronic Tax Invoice) Regulations, 2024. What is new is the intention to enforce it.

Read that as a warning about your inventory module. A POS that tracks sales but lets stock drift, because staff record deliveries in a notebook, is about to produce a mismatch that a tax officer can see. Consultative forums ran through September, and no implementation date has been announced, so there is time to clean the data rather than argue about it later.

## Nigeria: the thresholds give time, the 24 hour rule does not

Nigeria's rollout follows turnover. Large taxpayers above 5 billion naira and medium businesses between 1 and 5 billion naira started transmitting through the NRS Merchant Buyer Solution in July 2026, with the medium band's enforcement window running from January to March 2027. Businesses below 1 billion naira complete integration during 2027 and face enforcement from January 2028 ([Fonoa](https://www.fonoa.com/resources/blog/nigeria-releases-phased-rollout-plan-for-e-invoicing)).

The detail retailers miss sits in the consumer rules. B2C supplies above **50,000 naira** require reporting to the tax platform, and late reporting of consumer sales carries a fine per day of delay ([Duplo](https://tryduplo.com/blog/nrs-e-invoicing-in-nigeria-what-it-is-who-it-affects-and-how-to-comply-in-2026/)). A daily penalty changes what you should ask of software. A weekly export is not a process, it is an accumulating liability.

## Ghana: fewer businesses in scope, stricter for the rest

Ghana went the other direction on scope. The Value Added Tax Act, 2025 (Act 1151), in force since 1 January 2026, raised the registration threshold for suppliers of goods from GHS 200,000 to **GHS 750,000**, which lifts a large number of small traders out of VAT and therefore out of E-VAT ([Fonoa](https://www.fonoa.com/resources/blog/ghana-e-vat-e-invoicing-2026)).

For everyone still registered, the Ghana Revenue Authority has continued migrating taxpayers onto E-VAT, including several thousand medium and small firms beyond the original large taxpayer group ([ClearTax Ghana](https://www.cleartax.com/gh/e-invoicing-ghana)). If your turnover sits near GHS 750,000 and is growing, plan the integration before you cross the line, not after.

## South Africa and the UK: slower, same direction

SARS published a consultation paper on 17 August 2026 proposing a Digital VAT Model built on structured e-invoices and near real time reporting, with mandatory adoption phased from large taxpayers and government entities and a runway that stretches into the 2030s ([SARS](https://www.sars.gov.za/types-of-tax/value-added-tax/vat-modernisation/)). South African retailers have no deadline to meet today.

The United Kingdom got there earlier through a different door. Making Tax Digital already requires VAT registered businesses to keep digital records and file through compatible software ([GOV.UK](https://www.gov.uk/government/collections/making-tax-digital-for-vat)). The lesson for anyone buying a system in 2026 is that no market is moving back toward paper.

## The question nobody asks the vendor

Every one of these systems assumes connectivity that African retail does not reliably have. This is where the integration choice becomes practical rather than technical.

A system that calls the tax platform for every single sale will stop your queue when the line drops. A system that signs locally and transmits in batches keeps trading and reconciles later, which is precisely why the batch control unit exists in Kenya's design. Our guide to [offline POS software](/en/blog/offline-pos-software/) covers the mechanics, and the same reasoning applies to mobile money reconciliation, as we explain in the [M-Pesa merchant guide](/en/blog/m-pesa-pos-guide/).

Five questions, in the order they matter:

1. Are you certified or integrated with the tax platform in **my** country, and can you show the registration?
2. Does invoice signing happen on the device, or only when the internet is up?
3. What does the system do with a sale made during an outage, and when does it transmit?
4. Does stock movement, including returns and transfers, get recorded in the same system as sales?
5. When the rules change, who pays for the update?

Ask the second and third questions with the router switched off. A demonstration answers them faster than a datasheet.

## Where digabloPos fits

[digabloPos](https://pos.digablo.fr/) is free point of sale software built for markets where the network fails and mobile money dominates. Sales continue offline and sync automatically when the connection returns, stock moves with the sale rather than in a separate notebook, and reports break down revenue by tax rate and payment method, which is the raw material every one of these tax platforms wants.

If you are weighing options, start with our [POS comparison](/en/pos-comparison). If your priority is keeping cost at zero, the [free POS software guide](/en/blog/free-pos-software/) explains which fees usually hide behind that word. Selling across two of these markets at once? [Tell us about your setup](/en/#contact) and we will tell you what actually needs to change.

## Sources

- [eTIMS compliance guide, Adamjee Auditors](https://adamjeeauditors.com/etims-compliance-kenya-2026/)
- [TIMS and eTIMS tax alert, RSM Kenya](https://www.rsm.global/kenya/insights/tax-alert-all-you-need-know-about-tims-and-etims)
- [KRA stock records directive, Kenyans.co.ke](https://www.kenyans.co.ke/news/126795-kra-issues-new-stock-records-directive-businesses-using-tims-etims)
- [KRA revenue performance 2025/26, Techweez](https://techweez.com/2026/07/10/kra-revenue-collection-2026-tax-performance/)
- [Nigeria phased e-invoicing rollout, Fonoa](https://www.fonoa.com/resources/blog/nigeria-releases-phased-rollout-plan-for-e-invoicing)
- [Ghana E-VAT and the 2026 VAT Act, Fonoa](https://www.fonoa.com/resources/blog/ghana-e-vat-e-invoicing-2026)
- [VAT Modernisation consultation, SARS](https://www.sars.gov.za/types-of-tax/value-added-tax/vat-modernisation/)
