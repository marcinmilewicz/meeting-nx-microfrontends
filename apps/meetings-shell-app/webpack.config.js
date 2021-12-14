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
      remotes: {
        meetingsHeaderApp: 'meetingsHeaderApp@http://localhost:5100/meetingsHeaderApp.js',
        meetingTemplatesApp: 'meetingTemplatesApp@http://localhost:5001/meetingTemplatesApp.js',
        meetingScheduledApp: 'meetingScheduledApp@http://localhost:5002/meetingScheduledApp.js',
      },
      shared: {
        ...getAngularMappings(),
        ...getInternalLibsMappings(),
      },
    }),
    createDefinePluginConfig(),
  ],
};
