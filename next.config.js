/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["news.airbnb.com"],
  },
};

module.exports = nextConfig;
