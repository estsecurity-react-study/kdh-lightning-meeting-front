const withTwin = require("./withTwin.js");

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig;
