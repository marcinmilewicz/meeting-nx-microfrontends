const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { createDefinePluginConfig } = require('../../tools/build/webpack-tools');

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
        MeetingScheduledAppModule: 'apps/meeting-scheduled-app/src/app/remote-entry/meeting-scheduled-app.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/common/http': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
        '@meetings-nx-microfrontends/shared/meetings-data-layer': {
          singleton: true,
          import: 'libs/shared/meetings-data-layer/src/index',
        },
        '@meetings-nx-microfrontends/shared/core': {
          singleton: true,
          import: 'libs/shared/core/src/index.ts',
        },
      },
    }),
  ],
};
