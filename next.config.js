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
        source: '/blog/guide-what-to-do-if-your-traffic-drops-after-migrating-to-cloudflare',
        destination: '/posts/cloudflare-traffic-drop',
        permanent: true,
      },
    ]
  },
};


module.exports = withContentlayer(nextConfig);
