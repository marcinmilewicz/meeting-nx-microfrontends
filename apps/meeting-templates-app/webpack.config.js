const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {
  createDefinePluginConfig,
  getAngularMappings,
  getInternalLibsMappings,
} = require('../../tools/build/webpack-tools');

module.exports = {
  output: {
    uniqueName: 'meetingTemplatesApp',
    publicPath: 'http://localhost:5001/',
  },
  devServer: {
    liveReload: true,
    hot: true,
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  plugins: [
    createDefinePluginConfig(),
    new ModuleFederationPlugin({
      // library: { type: 'var', name: 'meetingTemplatesApp' },
      name: 'meetingTemplatesApp',
      filename: 'meetingTemplatesApp.js',
      exposes: {
        './MeetingTemplatesAppModule':
          './apps/meeting-templates-app/src/app/remote-entry/meeting-templates-app.module.ts',
      },
      shared: {
        ...getAngularMappings(),
        ...getInternalLibsMappings(),
      },
    }),
  ],
};
