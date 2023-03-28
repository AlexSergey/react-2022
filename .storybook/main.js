module.exports = {
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      exclude: /\.module\.scss$/,
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader' },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
      ],
    });

    config.module.rules.push({
      test: /\.module\.scss$/,
      use: [
        { loader: 'style-loader' },
        { loader: 'css-loader', options: { modules: true } },
        { loader: 'postcss-loader' },
        { loader: 'sass-loader' },
      ],
    });

    return config;
  },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  env: (config) => ({
    ...config,
    API_URL: 'http://localhost:4444',
  }),
};
