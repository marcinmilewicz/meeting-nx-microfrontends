const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { createDefinePluginConfig, createModuleFederationMappings } = require('../../tools/build/webpack-tools');

module.exports = {
  output: {
    uniqueName: 'meetings-shell-app',
    publicPath: 'http://localhost:4200/',
  },
  devServer: {
    liveReload: false,
    hot: false,
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module' },
      shared: { ...crer },
    }),
    createDefinePluginConfig(),
  ],
};
