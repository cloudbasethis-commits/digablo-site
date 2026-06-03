import rss from '@astrojs/rss';
import { getPosts, postSlug } from '../../utils/blog';

export async function GET(context) {
  const posts = await getPosts('en');
  return rss({
    title: 'DIGABLO Blog',
    description:
      'Insights on software development, apps, digital marketing and the digital transformation of businesses.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/en/blog/${postSlug(post.id)}/`,
    })),
    customData: `<language>en</language>`,
  });
}
