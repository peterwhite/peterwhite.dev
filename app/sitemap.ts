import { posts } from '#/.velite';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = posts.map((post) => ({
    url: `https://peterwhite.dev${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    { url: 'https://peterwhite.dev', lastModified: new Date() },
    { url: 'https://peterwhite.dev/about', lastModified: new Date() },
    { url: 'https://peterwhite.dev/posts', lastModified: new Date() },
    { url: 'https://peterwhite.dev/contact', lastModified: new Date() },
    ...postEntries,
  ];
}
