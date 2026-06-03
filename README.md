# Site DIGABLO

Nouveau site de l'agence **DIGABLO**, construit avec **Astro + Tailwind CSS v4**.
Bilingue (FR / EN), optimisé SEO, scores Lighthouse 100/100/100/100.

## 🚀 Commandes

```bash
npm install        # installer les dépendances
npm run dev        # serveur de développement (http://localhost:4321)
npm run build      # build de production -> dossier dist/
npm run preview    # prévisualiser le build de production
```

## 🌍 Déploiement

Le site est **statique** : il se déploie tel quel sur Vercel ou Netlify.

### Vercel
1. Pousser le projet sur GitHub.
2. Sur vercel.com : *New Project* → importer le repo.
3. Vercel détecte Astro automatiquement. Cliquer *Deploy*.
4. Brancher le domaine `digablo.fr` dans *Settings → Domains*.

### Netlify
Le fichier `netlify.toml` est déjà configuré (build `npm run build`, publish `dist`).
Importer le repo sur netlify.com, puis brancher le domaine.

## ✉️ Formulaire de contact (À FAIRE)

Le formulaire utilise [Web3Forms](https://web3forms.com) (gratuit, sans backend).

1. Créer une clé d'accès gratuite sur web3forms.com avec l'email `contact@digablo.fr`.
2. Dans `src/components/Home.astro`, remplacer `VOTRE_CLE_WEB3FORMS` par la vraie clé.

## ✍️ Ajouter un article de blog

Créer un fichier Markdown dans :
- `src/content/blog/fr/` pour le français
- `src/content/blog/en/` pour l'anglais

Pour qu'un article FR et son équivalent EN soient liés (hreflang), **utiliser le même nom de fichier** dans les deux dossiers.

En-tête (frontmatter) à copier :

```markdown
---
title: "Titre de l'article"
description: "Résumé pour Google et les réseaux (150-160 caractères)."
pubDate: 2026-06-10
lang: "fr"            # ou "en"
author: "DIGABLO"
tags: ["Tag1", "Tag2"]
draft: false          # mettre true pour ne pas publier
---

Le contenu de l'article en **Markdown**.
```

L'article apparaît automatiquement dans la liste du blog et dans le flux RSS.

## 🧩 Ajouter / modifier un service

Tout le contenu des pages services est dans `src/data/services.ts` (FR + EN).
Pour ajouter un service : ajoute un objet dans le tableau `fr` **et** dans `en`
avec le **même `slug`**. La page `/services/<slug>` est générée automatiquement.

## 🖼️ Régénérer le favicon / l'image de partage (OpenGraph)

```bash
node scripts/gen-assets.mjs
```

Régénère `public/apple-touch-icon.png` et `public/brand/og-default.png`.
Le favicon vectoriel est dans `public/favicon.svg`.

## 📈 Stratégie SEO

Le plan de mots-clés complet (par thème, langue, intention) est dans
`docs/seo-plan.md` : mots-clés agence + digabloPos, calendrier éditorial sur
12 mois, recommandations techniques et quick wins.

## 🗂️ Structure

```
src/
  components/   Header, Footer, Home (sections), BlogIndex
  layouts/      BaseLayout (SEO global), ArticleLayout
  data/home.ts  Tout le texte de la page d'accueil (FR + EN)
  i18n/         Dictionnaire et helpers de traduction
  content/blog/ Articles (fr/ et en/)
  pages/        Routes (/, /en/, /blog/, /en/blog/, rss.xml...)
  styles/       global.css (design system + couleurs de marque)
public/brand/   Logos
```

## 🎨 Couleurs de marque

Définies dans `src/styles/global.css` (bloc `@theme`) : `brand` (orange),
`teal`, `ink` (neutres sombres). Toutes validées pour le contraste (WCAG AA).
