// @ts-check

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
};

module.exports = config;
