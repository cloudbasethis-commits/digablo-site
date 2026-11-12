---
title: "Changer de logiciel de caisse : sortir ses données sans rien perdre"
description: "Changer de logiciel de caisse sans perdre six ans d'archives : les données à exiger, les pièges du contrat de sortie et ce qui change au 12 janvier 2027."
pubDate: 2026-11-12
lang: "fr"
author: "redaction"
tags: ["Migration", "Caisse", "Conformité", "Data Act", "digabloPos"]
faq:
  - question: "Combien de temps un éditeur conserve-t-il mes données après résiliation ?"
    answer: "Cela dépend uniquement de son contrat, pas de la loi. Les conditions générales d'EBP pour sa solution Hubbix prévoient une conservation de 90 jours après la date de résiliation, puis une suppression. D'autres contrats de gestion en ligne descendent à 30 jours d'accès en lecture. Demandez ce délai par écrit avant de résilier, car c'est lui qui fixe votre calendrier de migration."
  - question: "Dois-je garder mes archives de caisse si je change de logiciel ?"
    answer: "Oui. L'obligation de conservation porte sur l'entreprise, pas sur l'outil. Les données d'encaissement se conservent six ans au titre de l'article L.102 B du livre des procédures fiscales, et le BOFiP précise qu'elles doivent rester lisibles par l'administration même après un changement de logiciel ou de système. Un export sauvegardé hors de l'ancien abonnement est donc indispensable."
  - question: "Mon éditeur peut-il me facturer la récupération de mes données ?"
    answer: "Jusqu'au 11 janvier 2027, oui, mais seulement à hauteur des coûts directement liés à l'opération de changement. L'article 29 du règlement européen sur les données supprime totalement ces frais de changement de fournisseur à compter du 12 janvier 2027, pour les services d'informatique en nuage, SaaS compris. Les indemnités de résiliation anticipée prévues au contrat restent dues."
  - question: "Quel est le meilleur moment pour changer de logiciel de caisse ?"
    answer: "Un lundi matin de basse saison, après un inventaire complet la veille au soir. Évitez décembre, les soldes et les périodes de forte affluence : une bascule ajoute des gestes inhabituels au comptoir pendant trois à cinq jours. Gardez l'ancien abonnement actif pendant toute la transition, le temps de vérifier que les totaux du nouveau système correspondent à ceux de l'ancien."
  - question: "Quelles données faut-il exiger en format ouvert ?"
    answer: "Trois lots. Les archives d'encaissement ticket par ticket et les totaux journaliers, le référentiel produits avec codes-barres, prix et taux de TVA, et l'historique des clients et des encours. Exigez du CSV, du XML ou du texte délimité, lisibles sans l'ancien logiciel. Un export au format propriétaire de l'éditeur sortant ne vous sert à rien le jour où son abonnement est coupé."
---

Vous résiliez votre abonnement de caisse le 30 juin. Quatre-vingt-dix jours plus tard, vos données sont effacées des serveurs de l'éditeur, conformément à ses conditions générales. L'administration fiscale, elle, peut vous les réclamer pendant encore **six ans**.

C'est tout le problème d'un changement de caisse. Choisir le nouvel outil se règle en deux démonstrations. La partie coûteuse, c'est la sortie de l'ancien : les formats d'export, les délais contractuels et les archives que personne ne pense à sauvegarder avant que l'accès ne ferme.

## Les trois lots de données à sortir avant de couper l'abonnement

Il y a trois lots, pas un seul, et ils ne se récupèrent pas au même endroit ni dans les mêmes délais.

| Lot | Ce que ça contient | Format à exiger | À récupérer |
|---|---|---|---|
| Archives d'encaissement | Tickets ligne par ligne, totaux journaliers, journal des événements, annulations | CSV ou XML lisible hors du logiciel | Avant la résiliation |
| Référentiel | Catalogue produits, codes-barres, prix, taux de TVA, fournisseurs, stocks | CSV avec en-têtes de colonnes | Avant la bascule |
| Clients et encours | Fiches clients, soldes d'ardoise, historique de fidélité | CSV | Avant la bascule |
| Conformité | Attestation de l'éditeur ou certificat, pour la période utilisée | PDF daté et signé | Avant et après |

Le quatrième lot surprend souvent. L'attestation ou le certificat de votre ancien éditeur couvre les années pendant lesquelles vous avez encaissé avec son logiciel. Si un contrôle porte sur 2024 et que vous avez changé d'outil en 2026, c'est l'ancien document qu'on vous demandera. Réclamez-le avant de résilier, pendant que vous êtes encore client.

## Six ans d'archives, même après avoir changé d'outil

L'obligation de conservation suit l'entreprise, pas le logiciel. Les données d'encaissement, ligne par ligne et en cumuls, se conservent six ans au titre de l'article L.102 B du livre des procédures fiscales. Le [BOFiP](https://bofip.impots.gouv.fr/bofip/10691-PGP.html/identifiant%3DBOI-TVA-DECLA-30-10-30-20160803) ajoute une précision qui vise exactement votre situation : les archives doivent pouvoir être lues aisément par l'administration **y compris lorsque l'entreprise a changé de logiciel ou de système**.

En clair, « je n'ai plus accès à l'ancien outil » n'est pas une réponse recevable. Deux conséquences pratiques.

D'abord, l'export d'archives se stocke en double, chez vous et sur un support externe, pas uniquement dans le nouveau logiciel. Un fichier qui ne vit que dans l'outil suivant vous remet dans la même dépendance au prochain changement.

Ensuite, le format compte autant que le contenu. Du CSV, du XML ou du texte délimité restent lisibles dans dix ans avec n'importe quel tableur. Un export propriétaire ne vaut rien une fois l'abonnement coupé.

Côté documents de conformité, le cadre français n'a pas bougé depuis l'automne : l'attestation individuelle de l'éditeur et le certificat d'organisme accrédité ont la même valeur, et l'amende de 7 500 euros par logiciel s'applique à l'absence de justificatif. Nous l'avons détaillé dans notre article sur les [logiciels de caisse certifiés](/blog/pos-software-certification-nf525-2026/).

## La clause de sortie coûte plus cher que la clause de prix

Le délai pendant lequel vous pouvez encore récupérer vos données après résiliation n'est fixé par aucune loi. Il est fixé par le contrat que vous avez signé, et il varie du simple au triple.

Les conditions générales d'EBP pour sa solution Hubbix prévoient une conservation de 90 jours après la date de résiliation, puis une suppression ([support EBP](https://support.ebp.com/hc/fr/articles/11398706615325-R%C3%A9cup%C3%A9rer-mes-donn%C3%A9es-d-une-solution-Hubbix)). Dans d'autres contrats de gestion en ligne, la fenêtre d'export tombe à 30 jours. Certains modèles de clause de restitution vont plus loin et exigent que la demande soit formulée dix jours calendaires avant la fin du contrat, sous peine de reconduction automatique pour un mois.

Trois lignes à relire dans votre contrat actuel, avant d'envoyer la lettre de résiliation :

1. **Le préavis.** Un ou trois mois selon les éditeurs, calculé à partir de la date anniversaire et non de la date d'envoi.
2. **La fenêtre d'export.** Combien de jours après la fin du service, et en lecture seule ou avec téléchargement complet.
3. **Les formats et leur prix.** Gratuit en CSV, facturé en format propriétaire ou sur demande d'assistance : la différence se chiffre en centaines d'euros.

La règle simple : gardez l'ancien abonnement actif pendant toute la bascule. Payer un mois de double abonnement coûte moins cher qu'une semaine de comptoir sans historique.

## Ce qui change au 12 janvier 2027

Les frais de changement de fournisseur disparaissent. L'article 29 du règlement européen sur les données prévoit qu'à compter du 12 janvier 2027, un fournisseur de services de traitement de données ne peut plus imposer de frais au client pour le processus de changement ([texte de l'article 29](https://www.springlex.eu/fr/packages/data-act/data-act-regulation/article-29/)).

Deux points à retenir pour un commerce.

Le périmètre est large : les obligations de changement couvrent les services d'informatique en nuage de l'infrastructure jusqu'au SaaS, donc une caisse en ligne avec tableau de bord hébergé y entre ([Latham & Watkins](https://www.lw.com/en/insights/eu-data-act-significant-new-switching-requirements-due-to-take-effect-for-data-processing-services)). Les règles de changement s'appliquent déjà depuis le 12 septembre 2025, mais avec une période intermédiaire : jusqu'au 11 janvier 2027, l'éditeur peut encore facturer des frais réduits, plafonnés aux coûts directement liés à l'opération.

La limite est réelle aussi. Le règlement porte sur les données, pas sur votre paramétrage. Un commerçant peut récupérer son historique et son catalogue sans récupérer pour autant les réglages, les écrans personnalisés ou les interfaces spécifiques qui faisaient fonctionner l'ancien outil. Les indemnités de résiliation anticipée prévues au contrat, elles, restent dues.

## Le calendrier d'une bascule qui ne casse pas le service

Un lundi matin de basse saison, pas un samedi de décembre. Une migration ajoute des gestes inhabituels au comptoir pendant trois à cinq jours, et ces gestes se paient en temps de file d'attente.

La séquence qui fonctionne :

1. **J moins 30 :** demande écrite à l'ancien éditeur des formats d'export disponibles et du délai d'accès après résiliation.
2. **J moins 15 :** export des trois lots, contrôle d'ouverture de chaque fichier dans un tableur, import à blanc dans le nouvel outil.
3. **J moins 1, à la fermeture :** inventaire physique complet et clôture de caisse sur l'ancien système. Ce double chiffre est votre point de référence.
4. **Jour J :** encaissement sur le nouvel outil seulement. Deux caisses en parallèle sur la même journée fabriquent deux vérités comptables.
5. **J plus 7 :** comparaison des totaux par moyen de paiement avec la même semaine de l'année précédente. Un écart de structure se voit là, pas dans le chiffre global.
6. **J plus 30 :** résiliation effective, archives sauvegardées en deux exemplaires hors du nouvel outil.

L'inventaire de l'étape 3 est celui qu'on saute le plus souvent, et c'est le plus utile. Sans lui, tout écart de stock constaté trois mois plus tard devient indémontrable : impossible de savoir s'il vient de la migration ou de la démarque. Notre guide sur la [gestion de stock en boutique](/blog/retail-inventory-management-guide/) détaille la méthode de comptage.

## Reprendre un catalogue de 800 références sans le retaper

Un import CSV propre demande cinq colonnes au minimum : libellé, code-barres, prix de vente, taux de TVA, quantité en stock. Les trois pièges habituels se repèrent avant l'import.

Le **taux de TVA par article** se perd systématiquement quand le fichier sortant ne contient qu'un prix. Sur un commerce qui mélange 5,5 %, 10 % et 20 %, une reprise sans taux par ligne oblige à tout reparamétrer à la main.

Les **codes-barres tronqués** viennent du tableur, pas du logiciel : un EAN13 ouvert sans précaution devient un nombre en notation scientifique. Déclarez toujours la colonne en texte.

Les **variantes et les lots** ne se transposent pas d'un modèle de données à l'autre. Traitez d'abord vos cent meilleures ventes : elles font l'essentiel du passage en caisse.

Notre [comparateur de logiciels de caisse](/comparateur) indique lesquels acceptent un import CSV sans passer par un forfait payant, et lesquels exportent l'historique complet plutôt que les seuls totaux.

## Partir d'un cahier, en RDC et en Afrique francophone

La question change de nature quand il n'y a pas d'ancien logiciel. L'historique existe, mais sur papier, et il ne s'importe pas.

La reprise utile se limite alors à trois choses : le catalogue avec les prix pratiqués, l'état des stocks au jour de la bascule, et les encours clients. Le reste du cahier se range, il ne se saisit pas. Ajoutez une quatrième ligne si vous encaissez en mobile money : les références de transaction Orange Money, Airtel Money ou M-Pesa doivent pouvoir se rattacher à un ticket dans le nouvel outil, sinon le rapprochement de fin de journée reste aussi manuel qu'avant. Pour le volet facturation, nous avons traité à part l'état de l'obligation de [facture normalisée en RDC](/blog/drc-standardized-invoice-2026/).

## Ce que nous regardons avant de conseiller un changement

**[digabloPos](https://pos.digablo.fr/)** importe et exporte en CSV sans option payante, fonctionne hors ligne et rattache les paiements mobile money au ticket. Mais la vraie question, avant l'outil, reste celle de la sortie : un logiciel qui vous laisse partir avec vos données est un logiciel que vous pouvez adopter sans pari.

Vous envisagez un changement de caisse et vous ne savez pas ce que votre contrat actuel autorise ? [Envoyez-nous ses conditions générales](/#contact), nous vous dirons quelles données vous pouvez sortir, sous quel délai et à quel prix.

## Sources

- [BOFiP, conservation des données d'encaissement et lisibilité après changement de logiciel](https://bofip.impots.gouv.fr/bofip/10691-PGP.html/identifiant%3DBOI-TVA-DECLA-30-10-30-20160803)
- [Règlement (UE) 2023/2854, article 29 : suppression des frais de changement de fournisseur](https://www.springlex.eu/fr/packages/data-act/data-act-regulation/article-29/)
- [EU Data Act : nouvelles obligations de changement de fournisseur, Latham & Watkins](https://www.lw.com/en/insights/eu-data-act-significant-new-switching-requirements-due-to-take-effect-for-data-processing-services)
- [Récupérer mes données d'une solution Hubbix, support EBP](https://support.ebp.com/hc/fr/articles/11398706615325-R%C3%A9cup%C3%A9rer-mes-donn%C3%A9es-d-une-solution-Hubbix)
- [Certification des logiciels de caisse, economie.gouv.fr](https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/ce-quil-faut-savoir-sur-la-certification-des-logiciels-de-caisse)
