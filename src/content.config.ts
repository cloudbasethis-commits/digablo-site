import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      lang: z.enum(['fr', 'en']),
      /** Identifiant d'auteur (voir src/data/authors.ts). */
      author: z.string().default('redaction'),
      /**
       * Slug de l'article équivalent dans l'autre langue, quand il existe.
       * Les articles FR et EN sont écrits indépendamment (intentions de
       * recherche différentes) : sans équivalent, aucun hreflang n'est émis
       * plutôt que d'en pointer un vers une page inexistante.
       */
      altSlug: z.string().optional(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      draft: z.boolean().default(false),
      /** Questions/réponses affichées en fin d'article et exposées en FAQPage (JSON-LD). */
      faq: z
        .array(z.object({ question: z.string(), answer: z.string() }))
        .optional(),
    }),
});

export const collections = { blog };
