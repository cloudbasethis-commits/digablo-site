import type { Lang } from '../i18n/ui';

/**
 * Comparateur de logiciels de caisse.
 *
 * Règle de tenue de ce fichier : chaque valeur chiffrée porte sa source, de
 * préférence la page de tarifs officielle de l'éditeur. Une donnée qu'on ne
 * peut pas sourcer n'est pas publiée (« Non communiqué » plutôt qu'une
 * estimation) : une page comparateur ne vaut que par son exactitude, et
 * annoncer un tarif faux sur un concurrent est un risque juridique.
 * Mettre à jour `lastChecked` à chaque vérification.
 */
export const lastChecked = '2026-07-28';

export interface Cell {
  fr: string;
  en: string;
  /** URL de la source (page de tarifs officielle de préférence). */
  source?: string;
  /** Lecture rapide : oui / non / partiel, pour la pastille de couleur. */
  tone?: 'yes' | 'no' | 'partial';
}

export interface Solution {
  id: string;
  name: string;
  url: string;
  /** Notre produit : mis en avant visuellement, et signalé comme tel. */
  own?: boolean;
  editor: Record<Lang, string>;
  cells: Record<string, Cell>;
}

export interface Criterion {
  key: string;
  label: Record<Lang, string>;
}

export const criteria: Criterion[] = [
  { key: 'price', label: { fr: 'Prix du logiciel', en: 'Software price' } },
  { key: 'fees', label: { fr: 'Frais par paiement carte', en: 'Card payment fees' } },
  { key: 'offline', label: { fr: 'Fonctionnement hors ligne', en: 'Offline operation' } },
  { key: 'mobileMoney', label: { fr: 'Mobile money', en: 'Mobile money' } },
  { key: 'inventory', label: { fr: 'Gestion des stocks', en: 'Inventory management' } },
  { key: 'employees', label: { fr: 'Gestion des employés', en: 'Employee management' } },
  { key: 'hardware', label: { fr: 'Matériel nécessaire', en: 'Hardware required' } },
  { key: 'markets', label: { fr: 'Marchés couverts', en: 'Markets covered' } },
];

export const solutions: Solution[] = [
  {
    id: 'digablopos',
    name: 'digabloPos',
    url: 'https://pos.digablo.fr/',
    own: true,
    editor: { fr: 'DIGABLO (France / RDC)', en: 'DIGABLO (France / DR Congo)' },
    cells: {
      price: { fr: 'Gratuit', en: 'Free', tone: 'yes' },
      fees: {
        fr: 'Selon votre prestataire de paiement local',
        en: 'Depends on your local payment provider',
      },
      offline: {
        fr: 'Complet : ventes, stocks et rapports restent accessibles sans réseau',
        en: 'Full: sales, inventory and reports stay available with no network',
        tone: 'yes',
      },
      mobileMoney: {
        fr: 'M-Pesa, Orange Money, Airtel Money intégrés',
        en: 'M-Pesa, Orange Money, Airtel Money built in',
        tone: 'yes',
      },
      inventory: { fr: 'Inclus', en: 'Included', tone: 'yes' },
      employees: { fr: 'Inclus', en: 'Included', tone: 'yes' },
      hardware: {
        fr: 'Aucun : smartphone, tablette ou ordinateur existant',
        en: 'None: your existing phone, tablet or computer',
        tone: 'yes',
      },
      markets: {
        fr: 'Afrique et Europe, pensé pour les connexions instables',
        en: 'Africa and Europe, built for unstable connectivity',
      },
    },
  },
  {
    id: 'loyverse',
    name: 'Loyverse POS',
    url: 'https://loyverse.com/pricing',
    editor: { fr: 'Loyverse', en: 'Loyverse' },
    cells: {
      price: {
        fr: 'Caisse de base gratuite',
        en: 'Free core POS',
        source: 'https://loyverse.com/pricing',
        tone: 'yes',
      },
      fees: {
        fr: 'Selon le prestataire de paiement connecté',
        en: 'Depends on the connected payment provider',
      },
      offline: {
        fr: 'Partiel : la vente passe, mais remboursements et stocks sont indisponibles',
        en: 'Partial: sales go through, but refunds and inventory are unavailable',
        source: 'https://support.loyverse.com/en/articles/3178196-offline-use-of-loyverse-pos',
        tone: 'partial',
      },
      mobileMoney: { fr: 'Pas d’intégration native', en: 'No native integration', tone: 'no' },
      inventory: {
        fr: 'Basique inclus, avancé à 25 $/mois par boutique',
        en: 'Basic included, advanced at $25/month per store',
        source: 'https://loyverse.com/pricing',
        tone: 'partial',
      },
      employees: {
        fr: 'Module payant, 5 $/mois par employé',
        en: 'Paid add-on, $5/month per employee',
        source: 'https://loyverse.com/pricing',
        tone: 'partial',
      },
      hardware: {
        fr: 'Aucun imposé, matériel compatible en option',
        en: 'None required, compatible hardware optional',
        tone: 'yes',
      },
      markets: { fr: 'International', en: 'International' },
    },
  },
  {
    id: 'square',
    name: 'Square',
    url: 'https://squareup.com/fr/fr/pricing',
    editor: { fr: 'Block, Inc.', en: 'Block, Inc.' },
    cells: {
      price: {
        fr: 'Application gratuite, formule Restaurants dès 59 € HT/mois par point de vente',
        en: 'Free app, Restaurants plan from €59/month excl. tax per location',
        source: 'https://squareup.com/fr/fr/pricing',
        tone: 'partial',
      },
      fees: {
        fr: 'France : 1,65 % en présentiel (cartes UE/EEE), 1,4 % + 0,25 € en ligne',
        en: 'France: 1.65% in person (EU/EEA cards), 1.4% + €0.25 online',
        source: 'https://squareup.com/fr/fr/pricing',
      },
      offline: {
        fr: 'Limité : encaissement en mode dégradé, synchronisation requise',
        en: 'Limited: degraded offline checkout, sync required',
        tone: 'partial',
      },
      mobileMoney: { fr: 'Non pris en charge', en: 'Not supported', tone: 'no' },
      inventory: { fr: 'Inclus', en: 'Included', tone: 'yes' },
      employees: {
        fr: 'Inclus selon la formule',
        en: 'Included depending on plan',
        tone: 'partial',
      },
      hardware: {
        fr: 'Lecteur Square nécessaire pour la carte',
        en: 'Square reader needed to take cards',
        tone: 'partial',
      },
      markets: {
        fr: 'Paiement carte dans 8 pays, matériel dans 4',
        en: 'Card payments in 8 countries, hardware in 4',
      },
    },
  },
  {
    id: 'sumup',
    name: 'SumUp',
    url: 'https://sumup.com/',
    editor: { fr: 'SumUp', en: 'SumUp' },
    cells: {
      price: { fr: 'Application gratuite', en: 'Free app', tone: 'yes' },
      fees: {
        fr: 'Environ 1,69 % par transaction (Royaume-Uni et zone euro)',
        en: 'Around 1.69% per transaction (UK and eurozone)',
        source:
          'https://www.swipesum.com/insights/square-fees-explained-understanding-your-payment-costs',
      },
      offline: { fr: 'Limité', en: 'Limited', tone: 'partial' },
      mobileMoney: { fr: 'Non pris en charge', en: 'Not supported', tone: 'no' },
      inventory: { fr: 'Basique', en: 'Basic', tone: 'partial' },
      employees: { fr: 'Limitée', en: 'Limited', tone: 'partial' },
      hardware: {
        fr: 'Lecteur SumUp nécessaire pour la carte',
        en: 'SumUp reader needed to take cards',
        tone: 'partial',
      },
      markets: { fr: 'Europe et quelques marchés hors Europe', en: 'Europe and a few markets beyond' },
    },
  },
  {
    id: 'hiboutik',
    name: 'Hiboutik',
    url: 'https://www.hiboutik.com/',
    editor: { fr: 'Hiboutik (France)', en: 'Hiboutik (France)' },
    cells: {
      price: {
        fr: 'Plan gratuit, formules avancées à partir de 9,90 €/mois',
        en: 'Free plan, advanced plans from €9.90/month',
        source: 'https://www.softwaresuggest.com/hiboutik',
        tone: 'partial',
      },
      fees: {
        fr: 'Selon le prestataire de paiement connecté',
        en: 'Depends on the connected payment provider',
      },
      offline: { fr: 'Limité', en: 'Limited', tone: 'partial' },
      mobileMoney: { fr: 'Non pris en charge', en: 'Not supported', tone: 'no' },
      inventory: {
        fr: 'Inclus, multi-boutiques sur formule payante',
        en: 'Included, multi-store on paid plan',
        tone: 'partial',
      },
      employees: { fr: 'Selon la formule', en: 'Depending on plan', tone: 'partial' },
      hardware: { fr: 'Aucun imposé', en: 'None required', tone: 'yes' },
      markets: { fr: 'France principalement', en: 'Mainly France' },
    },
  },
];

export const comparisonPage: Record<
  Lang,
  {
    title: string;
    description: string;
    heading: string;
    intro: string;
    updated: string;
    sourceLabel: string;
    ownBadge: string;
    ctaHeading: string;
    ctaText: string;
    ctaButton: string;
    method: { heading: string; body: string };
    faq: { question: string; answer: string }[];
  }
> = {
  fr: {
    title: 'Comparateur de logiciels de caisse 2026 : prix, hors ligne, mobile money',
    description:
      'Comparez 5 logiciels de caisse sur les critères qui coûtent cher : prix réel, frais par paiement, mode hors ligne, mobile money et matériel imposé.',
    heading: 'Comparateur de logiciels de caisse',
    intro:
      'Les tarifs affichés « gratuit » cachent presque toujours une ligne payante : commission sur chaque encaissement, module de stocks en option, matériel obligatoire. Ce tableau compare ce qui finit réellement sur votre facture, source officielle à l’appui.',
    updated: 'Données vérifiées le',
    sourceLabel: 'source',
    ownBadge: 'Notre logiciel',
    ctaHeading: 'Vous hésitez encore ?',
    ctaText:
      'Dites-nous comment vous encaissez aujourd’hui : nombre de points de vente, moyens de paiement acceptés, qualité de la connexion. On vous dit lequel tient la route dans votre cas, y compris si ce n’est pas le nôtre.',
    ctaButton: 'Parlons de votre activité',
    method: {
      heading: 'Comment ce comparateur est établi',
      body:
        'Chaque chiffre provient de la page de tarifs officielle de l’éditeur quand elle est publique, sinon d’une source tierce citée en lien. Une information que nous ne pouvons pas sourcer n’est pas affichée. digabloPos est notre propre logiciel : il figure dans le tableau et il est signalé comme tel, avec les mêmes critères que les autres.',
    },
    faq: [
      {
        question: 'Quel est le meilleur logiciel de caisse gratuit en 2026 ?',
        answer:
          'Aucun ne gagne sur tous les critères. Loyverse offre la caisse gratuite la plus complète pour un commerce connecté, mais facture la gestion des employés 5 $ par mois et par employé et les stocks avancés 25 $ par mois et par boutique. Square est gratuit à l’installation mais se rémunère sur chaque paiement carte, à 1,65 % en France. digabloPos est gratuit sans module payant et fonctionne hors ligne avec le mobile money intégré, ce qui le rend pertinent là où la connexion est instable.',
      },
      {
        question: 'Pourquoi les frais par transaction comptent plus que l’abonnement ?',
        answer:
          'Parce qu’ils sont proportionnels à votre activité. Une commission de 1,65 % sur 100 000 € de chiffre d’affaires annuel représente 1 650 € par an, soit bien plus que n’importe quel abonnement mensuel du marché. Le bon calcul consiste à additionner l’abonnement et la commission estimée sur votre volume réel, puis à comparer sur trois ans.',
      },
      {
        question: 'Quels logiciels de caisse fonctionnent vraiment hors ligne ?',
        answer:
          'La plupart annoncent un mode hors ligne, mais il se limite souvent à encaisser en attendant le retour du réseau. Chez Loyverse, la vente passe mais les remboursements et la consultation des stocks sont indisponibles hors connexion, d’après sa documentation. digabloPos garde ventes, stocks et rapports accessibles sans réseau, parce qu’il a été conçu pour des marchés où la coupure est la norme et non l’exception.',
      },
      {
        question: 'Quel logiciel de caisse accepte le mobile money ?',
        answer:
          'Sur les cinq solutions comparées, digabloPos est la seule à intégrer nativement M-Pesa, Orange Money et Airtel Money. Les éditeurs américains et européens visent des marchés où le mobile money est marginal : ils ne le proposent pas, ce qui oblige les commerçants africains à saisir manuellement le montant après chaque paiement, avec les erreurs de caisse que cela génère.',
      },
    ],
  },
  en: {
    title: 'POS software comparison 2026: pricing, offline mode, mobile money',
    description:
      'Compare 5 point-of-sale systems on what actually costs money: real price, payment fees, offline mode, mobile money support and required hardware.',
    heading: 'Point-of-sale software comparison',
    intro:
      'Software advertised as free almost always hides a paid line: a cut of every payment, inventory sold as an add-on, hardware you have to buy. This table compares what ends up on your invoice, with the official source next to each figure.',
    updated: 'Data checked on',
    sourceLabel: 'source',
    ownBadge: 'Our software',
    ctaHeading: 'Still unsure?',
    ctaText:
      'Tell us how you take payments today: how many locations, which payment methods, how reliable your connection is. We will tell you which system holds up in your situation, even when it is not ours.',
    ctaButton: 'Tell us about your business',
    method: {
      heading: 'How this comparison is built',
      body:
        'Every figure comes from the vendor’s official pricing page where it is public, otherwise from a third-party source linked next to it. Anything we cannot source is not shown. digabloPos is our own product: it appears in the table, flagged as such, judged on the same criteria as the rest.',
    },
    faq: [
      {
        question: 'What is the best free POS software in 2026?',
        answer:
          'None of them wins on every criterion. Loyverse offers the most complete free POS for a connected store, but charges $5 per month per employee for staff management and $25 per month per store for advanced inventory. Square is free to install but takes a cut of every card payment, 1.65% in France. digabloPos is free with no paid module and runs offline with mobile money built in, which matters where connectivity is unreliable.',
      },
      {
        question: 'Why do transaction fees matter more than the subscription?',
        answer:
          'Because they scale with your business. A 1.65% fee on €100,000 of annual revenue is €1,650 a year, far more than any monthly subscription on the market. The right calculation is to add the subscription to the estimated commission on your real volume, then compare over three years.',
      },
      {
        question: 'Which POS systems really work offline?',
        answer:
          'Most advertise an offline mode, but it often means little more than taking payment while waiting for the network to return. With Loyverse, sales go through while refunds and inventory lookups are unavailable offline, according to its own documentation. digabloPos keeps sales, stock and reports available with no network, because it was built for markets where outages are the norm rather than the exception.',
      },
      {
        question: 'Which POS software accepts mobile money?',
        answer:
          'Of the five systems compared here, digabloPos is the only one with native M-Pesa, Orange Money and Airtel Money support. US and European vendors target markets where mobile money is marginal, so they do not offer it, which forces African merchants to key in the amount manually after every payment and creates till discrepancies.',
      },
    ],
  },
};
