module.exports = {
    env: {
      GAID: process.env.GAID,
      LOGGER_URL: process.env.LOGGER_URL
    },
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
}
