import rss from '@astrojs/rss';
import { UI } from '../../config';
import { getPosts, slugOf } from '../../lib/posts';

export async function GET(context) {
  const posts = await getPosts('vi');
  return rss({
    title: UI.vi.siteTitle,
    description: UI.vi.siteDescription,
    site: `${context.site}blog/vi/`,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/vi/${slugOf(post)}/`,
      categories: [post.data.category, ...post.data.tags],
    })),
  });
}
