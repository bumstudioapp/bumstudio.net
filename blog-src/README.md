# RPS Master Blog (Astro) — bilingual EN / VI

Static blog for RPS Master, published at https://bumstudio.net/blog (English)
and https://bumstudio.net/blog/vi/ (Vietnamese). Built with Astro; the built
output in `dist/` is what gets copied into the repo's `blog/` folder.

## Structure

- Posts: `src/content/blog/en/*.md` and `src/content/blog/vi/*.md`
  - The SAME filename in both folders = the two language versions of one post.
  - English post URL: `/blog/<filename>/` · Vietnamese: `/blog/vi/<filename>/`
- Pages/layouts: `src/pages/`, `src/layouts/`, `src/components/`
- Shared settings + UI texts (both languages): `src/config.ts`
- Post helpers (language/slug from the file path): `src/lib/posts.ts`

## Posting (normal flow — GitHub Actions)

1. On GitHub, add the post file TWICE:
   `blog-src/src/content/blog/en/<slug>.md` and `blog-src/src/content/blog/vi/<slug>.md`
2. Commit. The "Build blog" workflow rebuilds and updates `blog/` in ~2 minutes.
3. Done — the post is live in both languages.

Use `post-template.md` as the starting point for the frontmatter.

## Local development

```bash
npm install
npm run dev    # preview at http://localhost:4321/blog/
npm run build  # outputs dist/
```

Rules the build enforces: title required, description ≤ 160 characters,
category must be News, Guides or Updates (same value in both languages —
only the on-screen label is translated).
