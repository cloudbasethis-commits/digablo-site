import type { Lang } from '../i18n/ui';

/**
 * Auteurs du blog. L'identifiant sert de valeur au champ `author` des articles
 * et de slug dans l'URL de la page auteur (/blog/auteur/<id>).
 * N'ajouter ici que des personnes réelles : la page auteur et le JSON-LD
 * `Person` sont des signaux d'expertise (E-E-A-T) exploités par Google et par
 * les moteurs IA, un profil fictif se retourne contre le site.
 */
export interface Author {
  id: string;
  name: string;
  /** true = personne physique (JSON-LD Person), false = entité éditoriale (Organization). */
  person: boolean;
  role: Record<Lang, string>;
  /** Bio courte affichée sous l'article. */
  bio: Record<Lang, string>;
  /** Profils externes (LinkedIn, X…) : renforce l'identification de l'auteur. */
  sameAs?: string[];
}

export const authors: Author[] = [
  {
    id: 'js-mirmin',
    name: 'Nkodia JS Mirmin',
    person: true,
    role: {
      fr: 'Fondateur de DIGABLO',
      en: 'Founder of DIGABLO',
    },
    bio: {
      fr: "Fondateur de DIGABLO, agence digitale présente en France et en République démocratique du Congo. Quinze ans à concevoir des logiciels métier, d'abord dans l'oil & gas puis dans le secteur minier, avant d'éditer ses propres produits : digabloPos (caisse hors ligne et mobile money), MineSync et Surestaria. Il écrit à partir de ce qu'il voit sur le terrain, entre Kinshasa et Paris.",
      en: 'Founder of DIGABLO, a digital agency operating in France and the Democratic Republic of Congo. Fifteen years building business software, first in oil and gas then in mining, before launching his own products: digabloPos (offline point of sale with mobile money), MineSync and Surestaria. He writes from what he sees in the field, between Kinshasa and Paris.',
    },
  },
  {
    id: 'redaction',
    name: 'La rédaction DIGABLO',
    person: false,
    role: {
      fr: 'Équipe éditoriale',
      en: 'Editorial team',
    },
    bio: {
      fr: "L'équipe DIGABLO conçoit des logiciels de caisse, des applications et des sites pour des commerces et des PME en Afrique et en Europe. Ces guides sont écrits à partir des questions que posent nos clients au quotidien.",
      en: 'The DIGABLO team builds point-of-sale software, apps and websites for retailers and small businesses across Africa and Europe. These guides come from the questions our clients ask us every day.',
    },
  },
];

const byId = new Map(authors.map((a) => [a.id, a]));

/** Auteur signant les nouveaux articles quand rien n'est précisé. */
export const defaultAuthorId = 'redaction';

/**
 * Résout la valeur du champ `author` d'un article.
 * Une valeur inconnue (ancien article signé d'un nom libre) est renvoyée telle
 * quelle, sans page auteur, plutôt que de casser le build.
 */
export function resolveAuthor(value: string): Author {
  return (
    byId.get(value) ?? {
      id: '',
      name: value,
      person: false,
      role: { fr: '', en: '' },
      bio: { fr: '', en: '' },
    }
  );
}

/** Chemin de la page auteur (vide si l'auteur n'a pas de fiche). */
export function authorPath(author: Author, lang: Lang): string | null {
  if (!author.id) return null;
  return lang === 'fr' ? `/blog/auteur/${author.id}` : `/en/blog/author/${author.id}`;
}
