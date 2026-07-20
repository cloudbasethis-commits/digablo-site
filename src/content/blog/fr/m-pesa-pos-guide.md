---
title: "Encaisser avec M-Pesa : le guide complet du commerçant"
description: "Till number ou paybill, réconciliation, intégration à la caisse : tout ce qu'un commerçant doit savoir pour accepter M-Pesa sans perdre de temps ni d'argent."
pubDate: 2026-07-01
lang: "fr"
author: "DIGABLO"
tags: ["M-Pesa", "Mobile Money", "digabloPos", "Kenya", "Paiement"]
faq:
  - question: "Till number, paybill ou Pochi la Biashara : que choisir ?"
    answer: "La règle est simple : si vous vendez au comptoir, prenez un till number (Buy Goods and Services), le produit conçu pour l'encaissement en point de vente. Le paybill est pensé pour le paiement de factures et impose au client de saisir un numéro de compte en plus du numéro de paybill, ce qui convient à un loyer, un abonnement ou une facture identifiée, mais ralentit la file au comptoir. Pochi la Biashara vise les très petits commerçants et vendeurs informels qui veulent séparer l'argent professionnel de l'argent personnel. Certaines activités utilisent légitimement les deux."
  - question: "Qu'est-ce que le STK Push et pourquoi est-ce important ?"
    answer: "Le STK Push est une demande de paiement que la caisse envoie directement sur le téléphone du client pour le montant exact : une invite apparaît sur son écran et il saisit son code PIN dessus. Cela inverse le sens de la vérification : au lieu d'inspecter le SMS de confirmation du client, le système reçoit la confirmation de l'opérateur et enregistre la vente avec la référence de transaction. Ce mécanisme s'appuie sur les API publiques Daraja de Safaricom."
  - question: "Comment réconcilier les paiements M-Pesa avec sa caisse ?"
    answer: "Le problème vient du fait que le paiement et la vente vivent dans deux systèmes séparés. Quand le commerçant jette un œil au SMS de confirmation puis saisit la vente en « espèces » ou « autre », la caisse et le relevé M-Pesa ne disent plus la même chose le soir venu. L'intégration règle le sujet : la référence de transaction est stockée sur la vente et imprimée sur le ticket, et les rapports ventilent le chiffre d'affaires par moyen de paiement, ligne à ligne."
  - question: "Quels sont les risques d'accepter M-Pesa sans intégration à la caisse ?"
    answer: "Trois problèmes récurrents. Les paiements fantômes, quand un client présente un faux SMS de confirmation et repart avec la marchandise alors que l'argent n'est jamais arrivé. Les erreurs de montant, quand le client tape 1 200 au lieu de 12 000 et que ça passe dans la précipitation. Et l'impossibilité de rapprocher les écritures : sans référence de transaction sur le ticket, relier une ligne du relevé à une vente précise relève de l'archéologie en fin de mois."
  - question: "Peut-on facturer des frais au client qui paie en M-Pesa ?"
    answer: "C'est commercialement mauvais et parfois contraire aux conditions du service. Vous pénalisez le moyen de paiement que la majorité de vos clients préfèrent. Absorbez le coût commerçant dans votre marge, comme n'importe quel frais d'encaissement, et vérifiez les tarifs en vigueur auprès de Safaricom avant de construire vos prix, pas après."
  - question: "Combien de personnes utilisent M-Pesa ?"
    answer: "M-Pesa comptait 34 millions de clients actifs au Kenya fin 2024, et 66,2 millions de clients sur l'ensemble de ses marchés. Plus largement, le mobile money a dépassé 2,1 milliards de comptes enregistrés et 1 680 milliards de dollars de valeur de transactions dans le monde en 2024, avec Orange Money à 9 milliards de transactions pour 164 milliards d'euros sur 17 pays et Airtel Money autour de 38 millions de clients."
---

Au Kenya, demander à un client s'il paie en espèces ou par carte n'a plus vraiment de sens. La question, c'est **« Till number ? »**. M-Pesa comptait **34 millions de clients actifs au Kenya** fin 2024 ([Safaricom](https://www.safaricom.co.ke/media-center-landing/press-releases/safaricoms-m-pesa-hits-34-million-customers-in-kenya)) et **66,2 millions de clients** sur l'ensemble de ses marchés ([Statista](https://www.statista.com/statistics/1139190/m-pesa-customer-numbers/)).

Pour un commerçant, la vraie question n'est donc plus « faut-il accepter M-Pesa ? », mais **« comment l'accepter proprement ? »**. Car entre encaisser sur son téléphone personnel et encaisser dans sa caisse, l'écart de fiabilité est considérable.

## Till number, Paybill, Pochi : lequel choisir ?

Trois dispositifs cohabitent, et beaucoup de commerçants utilisent le mauvais.

**Le Till number (Buy Goods and Services).** C'est le dispositif conçu pour l'encaissement en point de vente. Le client saisit votre numéro de till, le montant, et valide. C'est le choix par défaut d'un commerce physique.

**Le Paybill.** Pensé pour les paiements de factures, il demande au client de saisir un numéro de compte en plus du numéro de paybill. C'est adapté à un loyer, un abonnement, une facture identifiée, pas à une vente au comptoir : la saisie supplémentaire ralentit la file et génère des erreurs.

**Pochi la Biashara.** Le format destiné aux très petits commerces et aux vendeurs informels, qui sépare l'argent professionnel de l'argent personnel sans exiger l'infrastructure d'un till classique. Pratique pour démarrer, limité dès que l'activité grossit.

La règle est simple : **si vous vendez au comptoir, prenez un till number**. Si vous facturez à des clients identifiés, prenez un paybill. Certains commerces ont légitimement les deux.

## Le vrai problème : la réconciliation

Accepter M-Pesa est facile. Le difficile arrive après.

Le scénario classique : le client paie sur le till, le commerçant reçoit le SMS de confirmation, jette un œil au montant, et valide la vente dans sa caisse en tapant « espèces » ou « autre ». Le soir, la caisse dit une chose, le relevé M-Pesa en dit une autre, et personne ne sait où est l'écart.

Ce mode de fonctionnement produit trois problèmes récurrents :

- **Les paiements fantômes.** Un client montre un SMS de confirmation, le commerçant valide, mais l'argent n'est jamais arrivé. Le faux SMS de confirmation est une fraude courante et facile.
- **Les écarts de montant.** Le client saisit 1 200 au lieu de 12 000. Dans le rush, ça passe.
- **L'impossibilité de recouper.** Sans référence de transaction dans le ticket, associer une ligne du relevé M-Pesa à une vente précise devient un travail d'archéologue en fin de mois.

Ces trois problèmes ont la même cause : **le paiement et la vente vivent dans deux systèmes séparés**.

## Ce que change une intégration en caisse

Une caisse réellement intégrée à M-Pesa inverse le sens de la vérification. Ce n'est plus vous qui contrôlez le SMS du client, c'est le système qui confirme la transaction.

Le déroulé côté comptoir :

1. Le vendeur clôture le panier et sélectionne le paiement M-Pesa.
2. La caisse envoie une demande de paiement du montant exact au numéro du client (**STK Push**, une invite qui s'affiche directement sur son téléphone).
3. Le client saisit son code PIN sur son propre écran.
4. La caisse reçoit la confirmation de l'opérateur et enregistre la vente avec la référence de transaction.

Aucun montant retapé, aucun SMS à interpréter, aucune référence à noter à la main. Cette mécanique repose sur les API publiques de Safaricom, regroupées sous la plateforme [Daraja](https://developer.safaricom.co.ke/), qui exposent notamment le STK Push et les notifications de confirmation.

Le gain n'est pas seulement du temps gagné au comptoir. C'est la fin des écarts de caisse liés au mobile money, et un relevé qui se recoupe ligne à ligne avec les ventes.

## Les frais, et qui les paie

Deux points à clarifier avant de vous lancer.

**Les frais côté commerçant.** Les paiements Buy Goods entrants sont soumis à une tarification côté marchand, avec des barèmes qui évoluent régulièrement et des exonérations sur les petits montants. Vérifiez les conditions en vigueur auprès de Safaricom avant de construire vos prix, et non l'inverse.

**La tentation de répercuter.** Facturer au client des frais pour paiement M-Pesa est une mauvaise idée commerciale, et parfois contraire aux conditions du service. Vous pénalisez le moyen de paiement que la majorité de vos clients préfère. Intégrez le coût dans votre marge, comme n'importe quel frais d'encaissement.

## Au-delà du Kenya

M-Pesa n'est pas seul, et un commerçant qui s'équipe aujourd'hui a intérêt à raisonner à l'échelle de l'écosystème mobile money plutôt qu'à celle d'un seul opérateur.

**Orange Money** a traité **9 milliards de transactions pour 164 milliards d'euros** en 2024 sur 17 pays ([We Are Tech Africa](https://www.wearetech.africa/en/fils-uk/news/orange-money-9-billion-transactions-164-billion-transferred-by-2024-in-africa)). **Airtel Money** comptait environ **38 millions de clients** en 2024 ([Airtel Africa](https://airtelafricaara2024.com/media/eayp4j5w/printall_2024-05-13_081026-8c40b57f-5b54-4283-ab1e-693330d055ed.pdf)). À l'échelle mondiale, le mobile money a dépassé **2,1 milliards de comptes enregistrés** et **1 680 milliards de dollars** de transactions en 2024 ([GSMA](https://www.gsma.com/newsroom/press-release/mobile-money-surpasses-two-billion-registered-accounts-and-over-half-a-billion-monthly-active-users-globally/)).

Le bon critère de choix n'est donc pas « cette caisse gère-t-elle M-Pesa ? », mais **« cette caisse gère-t-elle les opérateurs de mon marché, et ceux des marchés où j'ouvrirai demain ? »**.

## Checklist avant de vous équiper

- [ ] Vous avez un **till number** au nom de l'entreprise, pas un numéro personnel.
- [ ] Votre caisse déclenche le paiement (**STK Push**) au lieu d'attendre un SMS.
- [ ] La **référence de transaction** est enregistrée dans la vente et imprimée sur le ticket.
- [ ] Vos rapports séparent le chiffre d'affaires **par moyen de paiement**.
- [ ] Le système continue de fonctionner **hors ligne**, avec synchronisation au retour du réseau.
- [ ] Vous connaissez les **frais marchands** en vigueur et ils sont intégrés à vos prix.

## Faire simple

C'est exactement le rôle de **[digabloPos](https://pos.digablo.fr/)** : une caisse **gratuite et sans abonnement obligatoire**, avec le mobile money intégré nativement.

- **M-Pesa, Orange Money et Airtel Money** directement au comptoir, sans ressaisie.
- **Référence de transaction** rattachée à la vente, pour une réconciliation qui tient toute seule.
- **Rapports par moyen de paiement**, pour voir enfin la part réelle du mobile money.
- **Mode hors ligne complet**, indispensable là où la couverture réseau est irrégulière.
- **Stocks et multi-appareils inclus**, pas en option payante.

Vous voulez brancher M-Pesa sur votre caisse ou sur votre système existant ? [Parlons de votre projet](/#contact).

## Sources

- [Safaricom's M-Pesa hits 34 million customers in Kenya — Safaricom](https://www.safaricom.co.ke/media-center-landing/press-releases/safaricoms-m-pesa-hits-34-million-customers-in-kenya)
- [M-Pesa customer numbers — Statista](https://www.statista.com/statistics/1139190/m-pesa-customer-numbers/)
- [Safaricom Daraja API — Safaricom Developer Portal](https://developer.safaricom.co.ke/)
- [Orange Money : 9 billion transactions, 164 billion transferred in 2024 — We Are Tech Africa](https://www.wearetech.africa/en/fils-uk/news/orange-money-9-billion-transactions-164-billion-transferred-by-2024-in-africa)
- [Airtel Africa Annual Report 2024](https://airtelafricaara2024.com/media/eayp4j5w/printall_2024-05-13_081026-8c40b57f-5b54-4283-ab1e-693330d055ed.pdf)
- [Mobile money surpasses two billion registered accounts — GSMA](https://www.gsma.com/newsroom/press-release/mobile-money-surpasses-two-billion-registered-accounts-and-over-half-a-billion-monthly-active-users-globally/)
