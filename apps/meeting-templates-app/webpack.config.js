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
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  plugins: [
    createDefinePluginConfig(),
    new ModuleFederationPlugin({
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
