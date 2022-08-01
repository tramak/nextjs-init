const { mergeConfig } = require('vite');
const path = require("path");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: (config, { configType }) => {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@/pages': path.resolve(path.dirname(__dirname), "pages"),
          '@/src': path.resolve(path.dirname(__dirname), "src"),
          '@/api': path.resolve(path.dirname(__dirname), "src/api"),
          '@/components': path.resolve(path.dirname(__dirname), "src/components"),
          '@/context': path.resolve(path.dirname(__dirname), "src/context"),
          '@/redux': path.resolve(path.dirname(__dirname), "src/redux"),
          '@/translate': path.resolve(path.dirname(__dirname), "src/translate"),
          '@/types': path.resolve(path.dirname(__dirname), "src/types"),
          '@/ui': path.resolve(path.dirname(__dirname), "src/ui"),
          '@/utils': path.resolve(path.dirname(__dirname), "src/utils"),
        },
      },
    });
  },
}
