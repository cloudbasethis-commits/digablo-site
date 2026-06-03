import type { Lang } from '../i18n/ui';

export interface ServiceOffering {
  title: string;
  desc: string;
}
export interface ServiceFaq {
  q: string;
  a: string;
}
export interface Service {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string[];
  offerings: ServiceOffering[];
  deliverables: string[];
  faq: ServiceFaq[];
  ctaLine: string;
}

export const servicesContent: Record<Lang, Service[]> = {
  fr: [
    {
      slug: 'software-development',
      name: 'Développement de logiciels sur mesure',
      metaTitle: 'Développement de logiciels sur mesure — DIGABLO',
      metaDescription:
        'Développement de logiciels sur mesure : CRM, gestion de projets, RH, stocks, production. DIGABLO conçoit des outils robustes taillés pour votre métier.',
      tagline: 'Des logiciels taillés pour vos process, pas l’inverse.',
      intro: [
        'Les solutions standards finissent toujours par vous brider. Chez DIGABLO, nous concevons des logiciels de gestion sur mesure qui épousent exactement votre façon de travailler — et qui évoluent avec vous.',
        'CRM, gestion de projets, RH, suivi de production, stocks, formations : nous transformons vos processus en outils fiables, rapides et faciles à prendre en main par vos équipes.',
      ],
      offerings: [
        { title: 'Logiciels de gestion (CRM, ERP léger)', desc: 'Centralisez clients, ventes, projets et opérations dans un outil unique et cohérent.' },
        { title: 'Automatisation des processus', desc: 'Éliminez la double saisie et les tâches répétitives pour gagner un temps précieux.' },
        { title: 'Intégrations & API', desc: 'Connectez vos outils existants (comptabilité, paiement, messagerie) entre eux.' },
        { title: 'Tableaux de bord & rapports', desc: 'Des indicateurs clairs pour décider sur la base de données réelles, pas d’intuitions.' },
        { title: 'Données & cybersécurité', desc: 'Centralisation, sauvegardes et protection de vos informations sensibles.' },
        { title: 'Maintenance & évolutions', desc: 'Un partenaire durable qui fait grandir votre logiciel au rythme de votre activité.' },
      ],
      deliverables: [
        'Cadrage et spécifications fonctionnelles',
        'Maquettes et prototype validés avant développement',
        'Développement par itérations avec livraisons régulières',
        'Formation de vos équipes et documentation',
        'Support technique et maintenance évolutive',
      ],
      faq: [
        { q: 'Combien de temps pour développer un logiciel sur mesure ?', a: 'Cela dépend du périmètre, mais nous livrons une première version utilisable rapidement, puis nous enrichissons par itérations. Un cadrage initial permet d’estimer précisément le calendrier.' },
        { q: 'Resterai-je propriétaire de mon logiciel ?', a: 'Oui. Le code et les données vous appartiennent. Nous travaillons en toute transparence, sans vous enfermer.' },
        { q: 'Pouvez-vous reprendre un projet existant ?', a: 'Oui, nous auditons votre solution actuelle et reprenons le développement ou la maintenance lorsque c’est pertinent.' },
      ],
      ctaLine: 'Un projet de logiciel en tête ? Parlons-en.',
    },
    {
      slug: 'web-mobile-apps',
      name: 'Applications web & mobiles',
      metaTitle: 'Développement d’applications web et mobiles — DIGABLO',
      metaDescription:
        'Création d’applications web et mobiles natives, rapides et fiables. DIGABLO développe des apps qui optimisent vos processus et l’expérience de vos clients.',
      tagline: 'Des applications rapides, fiables, que vos utilisateurs adorent.',
      intro: [
        'Une bonne application se reconnaît à sa simplicité : elle fait gagner du temps et donne envie d’y revenir. Nous concevons des applications web et mobiles performantes, du premier écran à la mise en production.',
        'Que ce soit pour optimiser vos processus internes ou pour offrir une expérience mémorable à vos clients, nous construisons des apps solides, sécurisées et pensées pour durer.',
      ],
      offerings: [
        { title: 'Applications mobiles natives', desc: 'Android et iOS, performantes et fidèles aux standards de chaque plateforme.' },
        { title: 'Applications web (PWA)', desc: 'Accessibles partout depuis un navigateur, installables, rapides même en réseau faible.' },
        { title: 'Expérience utilisateur (UX/UI)', desc: 'Des parcours clairs et un design soigné qui maximisent l’adoption.' },
        { title: 'Mode hors ligne & synchronisation', desc: 'Vos utilisateurs restent productifs même sans connexion stable.' },
        { title: 'Notifications & temps réel', desc: 'Engagez vos utilisateurs au bon moment, avec les bonnes informations.' },
        { title: 'Publication & suivi', desc: 'Mise en ligne sur les stores, analytics et amélioration continue.' },
      ],
      deliverables: [
        'Ateliers de cadrage et parcours utilisateurs',
        'Maquettes interactives (prototype cliquable)',
        'Développement multiplateforme',
        'Tests et recette qualité',
        'Publication sur les stores et accompagnement',
      ],
      faq: [
        { q: 'Faut-il une app native ou une app web ?', a: 'Cela dépend de vos besoins (performance, accès matériel, budget). Nous vous conseillons la meilleure option lors du cadrage — parfois une PWA suffit, parfois le natif s’impose.' },
        { q: 'Gérez-vous la publication sur l’App Store et Google Play ?', a: 'Oui, nous prenons en charge la mise en ligne et le suivi des mises à jour.' },
        { q: 'L’application fonctionnera-t-elle hors ligne ?', a: 'Nous concevons des applications capables de fonctionner hors ligne et de se synchroniser dès le retour du réseau, comme nous le faisons pour digabloPos.' },
      ],
      ctaLine: 'Donnons vie à votre application.',
    },
    {
      slug: 'websites-ecommerce',
      name: 'Sites web & e-commerce',
      metaTitle: 'Création de sites web et e-commerce — DIGABLO',
      metaDescription:
        'Création de sites web rapides, modernes et bien référencés, et de boutiques e-commerce qui convertissent. DIGABLO soigne performance, SEO et design.',
      tagline: 'Un site rapide, beau et bien référencé qui travaille pour vous 24h/24.',
      intro: [
        'Votre site est souvent le premier contact avec un client. Nous créons des sites vitrines et des plateformes e-commerce rapides, élégantes et optimisées pour Google — exactement comme celui que vous consultez.',
        'Performance, référencement naturel et expérience mobile irréprochable : nous construisons des sites qui attirent des visiteurs et les transforment en clients.',
      ],
      offerings: [
        { title: 'Sites vitrines & institutionnels', desc: 'Une présence en ligne moderne qui inspire confiance dès la première seconde.' },
        { title: 'Boutiques e-commerce', desc: 'Catalogue, paiement, gestion des commandes : une boutique qui vend vraiment.' },
        { title: 'Performance & Core Web Vitals', desc: 'Des pages ultra-rapides (scores PageSpeed au vert) pour le SEO et la conversion.' },
        { title: 'SEO technique intégré', desc: 'Balises, données structurées, sitemap, multilingue : indexation optimale dès le départ.' },
        { title: 'Sites multilingues', desc: 'Touchez une audience internationale avec une gestion propre des langues (hreflang).' },
        { title: 'Maintenance & sécurité', desc: 'Hébergement, sauvegardes et mises à jour pour un site toujours en ligne.' },
      ],
      deliverables: [
        'Arborescence et stratégie de contenu',
        'Design sur mesure (desktop & mobile)',
        'Intégration rapide et optimisée SEO',
        'Mise en ligne et configuration du domaine',
        'Formation à la mise à jour du contenu',
      ],
      faq: [
        { q: 'Mon site sera-t-il rapide et bien noté par Google ?', a: 'Oui. Nous construisons des sites statiques ultra-performants qui visent des scores PageSpeed au vert, un critère de classement important pour Google.' },
        { q: 'Pourrai-je mettre à jour le contenu moi-même ?', a: 'Oui, nous mettons en place une solution simple pour gérer vos pages et votre blog, et nous formons vos équipes.' },
        { q: 'Gérez-vous le multilingue ?', a: 'Absolument. Nous gérons les versions linguistiques proprement (hreflang) pour viser une audience internationale.' },
      ],
      ctaLine: 'Créons le site qui vous ressemble.',
    },
    {
      slug: 'digital-marketing',
      name: 'Marketing digital',
      metaTitle: 'Marketing digital & communication — DIGABLO',
      metaDescription:
        'Marketing digital : SEO, publicité (Google, Meta, TikTok Ads), community management, branding et création de contenu. DIGABLO vous rend visible et désirable.',
      tagline: 'On vous rend visible, désirable, et on génère des clients.',
      intro: [
        'Le meilleur produit du monde ne sert à rien si personne ne le connaît. Nous déployons des stratégies de marketing digital qui attirent l’attention, génèrent du trafic qualifié et transforment vos visiteurs en clients.',
        'Du référencement naturel aux campagnes payantes, en passant par les réseaux sociaux et le branding, nous orchestrons votre présence en ligne avec une seule obsession : des résultats mesurables.',
      ],
      offerings: [
        { title: 'SEO & référencement naturel', desc: 'Positionnez-vous durablement sur Google pour attirer un trafic gratuit et qualifié.' },
        { title: 'Publicité en ligne (SEA)', desc: 'Campagnes Google Ads, Meta Ads et TikTok Ads pilotées au résultat.' },
        { title: 'Community management', desc: 'Création, gestion et animation de vos réseaux sociaux et WhatsApp Business.' },
        { title: 'Identité visuelle & branding', desc: 'Logos, chartes graphiques et supports — une marque cohérente et mémorable.' },
        { title: 'Création de contenu', desc: 'Articles, vidéos, visuels et infographies qui captent et convertissent.' },
        { title: 'Stratégie & analytics', desc: 'Mesure des performances et optimisation continue de votre retour sur investissement.' },
      ],
      deliverables: [
        'Audit et stratégie digitale',
        'Plan d’action et calendrier éditorial',
        'Production des contenus et campagnes',
        'Pilotage et reporting réguliers',
        'Optimisation continue des performances',
      ],
      faq: [
        { q: 'Quel budget prévoir pour de la publicité en ligne ?', a: 'Nous adaptons le budget média à vos objectifs et démarrons souvent par un test mesuré avant de monter en puissance sur ce qui fonctionne.' },
        { q: 'Le SEO, ça prend combien de temps ?', a: 'Le référencement naturel est un investissement de moyen terme : les premiers résultats apparaissent en quelques semaines à quelques mois, puis s’accumulent durablement.' },
        { q: 'Pouvez-vous gérer mes réseaux sociaux de A à Z ?', a: 'Oui, de la stratégie à la publication et à l’animation de votre communauté, en français comme en anglais.' },
      ],
      ctaLine: 'Faisons décoller votre visibilité.',
    },
  ],
  en: [
    {
      slug: 'software-development',
      name: 'Custom software development',
      metaTitle: 'Custom software development — DIGABLO',
      metaDescription:
        'Custom software development: CRM, project management, HR, inventory, production. DIGABLO builds robust tools tailored to the way your business works.',
      tagline: 'Software built around your processes, not the other way around.',
      intro: [
        'Off-the-shelf tools always end up limiting you. At DIGABLO, we build custom management software that fits exactly how you work — and grows with you.',
        'CRM, project management, HR, production tracking, inventory, training: we turn your processes into reliable, fast tools your teams actually enjoy using.',
      ],
      offerings: [
        { title: 'Management software (CRM, light ERP)', desc: 'Centralize customers, sales, projects and operations in one coherent tool.' },
        { title: 'Process automation', desc: 'Eliminate double data entry and repetitive tasks to save valuable time.' },
        { title: 'Integrations & APIs', desc: 'Connect your existing tools (accounting, payment, messaging) together.' },
        { title: 'Dashboards & reports', desc: 'Clear metrics so you decide on real data, not gut feeling.' },
        { title: 'Data & cybersecurity', desc: 'Centralization, backups and protection of your sensitive information.' },
        { title: 'Maintenance & evolution', desc: 'A long-term partner that grows your software at the pace of your business.' },
      ],
      deliverables: [
        'Scoping and functional specifications',
        'Mockups and prototype validated before development',
        'Iterative development with regular releases',
        'Team training and documentation',
        'Technical support and ongoing maintenance',
      ],
      faq: [
        { q: 'How long does it take to build custom software?', a: 'It depends on scope, but we ship a usable first version quickly, then enrich it in iterations. An initial scoping phase lets us estimate the timeline precisely.' },
        { q: 'Will I own my software?', a: 'Yes. The code and data are yours. We work transparently, with no lock-in.' },
        { q: 'Can you take over an existing project?', a: 'Yes, we audit your current solution and take over development or maintenance when it makes sense.' },
      ],
      ctaLine: 'Got a software project in mind? Let’s talk.',
    },
    {
      slug: 'web-mobile-apps',
      name: 'Web & mobile applications',
      metaTitle: 'Web and mobile app development — DIGABLO',
      metaDescription:
        'Web and native mobile app development — fast, reliable apps. DIGABLO builds applications that streamline your processes and delight your customers.',
      tagline: 'Fast, reliable apps your users actually love.',
      intro: [
        'A great app is recognizable by its simplicity: it saves time and makes people want to come back. We design high-performance web and mobile apps, from the first screen to production.',
        'Whether to streamline internal processes or deliver a memorable customer experience, we build solid, secure apps designed to last.',
      ],
      offerings: [
        { title: 'Native mobile apps', desc: 'Android and iOS, performant and true to each platform’s standards.' },
        { title: 'Web apps (PWA)', desc: 'Accessible anywhere from a browser, installable, fast even on weak networks.' },
        { title: 'User experience (UX/UI)', desc: 'Clear journeys and polished design that maximize adoption.' },
        { title: 'Offline mode & sync', desc: 'Your users stay productive even without a stable connection.' },
        { title: 'Notifications & real time', desc: 'Engage users at the right moment, with the right information.' },
        { title: 'Publishing & monitoring', desc: 'Store deployment, analytics and continuous improvement.' },
      ],
      deliverables: [
        'Scoping workshops and user journeys',
        'Interactive mockups (clickable prototype)',
        'Cross-platform development',
        'Testing and quality assurance',
        'Store publishing and support',
      ],
      faq: [
        { q: 'Do I need a native app or a web app?', a: 'It depends on your needs (performance, hardware access, budget). We advise the best option during scoping — sometimes a PWA is enough, sometimes native is the way.' },
        { q: 'Do you handle App Store and Google Play publishing?', a: 'Yes, we take care of deployment and update management.' },
        { q: 'Will the app work offline?', a: 'We build apps that work offline and sync as soon as the network is back — just like we do for digabloPos.' },
      ],
      ctaLine: 'Let’s bring your app to life.',
    },
    {
      slug: 'websites-ecommerce',
      name: 'Websites & e-commerce',
      metaTitle: 'Website and e-commerce development — DIGABLO',
      metaDescription:
        'Fast, modern, well-ranked websites and e-commerce stores that convert. DIGABLO obsesses over performance, SEO and design.',
      tagline: 'A fast, beautiful, well-ranked site that works for you 24/7.',
      intro: [
        'Your website is often a customer’s first contact with you. We create showcase sites and e-commerce platforms that are fast, elegant and optimized for Google — exactly like the one you’re reading.',
        'Performance, organic search and flawless mobile experience: we build sites that attract visitors and turn them into customers.',
      ],
      offerings: [
        { title: 'Showcase & corporate sites', desc: 'A modern online presence that inspires trust from the first second.' },
        { title: 'E-commerce stores', desc: 'Catalog, payment, order management: a store that actually sells.' },
        { title: 'Performance & Core Web Vitals', desc: 'Ultra-fast pages (green PageSpeed scores) for SEO and conversion.' },
        { title: 'Built-in technical SEO', desc: 'Tags, structured data, sitemap, multilingual: optimal indexing from day one.' },
        { title: 'Multilingual sites', desc: 'Reach an international audience with clean language handling (hreflang).' },
        { title: 'Maintenance & security', desc: 'Hosting, backups and updates to keep your site always online.' },
      ],
      deliverables: [
        'Site structure and content strategy',
        'Custom design (desktop & mobile)',
        'Fast, SEO-optimized implementation',
        'Launch and domain configuration',
        'Training to update your content',
      ],
      faq: [
        { q: 'Will my site be fast and rank well on Google?', a: 'Yes. We build ultra-fast static sites targeting green PageSpeed scores — an important ranking factor for Google.' },
        { q: 'Can I update the content myself?', a: 'Yes, we set up a simple way to manage your pages and blog, and we train your team.' },
        { q: 'Do you handle multilingual?', a: 'Absolutely. We handle language versions cleanly (hreflang) to target an international audience.' },
      ],
      ctaLine: 'Let’s build a site that looks like you.',
    },
    {
      slug: 'digital-marketing',
      name: 'Digital marketing',
      metaTitle: 'Digital marketing & communication — DIGABLO',
      metaDescription:
        'Digital marketing: SEO, paid ads (Google, Meta, TikTok), community management, branding and content creation. DIGABLO makes you visible and desirable.',
      tagline: 'We make you visible, desirable — and we generate customers.',
      intro: [
        'The best product in the world is useless if nobody knows about it. We deploy digital marketing strategies that grab attention, drive qualified traffic and turn visitors into customers.',
        'From organic search to paid campaigns, social media and branding, we orchestrate your online presence with one obsession: measurable results.',
      ],
      offerings: [
        { title: 'SEO & organic search', desc: 'Rank durably on Google to attract free, qualified traffic.' },
        { title: 'Paid advertising (SEA)', desc: 'Google Ads, Meta Ads and TikTok Ads campaigns managed for results.' },
        { title: 'Community management', desc: 'Creating, managing and animating your social media and WhatsApp Business.' },
        { title: 'Branding & visual identity', desc: 'Logos, brand guidelines and assets — a coherent, memorable brand.' },
        { title: 'Content creation', desc: 'Articles, videos, visuals and infographics that capture and convert.' },
        { title: 'Strategy & analytics', desc: 'Performance measurement and continuous optimization of your ROI.' },
      ],
      deliverables: [
        'Audit and digital strategy',
        'Action plan and editorial calendar',
        'Content and campaign production',
        'Ongoing management and reporting',
        'Continuous performance optimization',
      ],
      faq: [
        { q: 'What budget should I plan for online advertising?', a: 'We tailor the media budget to your goals and often start with a measured test before scaling what works.' },
        { q: 'How long does SEO take?', a: 'Organic search is a mid-term investment: first results appear within weeks to months, then compound durably.' },
        { q: 'Can you manage my social media end to end?', a: 'Yes, from strategy to publishing and community animation, in both French and English.' },
      ],
      ctaLine: 'Let’s grow your visibility.',
    },
  ],
};

export function getServices(lang: Lang): Service[] {
  return servicesContent[lang];
}
export function getService(lang: Lang, slug: string): Service | undefined {
  return servicesContent[lang].find((s) => s.slug === slug);
}
