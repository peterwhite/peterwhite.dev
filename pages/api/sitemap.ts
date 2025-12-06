import { allPosts } from '#/.contentlayer/generated';
import { Post } from '#/.contentlayer/generated';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600');

  const posts = allPosts.map((post: Post) => {
    return `
      <url>
        <loc>${`https://peterwhite.dev${post.slug}`}</loc>
        <lastmod>${post.date}</lastmod>
      </url>
    `;
  });

  const pages = [
    { loc: 'https://peterwhite.dev', lastmod: '2021-01-02' },
    { loc: 'https://peterwhite.dev/about', lastmod: '2021-01-02' },
    { loc: 'https://peterwhite.dev/posts', lastmod: '2021-01-02' },
    { loc: 'https://peterwhite.dev/contact', lastmod: '2021-01-02' },
  ];

  const pagesXml = pages.map((page) => {
    return `
      <url>
        <loc>${page.loc}</loc>
        <lastmod>${page.lastmod}</lastmod>
      </url>
    `;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pagesXml}
      ${posts}
      </urlset>`;

  res.end(xml);
}
