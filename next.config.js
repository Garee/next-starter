// @ts-check

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const config = {
  reactStrictMode: true,
  future: undefined,
  experimental: undefined,
  webpackDevMiddleware: (config) => {
    if (process.env.DOCKER) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
    }

    return config;
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
};

module.exports = withPWA(config);
