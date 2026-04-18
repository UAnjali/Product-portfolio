/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/Product-portfolio",
  assetPrefix: "/Product-portfolio",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
