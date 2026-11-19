import rss from '@astrojs/rss';
import { UI } from '../config';
import { getPosts, slugOf } from '../lib/posts';

export async function GET(context) {
  const posts = await getPosts('en');
  return rss({
    title: UI.en.siteTitle,
    description: UI.en.siteDescription,
    site: `${context.site}blog/`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${slugOf(post)}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
