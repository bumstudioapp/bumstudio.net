import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../config';

export type PostEntry = CollectionEntry<'blog'>;

// Post files live in src/content/blog/<lang>/, so the entry id is "<lang>/<slug>".
export const langOf = (entry: PostEntry): Lang =>
  entry.id.startsWith('vi/') ? 'vi' : 'en';

export const slugOf = (entry: PostEntry): string =>
  entry.id.replace(/^(en|vi)\//, '');

export async function getPosts(lang: Lang, game?: string): Promise<PostEntry[]> {
  const prefix = `${lang}/`;
  return (
    await getCollection(
      'blog',
      ({ data, id }) =>
        !data.draft && id.startsWith(prefix) && (!game || data.game === game),
    )
  ).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Paths below are relative to the blog base (/blog). EN lives at the root of
// the blog, VI under /vi/.
export const langPrefix = (lang: Lang) => (lang === 'vi' ? '/vi' : '');
export const postPath = (lang: Lang, slug: string) =>
  `${langPrefix(lang)}/${slug}/`;
export const categoryPath = (lang: Lang, slug: string) =>
  `${langPrefix(lang)}/category/${slug}/`;
export const homePath = (lang: Lang) => `${langPrefix(lang)}/`;

export const gamePath = (lang: Lang, game: string) =>
  `${langPrefix(lang)}/games/${game}/`;
