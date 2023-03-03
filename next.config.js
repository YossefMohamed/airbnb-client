/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["news.airbnb.com"],
  },
};

module.exports = nextConfig;
