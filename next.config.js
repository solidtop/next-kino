/* /** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
  },
  experimental: {
    topLevelAwait: true,
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },

  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;

 

