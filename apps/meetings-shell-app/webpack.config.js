const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {
  createDefinePluginConfig,
  getAngularMappings,
  getInternalLibsMappings,
} = require('../../tools/build/webpack-tools');

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
  plugins: [
    new ModuleFederationPlugin({
      shared: {
        ...getAngularMappings(),
        ...getInternalLibsMappings(),
      },
    }),
    createDefinePluginConfig(),
  ],
};
