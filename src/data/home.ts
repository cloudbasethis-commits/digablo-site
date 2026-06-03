import type { Lang } from '../i18n/ui';

export interface ServiceItem {
  title: string;
  desc: string;
  /** Slug de la page service vers laquelle pointe la carte (lien interne SEO). */
  slug?: string;
}
export interface ServiceGroup {
  id: string;
  name: string;
  tagline: string;
  items: ServiceItem[];
}
export interface HomeContent {
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: string[];
  };
  services: {
    eyebrow: string;
    heading: string;
    subheading: string;
    groups: ServiceGroup[];
  };
  product: {
    eyebrow: string;
    title: string;
    desc: string;
    features: ServiceItem[];
    cta: string;
    secondary: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
  };
  process: {
    eyebrow: string;
    heading: string;
    subheading: string;
    steps: ServiceItem[];
  };
  products: {
    eyebrow: string;
    heading: string;
    subheading: string;
    items: { name: string; tag: string; desc: string; href: string; cta: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    intro: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    note: string;
  };
}

export const homeContent: Record<Lang, HomeContent> = {
  fr: {
    seoTitle: 'DIGABLO — Agence digitale : logiciels sur mesure, apps & marketing',
    seoDescription:
      "Agence digitale internationale. Développement de logiciels sur mesure, applications web et mobiles, sites web et marketing digital. Et digabloPos, notre logiciel de caisse gratuit.",
    hero: {
      eyebrow: 'Agence digitale · International',
      title: 'On construit les outils digitaux qui font',
      titleAccent: 'grandir votre entreprise',
      subtitle:
        "Logiciels sur mesure, applications web et mobiles, sites web performants et marketing digital. De la stratégie à la mise en œuvre, DIGABLO transforme vos idées en produits qui rapportent.",
      ctaPrimary: 'Démarrer un projet',
      ctaSecondary: 'Découvrir nos services',
      badges: ['15+ ans d’expérience', 'Clients sur 4 continents', 'Support 24/7'],
    },
    services: {
      eyebrow: 'Nos services',
      heading: 'Tout le digital, sous un seul toit',
      subheading:
        'Des solutions complètes pour accompagner votre transformation numérique, du premier code à la première vente.',
      groups: [
        {
          id: 'dev',
          name: 'Développement & solutions techniques',
          tagline: 'Des logiciels robustes, pensés pour vos process.',
          items: [
            { title: 'Logiciels de gestion sur mesure', desc: 'CRM, gestion de projets, RH, stocks, production, formations — taillés pour votre métier.', slug: 'software-development' },
            { title: 'Applications web & mobiles', desc: 'Apps natives et web rapides qui optimisent vos processus internes et l’expérience client.', slug: 'web-mobile-apps' },
            { title: 'Sites web & e-commerce', desc: 'Sites vitrines, plateformes interactives et boutiques en ligne qui convertissent.', slug: 'websites-ecommerce' },
            { title: 'Données & cybersécurité', desc: 'Centralisation de vos données et protection de vos informations sensibles.', slug: 'software-development' },
          ],
        },
        {
          id: 'marketing',
          name: 'Marketing digital & communication',
          tagline: 'On vous rend visible et désirable, en ligne.',
          items: [
            { title: 'Identité visuelle & design', desc: 'Logos, chartes graphiques, supports — une marque qui marque les esprits.', slug: 'digital-marketing' },
            { title: 'Community management', desc: 'Création, gestion et animation de vos réseaux sociaux et WhatsApp Business.', slug: 'digital-marketing' },
            { title: 'Campagnes & acquisition', desc: 'Google Ads, Meta Ads, TikTok Ads pour générer du trafic et des clients qualifiés.', slug: 'digital-marketing' },
            { title: 'SEO & contenu', desc: 'Référencement naturel, articles, vidéos et infographies pour durablement attirer.', slug: 'digital-marketing' },
          ],
        },
      ],
    },
    product: {
      eyebrow: 'Notre produit phare',
      title: 'digabloPos — votre caisse, simple et puissante',
      desc:
        'Logiciel de caisse gratuit et certifié : encaissez, gérez vos stocks et pilotez votre activité depuis un smartphone, une tablette ou un ordinateur. Paiement mobile money intégré, et tout fonctionne même hors ligne. Aucun abonnement obligatoire.',
      features: [
        { title: 'Gratuit & certifié', desc: 'Démarrez sans frais, conforme et fiable. Vous ne payez que ce dont vous avez besoin.' },
        { title: 'Mode hors ligne', desc: 'Continuez à vendre même sans internet ni courant. La synchro se fait toute seule.' },
        { title: 'Mobile money intégré', desc: 'Encaissez par M-Pesa, Orange Money, Airtel Money et plus, directement en caisse.' },
        { title: 'Stocks & rapports', desc: 'Suivi des stocks en temps réel et rapports détaillés pour piloter votre marge.' },
      ],
      cta: 'Découvrir digabloPos',
      secondary: 'Voir une démo',
    },
    about: {
      eyebrow: 'À propos',
      heading: 'Votre partenaire digital de confiance',
      paragraphs: [
        'DIGABLO conçoit et commercialise des solutions digitales pour les entreprises comme pour les particuliers, partout dans le monde.',
        'Avec plus de 15 ans d’expérience et une équipe de développeurs passionnés, nous livrons des produits innovants qui répondent vraiment aux besoins du marché — de Kinshasa à Paris, et bien au-delà.',
        'Nous investissons en continu dans la R&D pour que nos solutions restent à la pointe. Votre réussite est notre meilleure publicité.',
      ],
      stats: [
        { value: '15+', label: 'Années d’expérience' },
        { value: '100+', label: 'Clients satisfaits' },
        { value: '500+', label: 'Projets livrés' },
        { value: '24/7', label: 'Support technique' },
      ],
    },
    process: {
      eyebrow: 'Notre méthode',
      heading: 'De l’idée au lancement, sans friction',
      subheading: 'Une démarche claire en quatre étapes, pour des résultats mesurables.',
      steps: [
        { title: '1 · Écoute & stratégie', desc: 'On comprend votre métier, vos objectifs et vos contraintes pour cadrer le bon périmètre.' },
        { title: '2 · Design & prototype', desc: 'On maquette l’expérience et on valide la direction avant d’écrire la moindre ligne.' },
        { title: '3 · Développement', desc: 'On construit par itérations, avec des livraisons régulières et des points fréquents.' },
        { title: '4 · Lancement & support', desc: 'On déploie, on mesure, on optimise — et on reste à vos côtés 24/7.' },
      ],
    },
    products: {
      eyebrow: 'Nos produits',
      heading: 'On ne fait pas que du sur-mesure — on édite nos propres produits',
      subheading:
        'La meilleure preuve de notre savoir-faire : des logiciels SaaS que nous avons conçus, lancés et que nous opérons au quotidien, partout dans le monde.',
      items: [
        {
          name: 'digabloPos',
          tag: 'Commerce · Point de vente · Worldwide',
          desc: 'Logiciel de caisse gratuit, certifié et hors ligne, avec paiement mobile money intégré. Utilisé par des commerçants sur plusieurs continents.',
          href: 'https://pos.digablo.fr/',
          cta: 'Visiter le site',
        },
        {
          name: 'MineSync',
          tag: 'Industrie minière · SaaS · Mode hors ligne',
          desc: 'Plateforme d’automatisation pour le secteur minier : suivi QHSE, production, validations fournisseurs et alertes temps réel — pensée pour les environnements à connectivité difficile.',
          href: 'https://minesync.tech/',
          cta: 'Visiter le site',
        },
        {
          name: 'Surestaria',
          tag: 'Logistique portuaire · Transit & douane · Afrique',
          desc: 'Logiciel de facturation des surestaries (demurrage) pour les transitaires et commissionnaires en douane : suivi des conteneurs, calcul automatisé selon les barèmes, gestion documentaire et facturation multi-devises.',
          href: 'https://surestaria.com/',
          cta: 'Visiter le site',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Discutons de votre projet',
      intro:
        'Que vous démarriez votre transformation numérique ou que vous vouliez passer à l’étape suivante, notre équipe vous accompagne de la stratégie à la mise en œuvre. Construisons ensemble le succès de demain.',
      name: 'Votre nom',
      email: 'Votre email',
      message: 'Expliquez-nous votre projet !',
      submit: 'Envoyer le message',
      note: 'Réponse sous 24h ouvrées. Ou écrivez-nous directement à contact@digablo.fr',
    },
  },
  en: {
    seoTitle: 'DIGABLO — Digital agency: custom software, apps & marketing',
    seoDescription:
      'International digital agency. Custom software development, web and mobile apps, websites and digital marketing. Plus digabloPos, our free point-of-sale software.',
    hero: {
      eyebrow: 'Digital agency · Worldwide',
      title: 'We build the digital tools that',
      titleAccent: 'grow your business',
      subtitle:
        'Custom software, web and mobile apps, high-performance websites and digital marketing. From strategy to delivery, DIGABLO turns your ideas into products that pay off.',
      ctaPrimary: 'Start a project',
      ctaSecondary: 'Explore our services',
      badges: ['15+ years of experience', 'Clients on 4 continents', '24/7 support'],
    },
    services: {
      eyebrow: 'Our services',
      heading: 'All things digital, under one roof',
      subheading:
        'End-to-end solutions to power your digital transformation — from the first line of code to the first sale.',
      groups: [
        {
          id: 'dev',
          name: 'Development & technical solutions',
          tagline: 'Robust software, built around your processes.',
          items: [
            { title: 'Custom management software', desc: 'CRM, project management, HR, inventory, production, training — tailored to your business.', slug: 'software-development' },
            { title: 'Web & mobile apps', desc: 'Fast native and web apps that streamline internal processes and customer experience.', slug: 'web-mobile-apps' },
            { title: 'Websites & e-commerce', desc: 'Showcase sites, interactive platforms and online stores that convert.', slug: 'websites-ecommerce' },
            { title: 'Data & cybersecurity', desc: 'Centralize your data and protect your sensitive information.', slug: 'software-development' },
          ],
        },
        {
          id: 'marketing',
          name: 'Digital marketing & communication',
          tagline: 'We make you visible and desirable, online.',
          items: [
            { title: 'Branding & design', desc: 'Logos, brand guidelines and assets — a brand that sticks in minds.', slug: 'digital-marketing' },
            { title: 'Community management', desc: 'Creating, managing and animating your social media and WhatsApp Business.', slug: 'digital-marketing' },
            { title: 'Campaigns & acquisition', desc: 'Google Ads, Meta Ads, TikTok Ads to drive traffic and qualified leads.', slug: 'digital-marketing' },
            { title: 'SEO & content', desc: 'Search optimization, articles, videos and infographics to attract for the long run.', slug: 'digital-marketing' },
          ],
        },
      ],
    },
    product: {
      eyebrow: 'Our flagship product',
      title: 'digabloPos — your point of sale, simple and powerful',
      desc:
        'Free, certified POS software: take payments, manage inventory and run your business from a smartphone, tablet or computer. Mobile money built in, and everything works even offline. No mandatory subscription.',
      features: [
        { title: 'Free & certified', desc: 'Start at no cost, compliant and reliable. Only pay for what you actually need.' },
        { title: 'Offline mode', desc: 'Keep selling even without internet or power. Syncing happens automatically.' },
        { title: 'Mobile money built in', desc: 'Accept M-Pesa, Orange Money, Airtel Money and more, right at the register.' },
        { title: 'Inventory & reports', desc: 'Real-time stock tracking and detailed reports to manage your margins.' },
      ],
      cta: 'Discover digabloPos',
      secondary: 'See a demo',
    },
    about: {
      eyebrow: 'About',
      heading: 'Your trusted digital partner',
      paragraphs: [
        'DIGABLO designs and delivers digital solutions for businesses and individuals, all around the world.',
        'With 15+ years of experience and a team of passionate developers, we ship innovative products that truly meet market needs — from Kinshasa to Paris, and far beyond.',
        'We invest continuously in R&D to keep our solutions on the cutting edge. Your success is our best advertising.',
      ],
      stats: [
        { value: '15+', label: 'Years of experience' },
        { value: '100+', label: 'Happy clients' },
        { value: '500+', label: 'Projects delivered' },
        { value: '24/7', label: 'Technical support' },
      ],
    },
    process: {
      eyebrow: 'How we work',
      heading: 'From idea to launch, friction-free',
      subheading: 'A clear four-step approach, built for measurable results.',
      steps: [
        { title: '1 · Listen & strategy', desc: 'We learn your business, goals and constraints to scope the right thing.' },
        { title: '2 · Design & prototype', desc: 'We mock up the experience and validate direction before writing a single line.' },
        { title: '3 · Development', desc: 'We build in iterations, with regular releases and frequent check-ins.' },
        { title: '4 · Launch & support', desc: 'We deploy, measure and optimize — and stay by your side 24/7.' },
      ],
    },
    products: {
      eyebrow: 'Our products',
      heading: 'We don’t just build for clients — we ship our own products',
      subheading:
        'The best proof of our expertise: SaaS products we designed, launched and operate every day, all around the world.',
      items: [
        {
          name: 'digabloPos',
          tag: 'Retail · Point of sale · Worldwide',
          desc: 'Free, certified, offline-capable POS software with built-in mobile money. Used by merchants across several continents.',
          href: 'https://pos.digablo.fr/',
          cta: 'Visit the site',
        },
        {
          name: 'MineSync',
          tag: 'Mining industry · SaaS · Offline mode',
          desc: 'Automation platform for the mining sector: QHSE tracking, production, supplier approvals and real-time alerts — built for low-connectivity environments.',
          href: 'https://minesync.tech/',
          cta: 'Visit the site',
        },
        {
          name: 'Surestaria',
          tag: 'Port logistics · Freight & customs · Africa',
          desc: 'Demurrage invoicing software for freight forwarders and customs brokers: container tracking, automated calculation from carrier tariffs, document management and multi-currency billing.',
          href: 'https://surestaria.com/',
          cta: 'Visit the site',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's talk about your project",
      intro:
        'Whether you are starting your digital transformation or ready for the next step, our team supports you from strategy to delivery. Let us build tomorrow’s success together.',
      name: 'Your name',
      email: 'Your email',
      message: 'Tell us about your project!',
      submit: 'Send message',
      note: 'We reply within 1 business day. Or email us directly at contact@digablo.fr',
    },
  },
};
