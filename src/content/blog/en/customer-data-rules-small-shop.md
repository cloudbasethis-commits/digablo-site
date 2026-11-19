---
title: "Customer phone numbers: what data protection now costs a small shop"
description: "Customer data rules for small shops in 2026: who must register, what regulators in Kenya, Nigeria, Ghana and South Africa have fined, and what to fix first."
pubDate: 2026-11-19
lang: "en"
author: "redaction"
tags: ["Data protection", "Compliance", "Kenya", "Nigeria", "Retail"]
faq:
  - question: "Does a customer paying by mobile money count as consent to send them marketing?"
    answer: "No. Kenya's Office of the Data Protection Commissioner ruled in 2025 that a customer's M-Pesa payment was not express, unequivocal consent for direct marketing, and fined the business KES 250,000. A payment authorises you to collect the money and keep the sales record. Sending promotional messages to that number is a separate purpose that needs its own permission and a working opt-out."
  - question: "Does a small shop have to register as a data controller?"
    answer: "It depends on the country. In Kenya, the ODPC exempts businesses with annual turnover below KES 5 million that also employ fewer than ten people, and both conditions must hold. Ghana requires registration from data controllers generally, with fees that start around GH¢120 for small organisations. In the UK, most organisations pay the ICO fee, which is £52 at the micro tier."
  - question: "How long can a shop keep customer phone numbers?"
    answer: "Only as long as the purpose that justified collecting them. A number captured to send a receipt or to track a credit account has a clear end point: the receipt is sent, the debt is settled. Keeping a ten-year list of every number that ever bought from you creates risk without revenue. Set a retention period per purpose, write it down, and delete on that schedule."
  - question: "What happens if a shop ignores a letter from the data regulator?"
    answer: "You usually lose. Kenyan decisions in 2025 show the ODPC deciding on the complainant's uncontested allegations when a business does not reply, which means the fine is set without your side of the story. In South Africa, failing to comply with the Information Regulator's enforcement notice is itself an offence and carries the heaviest penalties in the Act."
  - question: "What should a shop check in its POS software about customer data?"
    answer: "Four things. That each staff member has their own login, so you can see who viewed or exported a customer list. That you can delete a single customer record on request, not just hide it. That data stored on the device stays encrypted and is wiped when a phone is retired. And that your vendor's terms do not let them reuse your customer list for their own marketing."
---

In June 2025, Kenya's Office of the Data Protection Commissioner fined a pizza business KES 250,000 for sending marketing texts to a customer. The shop's defence was the one most retailers would give: the customer had paid by M-Pesa, so the number was in the system. The ODPC held that **an M-Pesa payment is not express, unequivocal consent for direct marketing** ([Data Protection Africa case summaries](https://dataprotectionafrica.notion.site/)).

That decision describes a routine most shops run every week. The till captures a number, someone exports the list, and a promotional message goes out before a public holiday. The money is small, the sale is honest, and the fine is still real.

## A payment is not a mailing list

Regulators across the region have settled on one rule: the purpose you collected data for is the purpose you may use it for. Kenyan decisions from 2025 are unusually consistent on this point.

| Case (Kenya, 2025) | What the shop did | Penalty |
|---|---|---|
| Pizza business, June 2025 | Marketed to a number taken from an M-Pesa payment | KES 250,000 |
| Solar retailer, January 2025 | Marketed with no consent and no opt-out mechanism | KES 250,000 |
| Hospital, September 2025 | Reused a number collected for registration and billing | KES 250,000 |
| Credit provider, August 2025 | Unsolicited marketing, no prior consent or clear purpose | KES 50,000 |
| Credit provider, June 2025 | Marketing texts to someone who never subscribed | KES 20,000 |
| Credit provider, July 2025 | Promotional texts without consent | KES 400,000 reported by [Nation](https://nation.africa/kenya/business/platinum-credit-fined-sh400-000-for-spamming-man-with-unsolicited-smss-calls-5286538) |

Read those amounts next to a shop's weekly margin and the conclusion is uncomfortable. A single complaint from one annoyed customer can cost more than a month of profit on a small retail line, and none of these cases involved a data breach or a hacker. They involved a list and a send button.

## Whether you must register, country by country

Registration and the duty to protect data are two different obligations. You can be exempt from registering and still be fully liable for how you use a customer's number.

| Country | Who must register | Threshold or test | Cost | Headline penalty |
|---|---|---|---|---|
| Kenya | Data controllers and processors, with an exemption for the smallest | Exempt only if turnover is below KES 5 million **and** fewer than 10 employees | Certificate valid 24 months | Reported at up to KES 5 million or 1% of prior-year turnover, whichever is lower |
| Nigeria | Controllers and processors of major importance | Processing personal data of more than 200 data subjects in 6 months, among other triggers | Fee tiers, around ₦100,000 below 2,500 data subjects | Compliance audit return due 31 March each year for older entities |
| Ghana | Data controllers generally, with no small-business carve-out | Registration regardless of size | From about GH¢120 for small organisations, higher tiers above | Prosecutions referred; the DPC called 2026 a year of enforcement |
| South Africa | No general register, but the Information Officer must be registered | Every responsible party | No fee | Up to R10 million or 10 years, with actual fines so far of R100,000 to R5 million |
| United Kingdom | Most organisations pay the data protection fee | Micro tier: turnover £632,000 or less, or 10 staff or fewer | £52 a year, £47 by direct debit | £400 fixed penalty for non-payment, separate from GDPR fines |

Two practical notes. Kenya's exemption needs both conditions at once, so a shop with eight staff and KES 6 million of turnover must register ([ODPC FAQs](https://www.odpc.go.ke/faqs/)). And some sectors must register whatever their size, health providers among them, so a pharmacy counter inside a general store changes the answer.

Ghana's figures need checking before you pay: the Data Protection Commission's own pages have carried two different fee schedules, one starting at GH¢120 and a later set starting at GH¢156 ([DPC](https://dataprotection.org.gh/help-faqs/)). The Commission registered 2,575 controllers by October 2026 and has referred firms for prosecution, so the enforcement talk is not theoretical ([Ghana News Agency](https://gna.org.gh/2026/10/dpc-strengthens-enforcement-after-registering-2575-data-controllers/)).

South Africa shows the pattern in reverse. The R10 million maximum under POPIA attaches to specific offences rather than to any slip, and the fines actually issued have been smaller: R5 million against the Department of Justice, R100,000 against the Electoral Commission, and a R500,000 fine in October 2026 after a business failed to act on a breach ([Polity](https://www.polity.org.za/article/r500-000-fine-reinforces-the-consequences-of-failing-to-act-on-popia-breaches-2026-10-30)). The common thread in the big numbers is ignoring the regulator, not the original mistake.

## What a shop collects without thinking about it

Most shop owners assume they hold no personal data. Walk the counter and count again.

- **Mobile money records.** Every till or MoMo payment carries a name and a number into your reports.
- **The credit ledger.** Names, numbers, addresses and amounts owed, which is a far more sensitive file than a marketing list. We cover the controls that file needs in our piece on [selling on credit](/en/blog/selling-on-credit-controls/).
- **WhatsApp broadcast lists.** Numbers moved out of the till and into a phone, often a staff member's own phone. Our guide to [selling on WhatsApp](/en/blog/selling-on-whatsapp-pricing-2026/) sets out how those conversations should be recorded.
- **Loyalty sign-ups.** Usually a notebook, sometimes a photo of a notebook in a group chat.
- **Staff files.** Copies of national IDs collected at hiring, which no shop ever deletes.
- **CCTV.** Footage of identifiable people, with its own notice requirements.

The riskiest of these is rarely the database. It is the list that left the system: a spreadsheet on a personal laptop, a photo in a group chat, an export a former employee still has.

## The four rules the decisions turn on

**Purpose.** Data collected to complete a payment or deliver a receipt cannot be reused for marketing without fresh permission. This is the point the ODPC made against both the pizza business and the hospital.

**Consent that can be shown.** Consent must be express and provable, which means a recorded tick, a keyword reply or a signed sheet, not an assumption drawn from a past purchase. A number listed publicly on a shopfront or a WhatsApp status is not consent either.

**An opt-out in every message.** The solar retailer's fine turned specifically on the absence of a mechanism to stop the messages. Two words at the end of an SMS, and that case changes.

**Answer the regulator.** Across the 2025 Kenyan decisions, businesses that did not respond had findings entered against them on the complainant's account alone. Silence is the most expensive reply available.

## What this means for your till software

Your POS is where most of this data is created, so it is where the fix is cheapest.

Give every staff member their own login. A shared till account makes it impossible to say who exported a customer list, which also removes your main defence if one leaks. Check that you can delete a single customer record, and that deletion survives the next sync rather than reappearing from a cached copy. If your software runs offline on phones, which it should, ask where that local copy lives and what happens when the phone is sold. And read the vendor's terms for one clause in particular: whether they may use your customer data for their own purposes.

**[digabloPos](https://pos.digablo.fr/)** keeps sales and customer records on your own devices, works fully offline, uses per-user accounts, and does not resell your customer data. It is our software, and it is free. If you are weighing options, our [POS comparison](/en/pos-comparison) shows which tools offer per-user accounts and clean data export rather than a single shared password.

## Five things to fix this week

1. Check whether you cross your country's registration threshold, using turnover and headcount together where that is the test.
2. Write one sentence at the point of collection: what the number is for, and who to contact to be removed.
3. Add an opt-out line to every promotional message you send, including WhatsApp broadcasts.
4. Find the exports. Spreadsheets, photos of notebooks, old phones, and former employees' devices.
5. Set a retention period per purpose, and delete on it.

None of this costs money. It costs about an afternoon, which is less than the smallest fine in the table above. If you want help mapping what your till actually stores and who can reach it, [tell us how your shop runs](/en/#contact) and we will go through it with you.

## Sources

- [ODPC frequently asked questions, Office of the Data Protection Commissioner, Kenya](https://www.odpc.go.ke/faqs/)
- [ODPC decision summaries, Data Protection Africa](https://dataprotectionafrica.notion.site/)
- [Platinum Credit fined for unsolicited SMS, Nation](https://nation.africa/kenya/business/platinum-credit-fined-sh400-000-for-spamming-man-with-unsolicited-smss-calls-5286538)
- [Guidance notice on registration of data controllers and processors of major importance, Nigeria](https://ndpc.gov.ng/)
- [Help and FAQs, Data Protection Commission, Ghana](https://dataprotection.org.gh/help-faqs/)
- [DPC strengthens enforcement after registering 2,575 data controllers, Ghana News Agency](https://gna.org.gh/2026/10/dpc-strengthens-enforcement-after-registering-2575-data-controllers/)
- [R500,000 fine reinforces the consequences of failing to act on POPIA breaches, Polity](https://www.polity.org.za/article/r500-000-fine-reinforces-the-consequences-of-failing-to-act-on-popia-breaches-2026-10-30)
- [Data protection fee, Information Commissioner's Office, UK](https://ico.org.uk/for-organisations/data-protection-fee/data-protection-fee)
