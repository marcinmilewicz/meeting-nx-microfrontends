const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {
  createDefinePluginConfig,
  createExternalLibsMappings,
  createInternalLibsMappings,
} = require('../../tools/build/webpack-tools');

module.exports = {
  output: {
    uniqueName: 'meetingScheduledApp',
    publicPath: 'http://localhost:5002/',
  },
  optimization: {
    runtimeChunk: false,
    minimize: false,
  },
  plugins: [
    createDefinePluginConfig(),
    new ModuleFederationPlugin({
      name: 'meetingScheduledApp',
      filename: 'meetingScheduledApp.js',
      library: { type: 'var', name: 'meetingScheduledApp' },
      exposes: {
        './MeetingScheduledAppModule':
          'apps/meeting-scheduled-app/src/app/remote-entry/meeting-scheduled-app.module.ts',
      },
      shared: {
        ...createExternalLibsMappings(),
        ...createInternalLibsMappings([
          '@meetings-nx-microfrontends/shared/core',
          '@meetings-nx-microfrontends/shared/shared-data-layer',
          '@microfrontendly/ng',
        ]),
      },
    }),
  ],
};
