const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  // disable: process.env.NODE_ENV !== "production", // Enable PWA only in production
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  compiler: { emotion: true },
  webpack(config) {
    // Centralize fallback
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      fs: false,
      tls: false,
    };

    // Add SVG support
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
});

module.exports = nextConfig;
