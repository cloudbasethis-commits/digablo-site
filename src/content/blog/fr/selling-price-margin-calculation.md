---
title: "Prix de vente : calculer sa marge sans se tromper de formule"
description: "Calculer un prix de vente juste : taux de marge, taux de marque, coefficient multiplicateur, seuil de revente à perte. Les formules et les erreurs fréquentes."
pubDate: 2026-10-08
lang: "fr"
author: "redaction"
tags: ["Prix de vente", "Marge", "Commerce", "TVA", "digabloPos"]
faq:
  - question: "Quelle différence entre taux de marge et taux de marque ?"
    answer: "Le taux de marge rapporte la marge brute au prix d'achat hors taxes, le taux de marque la rapporte au prix de vente hors taxes. Sur un article acheté 10 euros et vendu 16,67 euros hors taxes, la marge brute est de 6,67 euros : cela donne 66,7 % de taux de marge et 40 % de taux de marque. Sur un même article, le taux de marge est toujours supérieur au taux de marque."
  - question: "Comment calculer un prix de vente à partir d'une marge visée ?"
    answer: "On part du taux de marque, pas du taux de marge, parce que le taux de marque s'exprime dans la même base que le prix de vente. La formule est : prix de vente hors taxes égale coût d'achat hors taxes divisé par un moins le taux de marque visé. Pour un article acheté 25 euros avec 60 % de marque visée, le prix ressort à 62,50 euros hors taxes, soit 75 euros avec une TVA à 20 %."
  - question: "Que vaut un coefficient multiplicateur donné sans précision ?"
    answer: "Rien, tant qu'on ne sait pas comment il est construit. Certaines sources définissent le coefficient comme le prix de vente TTC divisé par le prix d'achat hors taxes, d'autres comme un rapport entre deux montants hors taxes. Pour un même article, les deux conventions donnent par exemple 3 et 2,5. Avant de comparer votre coefficient à celui d'un confrère ou d'un repère sectoriel, demandez laquelle est utilisée."
  - question: "Jusqu'où peut-on baisser un prix pendant une opération commerciale ?"
    answer: "En France, revendre un produit en l'état en dessous de son prix d'achat effectif est puni de 75 000 euros d'amende au titre de l'article L442-5 du Code de commerce. Le prix d'achat effectif inclut le prix net facturé, diminué des avantages financiers du fournisseur, puis augmenté des taxes et du transport. Les soldes, les produits à caractère saisonnier marqué et les cessations d'activité font partie des dérogations prévues."
  - question: "Pourquoi recalculer ses prix quand la monnaie locale bouge ?"
    answer: "Parce qu'une marge calculée sur un coût historique devient fausse dès que le coût de remplacement change. En République démocratique du Congo, le franc congolais s'est apprécié d'environ 30 % sur le marché interbancaire en 2025 par rapport à fin 2024. Un commerçant qui garde des prix figés au taux de l'ancien approvisionnement se retrouve plus cher que le voisin qui réapprovisionne au taux du jour."
---

Un commerçant achète un article 10 euros hors taxes et l'affiche à 20 euros en vitrine. Coefficient 2, donc 50 % de marge. C'est faux, et l'écart n'est pas anecdotique.

Sur ces 20 euros, 3,33 euros partent en TVA. Le prix de vente hors taxes est de 16,67 euros, la marge brute de 6,67 euros. Rapportée au prix de vente, elle vaut **40 %**. Rapportée au prix d'achat, 66,7 %. Trois chiffres pour une seule vente, et c'est précisément là que les décisions de prix dérapent.

Le contexte ne laisse pas beaucoup de place à l'approximation. Altares a recensé **71 100 défaillances d'entreprises sur douze mois glissants** au premier trimestre 2026, un niveau qu'elle qualifie d'inédit, dont 1 950 dans le commerce de détail sur le seul deuxième trimestre ([Altares](https://www.altares.com/wp-content/uploads/CP260716_ALTARES_DEFAILLANCES-ENTREPRISES_T2-2026.docx)).

## Taux de marge et taux de marque ne mesurent pas la même chose

Le taux de marge rapporte la marge brute au prix d'achat hors taxes. Le taux de marque la rapporte au prix de vente hors taxes. Sur un même article, le premier est toujours supérieur au second, et confondre les deux fait surestimer sa rentabilité.

| Achat HT | Vente TTC | Vente HT | Marge brute | Taux de marge | Taux de marque |
|---|---|---|---|---|---|
| 10,00 € | 20,00 € | 16,67 € | 6,67 € | 66,7 % | 40,0 % |
| 25,00 € | 75,00 € | 62,50 € | 37,50 € | 150,0 % | 60,0 % |
| 4,00 € | 7,20 € | 6,00 € | 2,00 € | 50,0 % | 33,3 % |

Dans le commerce de détail, le taux de marque est l'indicateur le plus utilisé, parce qu'il se lit directement dans le prix affiché. C'est aussi lui qui sert à construire un prix à partir d'un objectif :

**Prix de vente HT = coût d'achat HT / (1 - taux de marque visé)**

Un jean acheté 25 euros hors taxes avec 60 % de marque visée ressort à 62,50 euros hors taxes, soit 75 euros avec une TVA à 20 %, comme le détaille [Keobiz](https://www.keobiz.fr/fiches-pratiques/coefficient-multiplicateur-marge-commerciale/). Utiliser le taux de marge dans cette formule donne un prix trop bas, systématiquement.

## Le coefficient multiplicateur ne veut rien dire tant qu'on n'a pas dit lequel

Deux conventions circulent et elles ne donnent pas le même résultat. La première définit le coefficient comme le prix de vente TTC divisé par le prix d'achat hors taxes : il contient donc à la fois la marge et la TVA. La seconde raisonne entièrement hors taxes.

Sur le jean à 25 euros, la première convention donne 3,00 et la seconde 2,50. Même article, même marge, deux chiffres. Les simulateurs en ligne ne précisent pas toujours lequel ils appliquent, et un commerçant qui reprend le coefficient entendu chez un confrère sans poser la question se retrouve avec un prix décalé de 20 %.

Le réflexe utile : décidez en taux de marque, et gardez le coefficient comme raccourci de calcul au comptoir.

## Les repères sectoriels servent à se situer, pas à fixer un prix

Les écarts de marge entre familles de produits sont considérables, même dans un seul magasin. L'[INSEE](https://www.insee.fr/fr/statistiques/1304045) relève des taux de marge allant de 2 % à plus de 20 % selon les produits en grande surface, avec une fourchette de 13 à 27 % sur l'alimentaire en hypermarchés et supermarchés, et des écarts bien plus marqués sur la boulangerie-pâtisserie que sur la viande ou les fruits et légumes.

| Famille | Indicateur | Niveau observé | Source |
|---|---|---|---|
| Alimentaire en hyper et super | Taux de marge | 13 % à 27 % | INSEE |
| Commerce alimentaire spécialisé | Taux de marge moyen | environ 33,9 % | INSEE, repris par [myPOS](https://www.mypos.com/fr-fr/blog/guide-entreprise/taux-de-marge-par-secteur-dactivite-en-france-le-panorama-complet) |
| Artisanat de l'alimentation | Taux de marge médian | environ 29 % | INSEE Bourgogne-Franche-Comté |

Deux précautions avant d'utiliser ces chiffres. D'abord, vérifiez toujours si le repère est un taux de marge ou un taux de marque : l'écart entre les deux dépasse souvent vingt points. Ensuite, les fiches sectorielles de l'INSEE paraissent avec deux à trois ans de décalage : ce sont des ordres de grandeur, pas des objectifs.

## Votre prix d'achat ne contient pas votre coût de revient

La facture du fournisseur est un point de départ, pas le coût réel de l'article. Trois postes s'ajoutent presque toujours, et ils se prélèvent sur la marge brute que vous croyez avoir.

La démarque inconnue pèse entre 1,4 % et 1,5 % du chiffre d'affaires du commerce de détail français selon les données compilées par [Securitas](https://www.securitas.fr/blog-securite/evolution-de-la-demarque-inconnue-en-france/), avec des pointes de 5 à 7 % sur certains rayons. Nous détaillons le mécanisme et les contre-mesures dans notre article sur la [gestion de stock en boutique](/blog/retail-inventory-management-guide/).

Les frais d'encaissement viennent ensuite. Les prestataires à taux unique facturent autour de 1,65 % chez Square et 1,75 % chez SumUp, un sujet que nous reprenons dans le [prix réel d'un logiciel de caisse](/blog/pos-software-cost-guide/). Sur notre article à 20 euros, 1,75 % représentent 0,35 euro, soit **5 % de la marge brute** partis en commission. En mobile money, la commission marchand va de 1 % chez Wave à 2,5 % chez Orange Money selon les pays.

Ajoutez le transport, la casse et les invendus soldés en fin de saison. Un taux de marque de 40 % affiché en rayon finit souvent autour de 34 à 36 % une fois ces postes passés.

## La revente à perte fixe un plancher, et ce n'est pas le prix d'achat

Revendre un produit en l'état en dessous de son prix d'achat effectif est puni de **75 000 euros d'amende** pour une personne physique, au titre de l'article L442-5 du Code de commerce. Le point technique est la définition du seuil.

Le prix d'achat effectif correspond au prix unitaire net figurant sur la facture, diminué des autres avantages financiers accordés par le fournisseur, puis augmenté des taxes sur le chiffre d'affaires, des taxes spécifiques liées à la revente et du prix du transport ([Deloitte Société d'Avocats](https://blog.avocats.deloitte.fr/le-regime-de-la-revente-a-perte-nouveautes-et-rappels-en-2025/)). Conséquence contre-intuitive : une remise de fin d'année abaisse votre seuil, donc votre liberté de prix basse est plus grande qu'elle n'y paraît, à condition de savoir calculer.

L'interdiction ne concerne que les produits revendus en l'état, pas ceux que vous transformez. Les dérogations couvrent notamment les cessations ou changements d'activité, les produits à caractère saisonnier marqué et les produits démodés par un perfectionnement technique. Un grossiste approvisionnant des détaillants indépendants bénéficie d'un coefficient de 0,9 sur le prix d'achat effectif.

## En zone franc congolais, le taux de change fait partie du prix

Dans une économie où l'approvisionnement se paie en dollars et la vente s'encaisse en monnaie locale, une marge calculée sur un coût historique devient fausse au premier mouvement du taux. Le sens de l'erreur surprend souvent.

En République démocratique du Congo, le franc congolais s'est apprécié d'environ **30 % sur le marché interbancaire** en 2025 par rapport à fin 2024, et l'inflation est redescendue à 3,4 % en glissement annuel fin septembre 2026 d'après la [Banque centrale du Congo](https://www.bcc.cd/). Un commerçant qui a constitué son stock quand le dollar était cher et qui garde ses prix en francs au taux de l'époque devient simplement plus cher que le voisin qui réapprovisionne au taux du jour. La marge a l'air bonne sur le papier, le rayon ne tourne plus.

Deux règles tiennent dans ce contexte. Calculez votre prix sur le **coût de remplacement**, pas sur le coût d'achat historique : la question n'est pas ce que vous avez payé, c'est ce que vous paierez pour remettre l'article en rayon. Et fixez une devise de référence par article, avec conversion au taux du jour en caisse plutôt qu'un taux mémorisé de tête, qui dérive toujours dans le sens qui vous arrange.

En zone UEMOA et CEMAC, la parité fixe du franc CFA avec l'euro évacue ce problème, mais pas celui des hausses de prix fournisseurs et du fret, qui réclament le même réflexe de recalcul.

## Le bon endroit pour ce calcul, c'est la caisse

Un tableur donne un prix une fois, au moment où vous le remplissez. Une caisse qui stocke le coût d'achat par article le donne à chaque vente, et surtout elle vous dit lesquels de vos articles rapportent vraiment.

Quatre éléments à vérifier dans un logiciel avant de s'engager : le coût d'achat enregistré par référence et non par catégorie, l'affichage du taux de marque au moment de la saisie du prix, des rapports de vente ventilés par marge et pas seulement par chiffre d'affaires, et la gestion de plusieurs taux de TVA sur un même ticket.

[digabloPos](https://pos.digablo.fr/) enregistre le coût d'achat par article, affiche la marge réalisée et fonctionne hors ligne sur un smartphone existant, avec M-Pesa, Orange Money et Airtel Money intégrés. C'est notre logiciel, et notre [comparateur](/comparateur) indique aussi les cas où une autre solution vous conviendra mieux, en particulier si vous avez besoin d'une certification de caisse en France.

Le prix juste n'est pas celui qui ressemble à celui du voisin. C'est celui qui couvre votre coût de remplacement, vos frais d'encaissement, votre démarque et vos charges fixes, dans cet ordre.

## Sources

- [Altares, défaillances d'entreprises T2 2026](https://www.altares.com/wp-content/uploads/CP260716_ALTARES_DEFAILLANCES-ENTREPRISES_T2-2026.docx)
- [Altares, défaillances d'entreprises T1 2026](https://www.altares.com/wp-content/uploads/CP260414_ALTARES_DEFAILLANCES-ENTREPRISES-T1-2026.pdf)
- [INSEE Focus, marges commerciales selon les produits](https://www.insee.fr/fr/statistiques/1304045)
- [INSEE Bourgogne-Franche-Comté, alimentation et métiers de bouche](https://www.insee.fr/fr/statistiques/8069961)
- [Keobiz, coefficient multiplicateur et marge commerciale](https://www.keobiz.fr/fiches-pratiques/coefficient-multiplicateur-marge-commerciale/)
- [Deloitte Société d'Avocats, régime de la revente à perte](https://blog.avocats.deloitte.fr/le-regime-de-la-revente-a-perte-nouveautes-et-rappels-en-2025/)
- [Securitas, évolution de la démarque inconnue en France](https://www.securitas.fr/blog-securite/evolution-de-la-demarque-inconnue-en-france/)
- [Banque centrale du Congo](https://www.bcc.cd/)
