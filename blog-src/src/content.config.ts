import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every post is one Markdown file in src/content/blog/.
// The schema below validates the frontmatter at build time — a missing title or a
// misspelled category fails the build instead of silently publishing a broken page.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['News', 'Guides', 'Updates']),
    game: z.enum(['rps-master', 'slide-pocket']).default('rps-master'),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
