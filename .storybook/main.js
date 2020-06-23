const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    // '@storybook/preset-create-react-app',
    // '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async config => {
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")]
            }
          },
          {
            loader: require.resolve("react-docgen-typescript-loader"),
            options: {
              // Provide the path to your tsconfig.json so that your stories can
              // display types from outside each individual story.
              tsconfigPath: path.resolve(__dirname, "../tsconfig.json"),
              shouldExtractLiteralValuesFromEnum: true,
              savePropValueAsString: true,
              propFilter: (prop) => {
                if (prop.parent) {
                  return !prop.parent.fileName.includes("node_modules");
                }
                return true;
              },
            },
          },
        ]
      }
    ],
      config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
