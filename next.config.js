const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = async (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {

  }

  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    webpack: (config, options) => {
      return config;
    }
  }
  return nextConfig
}
