export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export const defaultLang = 'fr';

export type Lang = keyof typeof languages;

/**
 * Chaînes partagées de l'interface (header, footer, CTA récurrents).
 * Le contenu long des pages est écrit directement dans chaque page localisée.
 */
export const ui = {
  fr: {
    'nav.services': 'Services',
    'nav.product': 'digabloPos',
    'nav.about': 'À propos',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Démarrer un projet',
    'footer.tagline':
      'Agence digitale internationale. Logiciels sur mesure, applications, sites web et marketing digital — au service de votre croissance.',
    'footer.services': 'Services',
    'footer.company': 'Entreprise',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    'footer.product': 'Logiciel de caisse digabloPos',
    'footer.dev': 'Développement logiciel',
    'footer.mobile': 'Applications mobiles',
    'footer.web': 'Sites web',
    'footer.marketing': 'Marketing digital',
    'footer.legal': 'Mentions légales',
    'common.discoverPos': 'Découvrir digabloPos',
    'common.talk': 'Parlons de votre projet',
    'common.readMore': 'Lire la suite',
    'common.allPosts': 'Tous les articles',
    'common.backToBlog': '← Retour au blog',
    'common.published': 'Publié le',
    'common.updated': 'Mis à jour le',
    'common.minRead': 'min de lecture',
    'common.faq': 'Questions fréquentes',
    'common.home': 'Accueil',
  },
  en: {
    'nav.services': 'Services',
    'nav.product': 'digabloPos',
    'nav.about': 'About',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Start a project',
    'footer.tagline':
      'International digital agency. Custom software, apps, websites and digital marketing — built to grow your business.',
    'footer.services': 'Services',
    'footer.company': 'Company',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.product': 'digabloPos point of sale',
    'footer.dev': 'Software development',
    'footer.mobile': 'Mobile applications',
    'footer.web': 'Websites',
    'footer.marketing': 'Digital marketing',
    'footer.legal': 'Legal notice',
    'common.discoverPos': 'Discover digabloPos',
    'common.talk': "Let's talk about your project",
    'common.readMore': 'Read more',
    'common.allPosts': 'All articles',
    'common.backToBlog': '← Back to blog',
    'common.published': 'Published on',
    'common.updated': 'Updated on',
    'common.minRead': 'min read',
    'common.faq': 'Frequently asked questions',
    'common.home': 'Home',
  },
} as const;
