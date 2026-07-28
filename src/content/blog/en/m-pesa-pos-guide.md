---
title: "Accepting M-Pesa: the complete merchant's guide"
description: "Till number or paybill, reconciliation, POS integration: everything a merchant needs to accept M-Pesa without losing time or money at the counter."
pubDate: 2026-07-01
lang: "en"
author: "redaction"
altSlug: "m-pesa-pos-guide"
tags: ["M-Pesa", "Mobile Money", "digabloPos", "Kenya", "Payments"]
faq:
  - question: "Should a merchant use a till number, a paybill, or Pochi la Biashara?"
    answer: "The rule is simple: if you sell over a counter, get a till number (Buy Goods and Services), the product designed for point of sale collection. Paybill is built for bill payments and requires the customer to enter an account number on top of the paybill number, which suits rent, subscriptions or identified invoices but slows a counter queue. Pochi la Biashara targets very small and informal traders who need to separate business money from personal money. Some businesses legitimately run both a till and a paybill."
  - question: "What is STK Push and why does it matter?"
    answer: "STK Push is a payment request the register sends directly to the customer's phone for the exact amount, so a prompt appears on their screen and they enter their PIN there. It reverses the direction of verification: instead of inspecting the customer's confirmation SMS, the system receives the operator's confirmation and records the sale together with the transaction reference. It relies on Safaricom's public Daraja APIs."
  - question: "How do you reconcile M-Pesa payments with your register?"
    answer: "The problem comes from the payment and the sale living in two separate systems. When the merchant glances at a confirmation SMS and rings the sale up as cash or other, the register and the M-Pesa statement disagree by evening. Integration fixes it: the transaction reference is stored on the sale and printed on the receipt, and reports break revenue down by payment method, so the statement matches your sales line by line."
  - question: "What are the risks of accepting M-Pesa without POS integration?"
    answer: "Three recurring problems. Phantom payments, where a customer shows a fake confirmation SMS and the merchant releases the goods for money that never arrived. Amount mismatches, where the customer types 1,200 instead of 12,000 and it goes through in the rush. And no way to match records, because without a transaction reference on the receipt, tying a statement line to a specific sale becomes archaeology at month end."
  - question: "Can a merchant charge customers a fee for paying by M-Pesa?"
    answer: "It is commercially poor and sometimes against the service terms. You would be penalising the payment method most of your customers prefer. Absorb the merchant-side cost into your margin, like any other collection fee, and check Safaricom's current tariffs before you build your prices rather than after."
  - question: "How many people use M-Pesa?"
    answer: "M-Pesa reached 34 million active customers in Kenya at the end of 2024, and 66.2 million customers across all its markets. More broadly, mobile money passed 2.1 billion registered accounts and 1.68 trillion dollars in transaction value globally in 2024, with Orange Money processing 9 billion transactions worth 164 billion euros across 17 countries and Airtel Money serving around 38 million customers."
---

In Kenya, asking a customer whether they are paying cash or card barely makes sense any more. The question is **"Till number?"**. M-Pesa reached **34 million active customers in Kenya** at the end of 2024 ([Safaricom](https://www.safaricom.co.ke/media-center-landing/press-releases/safaricoms-m-pesa-hits-34-million-customers-in-kenya)) and **66.2 million customers** across all its markets ([Statista](https://www.statista.com/statistics/1139190/m-pesa-customer-numbers/)).

So for a merchant the real question is no longer "should I accept M-Pesa?" but **"how do I accept it properly?"**. Because the gap in reliability between taking payment on your personal phone and taking it in your register is enormous.

## Till number, Paybill, Pochi: which one?

Three products coexist, and plenty of merchants use the wrong one.

**Till number (Buy Goods and Services).** This is the product designed for point of sale collection. The customer enters your till number and the amount, then confirms. It is the default choice for a physical shop.

**Paybill.** Built for bill payments, it requires the customer to enter an account number on top of the paybill number. That suits rent, a subscription, an identified invoice, not a counter sale, where the extra input slows the queue and generates errors.

**Pochi la Biashara.** The format aimed at very small traders and informal vendors, separating business money from personal money without requiring full till infrastructure. Handy to start with, limiting as soon as the business grows.

The rule is simple: **if you sell over a counter, get a till number**. If you invoice identified customers, get a paybill. Some businesses legitimately run both.

## The real problem is reconciliation

Accepting M-Pesa is easy. What comes after is not.

The classic scenario: the customer pays into the till, the merchant gets the confirmation SMS, glances at the amount, and rings the sale up in the register as "cash" or "other". By evening the register says one thing, the M-Pesa statement says another, and nobody knows where the gap is.

This way of working produces three recurring problems:

- **Phantom payments.** A customer shows a confirmation SMS, the merchant releases the goods, but the money never arrived. Fake confirmation messages are a common and easy fraud.
- **Amount mismatches.** The customer types 1,200 instead of 12,000. In a rush, it goes through.
- **No way to match records.** Without a transaction reference on the receipt, tying a line of the M-Pesa statement to a specific sale becomes archaeology at month end.

All three share one cause: **the payment and the sale live in two separate systems**.

## What POS integration changes

A register genuinely integrated with M-Pesa reverses the direction of verification. You no longer inspect the customer's SMS; the system confirms the transaction.

At the counter it runs like this:

1. The cashier closes the cart and selects M-Pesa payment.
2. The register pushes a payment request for the exact amount to the customer's number (**STK Push**, a prompt that appears directly on their phone).
3. The customer enters their PIN on their own screen.
4. The register receives the operator's confirmation and records the sale together with the transaction reference.

No amount re-keyed, no SMS to interpret, no reference written down by hand. This mechanism relies on Safaricom's public APIs, grouped under the [Daraja](https://developer.safaricom.co.ke/) platform, which expose STK Push and confirmation callbacks among others.

The gain is not only time saved at the counter. It is the end of mobile money cash discrepancies, and a statement that matches your sales line by line.

## Fees, and who pays them

Two things to settle before you start.

**Merchant-side fees.** Incoming Buy Goods payments carry merchant pricing, with tariffs that change regularly and exemptions on small amounts. Check the current terms with Safaricom before you build your prices, not after.

**The temptation to pass them on.** Charging customers a surcharge for paying by M-Pesa is commercially poor and sometimes against the service terms. You penalise the payment method most of your customers prefer. Absorb the cost into your margin, like any other collection fee.

## Beyond Kenya

M-Pesa is not alone, and a merchant buying equipment today is better off thinking at the scale of the mobile money ecosystem rather than a single operator.

**Orange Money** processed **9 billion transactions worth 164 billion euros** in 2024 across 17 countries ([We Are Tech Africa](https://www.wearetech.africa/en/fils-uk/news/orange-money-9-billion-transactions-164-billion-transferred-by-2024-in-africa)). **Airtel Money** had around **38 million customers** in 2024 ([Airtel Africa](https://airtelafricaara2024.com/media/eayp4j5w/printall_2024-05-13_081026-8c40b57f-5b54-4283-ab1e-693330d055ed.pdf)). Globally, mobile money passed **2.1 billion registered accounts** and **1.68 trillion dollars** in transaction value in 2024 ([GSMA](https://www.gsma.com/newsroom/press-release/mobile-money-surpasses-two-billion-registered-accounts-and-over-half-a-billion-monthly-active-users-globally/)).

So the right selection criterion is not "does this register handle M-Pesa?" but **"does it handle the operators in my market, and the ones in the markets I will open next?"**.

## Checklist before you buy

- [ ] You have a **till number** in the business name, not a personal number.
- [ ] Your register initiates the payment (**STK Push**) instead of waiting for an SMS.
- [ ] The **transaction reference** is stored on the sale and printed on the receipt.
- [ ] Your reports break revenue down **by payment method**.
- [ ] The system keeps working **offline**, syncing when the network returns.
- [ ] You know the current **merchant fees** and they are priced into your margin.

## Keeping it simple

That is precisely what **[digabloPos](https://pos.digablo.fr/)** is for: a **free POS with no mandatory subscription**, with mobile money built in natively.

- **M-Pesa, Orange Money and Airtel Money** straight from the counter, with no re-keying.
- **Transaction reference** attached to the sale, so reconciliation takes care of itself.
- **Reports by payment method**, so you finally see mobile money's real share.
- **Full offline mode**, essential where network coverage is irregular.
- **Inventory and multi-device included**, not sold as an add-on.

Want to connect M-Pesa to your register or to an existing system? [Let's talk about your project](/en/#contact).

## Sources

- [Safaricom's M-Pesa hits 34 million customers in Kenya, Safaricom](https://www.safaricom.co.ke/media-center-landing/press-releases/safaricoms-m-pesa-hits-34-million-customers-in-kenya)
- [M-Pesa customer numbers, Statista](https://www.statista.com/statistics/1139190/m-pesa-customer-numbers/)
- [Safaricom Daraja API, Safaricom Developer Portal](https://developer.safaricom.co.ke/)
- [Orange Money: 9 billion transactions, 164 billion transferred in 2024, We Are Tech Africa](https://www.wearetech.africa/en/fils-uk/news/orange-money-9-billion-transactions-164-billion-transferred-by-2024-in-africa)
- [Airtel Africa Annual Report 2024](https://airtelafricaara2024.com/media/eayp4j5w/printall_2024-05-13_081026-8c40b57f-5b54-4283-ab1e-693330d055ed.pdf)
- [Mobile money surpasses two billion registered accounts, GSMA](https://www.gsma.com/newsroom/press-release/mobile-money-surpasses-two-billion-registered-accounts-and-over-half-a-billion-monthly-active-users-globally/)
