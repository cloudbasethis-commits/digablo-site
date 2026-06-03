import rss from '@astrojs/rss';
import { getPosts, postSlug } from '../utils/blog';

export async function GET(context) {
  const posts = await getPosts('fr');
  return rss({
    title: 'Blog DIGABLO',
    description:
      'Conseils sur le développement logiciel, les applications, le marketing digital et la transformation numérique.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${postSlug(post.id)}/`,
    })),
    customData: `<language>fr-FR</language>`,
  });
}
