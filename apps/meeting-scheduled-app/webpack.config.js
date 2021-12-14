const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {
  createDefinePluginConfig,
  getAngularMappings,
  getInternalLibsMappings,
} = require('../../tools/build/webpack-tools');

module.exports = {
  output: {
    uniqueName: 'meetingScheduledApp',
    publicPath: 'http://localhost:5002/',
    devtoolNamespace: 'meetingScheduledApp',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  plugins: [
    createDefinePluginConfig(),
    new ModuleFederationPlugin({
      library: { type: 'var', name: 'meetingScheduledApp' },
      name: 'meetingScheduledApp',
      filename: 'meetingScheduledApp.js',
      exposes: {
        './MeetingScheduledAppModule':
          'apps/meeting-scheduled-app/src/app/remote-entry/meeting-scheduled-app.module.ts',
      },
      shared: {
        ...getAngularMappings(),
        ...getInternalLibsMappings(),
      },
    }),
  ],
};
