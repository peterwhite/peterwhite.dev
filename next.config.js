const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },
  async redirects() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
        permanent: true,
      },
      {
        source: '/mentorship/',
        destination: 'https://mentors.codingcoach.io/u/61e98230815d8c6c32563650?country=NO',
        permanent: true,
      },
      {
        source: '/blog/guide-what-to-do-if-your-traffic-drops-after-migrating-to-cloudflare',
        destination: '/posts/cloudflare-traffic-drop',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/posts',
        permanent: true,
      },
    ]
  },
};


module.exports = withContentlayer(nextConfig);
