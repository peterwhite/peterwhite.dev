import { defineCollection, defineConfig, s } from 'velite';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import type { Plugin } from 'unified';

const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(999),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      published: s.boolean().default(true),
      featured: s.boolean().default(false),
      image: s.string().optional(),
      slugPath: s.path(),
      toc: s.toc(),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      type: 'Post' as const,
      slug: `/${data.slugPath}`,
      slugAsParams: data.slugPath.split('/').slice(1).join('/'),
    })),
});

const reposts = defineCollection({
  name: 'Repost',
  pattern: 'reposts/**/*.md',
  schema: s
    .object({
      title: s.string().max(999),
      date: s.isodate(),
      description: s.string().max(999).optional(),
      published: s.boolean().default(true),
      link: s.string(),
      slugPath: s.path(),
    })
    .transform((data) => ({
      ...data,
      type: 'Repost' as const,
      slug: `/${data.slugPath}`,
      slugAsParams: data.slugPath.split('/').slice(1).join('/'),
    })),
});


export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    clean: true,
  },
  collections: { posts, reposts },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug as unknown as Plugin,
      rehypeHighlight as unknown as Plugin,
      [
        rehypeAutolinkHeadings as unknown as Plugin,
        {
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
  },
});
