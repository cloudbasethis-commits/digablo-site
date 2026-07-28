import type { Lang } from '../i18n/ui';

export interface AboutContent {
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  story: { heading: string; paragraphs: string[] };
  stats: { value: string; label: string }[];
  values: { heading: string; intro: string; items: { title: string; desc: string }[] };
  expertise: { heading: string; paragraphs: string[] };
  ctaHeading: string;
  ctaText: string;
}

export const aboutContent: Record<Lang, AboutContent> = {
  fr: {
    metaTitle: 'À propos de DIGABLO, Agence digitale internationale',
    metaDescription:
      'DIGABLO est une agence digitale internationale spécialisée dans les logiciels sur mesure, les applications, les sites web et le marketing digital. Découvrez notre histoire et notre équipe.',
    heroEyebrow: 'À propos',
    heroTitle: 'Une agence digitale qui transforme les idées en résultats',
    heroSubtitle:
      'Depuis plus de 15 ans, DIGABLO conçoit des solutions digitales innovantes pour des entreprises et des utilisateurs du monde entier.',
    story: {
      heading: 'Notre histoire',
      paragraphs: [
        'DIGABLO est née d’une conviction simple : chaque entreprise mérite des outils digitaux à la hauteur de ses ambitions, sans être freinée par la complexité ou les coûts.',
        'Fondée en France et présente à Kinshasa, notre agence s’est construite au fil des projets, en accompagnant des entreprises de toutes tailles dans leur transformation numérique, du commerçant de quartier à l’entreprise internationale.',
        'Aujourd’hui, nous servons des clients sur plusieurs continents (Europe, Afrique, Amérique du Nord, Asie) et nous éditons digabloPos, notre logiciel de caisse utilisé dans le monde entier.',
      ],
    },
    stats: [
      { value: '15+', label: 'Années d’expérience' },
      { value: '100+', label: 'Clients satisfaits' },
      { value: '500+', label: 'Projets livrés' },
      { value: '4', label: 'Continents servis' },
    ],
    values: {
      heading: 'Ce qui nous guide',
      intro: 'Des principes simples, appliqués sur chaque projet.',
      items: [
        { title: 'Le sur-mesure, pas le standard', desc: 'Nous partons de votre métier et de vos objectifs, jamais d’un modèle imposé.' },
        { title: 'La performance avant tout', desc: 'Des solutions rapides, fiables et sécurisées, pensées pour durer et pour grandir avec vous.' },
        { title: 'La transparence', desc: 'Vous restez propriétaire de votre code et de vos données. Pas de boîte noire, pas d’enfermement.' },
        { title: 'Un partenaire, pas un prestataire', desc: 'Nous restons à vos côtés après le lancement, avec un support disponible 24/7.' },
      ],
    },
    expertise: {
      heading: 'Notre expertise',
      paragraphs: [
        'Notre équipe réunit des développeurs, designers et spécialistes du marketing capables de couvrir toute la chaîne de valeur digitale : du logiciel de gestion sur mesure à l’application mobile, du site web performant à la campagne d’acquisition.',
        'Nous investissons en continu dans la recherche et le développement pour garder nos solutions à la pointe, et vous faire bénéficier des meilleures technologies, au juste prix.',
      ],
    },
    ctaHeading: 'Envie de travailler avec nous ?',
    ctaText: 'Parlons de votre projet et construisons ensemble le succès de demain.',
  },
  en: {
    metaTitle: 'About DIGABLO, International digital agency',
    metaDescription:
      'DIGABLO is an international digital agency specializing in custom software, apps, websites and digital marketing. Discover our story and our team.',
    heroEyebrow: 'About',
    heroTitle: 'A digital agency that turns ideas into results',
    heroSubtitle:
      'For over 15 years, DIGABLO has been building innovative digital solutions for businesses and users around the world.',
    story: {
      heading: 'Our story',
      paragraphs: [
        'DIGABLO was born from a simple belief: every business deserves digital tools worthy of its ambitions, without being held back by complexity or cost.',
        'Founded in France and present in Kinshasa, our agency grew project after project, supporting businesses of all sizes through their digital transformation, from the neighborhood shop to the international company.',
        'Today we serve clients across several continents (Europe, Africa, North America, Asia) and we build digabloPos, our point-of-sale software used worldwide.',
      ],
    },
    stats: [
      { value: '15+', label: 'Years of experience' },
      { value: '100+', label: 'Happy clients' },
      { value: '500+', label: 'Projects delivered' },
      { value: '4', label: 'Continents served' },
    ],
    values: {
      heading: 'What drives us',
      intro: 'Simple principles, applied to every project.',
      items: [
        { title: 'Tailored, not templated', desc: 'We start from your business and your goals, never from an imposed model.' },
        { title: 'Performance first', desc: 'Fast, reliable and secure solutions, designed to last and to grow with you.' },
        { title: 'Transparency', desc: 'You own your code and your data. No black box, no lock-in.' },
        { title: 'A partner, not a vendor', desc: 'We stay by your side after launch, with support available 24/7.' },
      ],
    },
    expertise: {
      heading: 'Our expertise',
      paragraphs: [
        'Our team brings together developers, designers and marketing specialists able to cover the entire digital value chain: from custom management software to mobile apps, from high-performance websites to acquisition campaigns.',
        'We invest continuously in research and development to keep our solutions on the cutting edge, and bring you the best technologies at a fair price.',
      ],
    },
    ctaHeading: 'Want to work with us?',
    ctaText: 'Let’s talk about your project and build tomorrow’s success together.',
  },
};
