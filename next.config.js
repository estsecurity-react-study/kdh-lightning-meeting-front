const withTwin = require('./withTwin.js');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.pixabay.com'],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*',
      },
    ];
  },
});

module.exports = nextConfig;
