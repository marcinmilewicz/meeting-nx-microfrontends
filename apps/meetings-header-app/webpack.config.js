const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { createDefinePluginConfig, getAngularMappings } = require('../../tools/build/webpack-tools');

module.exports = {
  output: {
    uniqueName: 'meetingsHeaderApp',
    publicPath: 'http://localhost:5100/',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  plugins: [
    createDefinePluginConfig(),
    new ModuleFederationPlugin({
      library: { type: 'var', name: 'meetingsHeaderApp' },
      name: 'meetingsHeaderApp',
      filename: 'meetingsHeaderApp.js',
      exposes: {
        './MeetingsHeaderComponent': './apps/meetings-header-app/src/app/header/meetings-header.component.ts',
      },
      shared: { ...getAngularMappings() },
    }),
  ],
};
