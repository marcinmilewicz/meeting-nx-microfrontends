const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { createDefinePluginConfig, createExternalLibsMappings } = require('../../tools/build/webpack-tools');

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
      name: 'meetingsHeaderApp',
      library: { type: 'var', name: 'meetingsHeaderApp' },
      filename: 'meetingsHeaderApp.js',
      exposes: {
        './MeetingsHeaderComponent': './apps/meetings-header-app/src/app/header/meetings-header.component.ts',
      },
      shared: { ...createExternalLibsMappings() },
    }),
  ],
};
