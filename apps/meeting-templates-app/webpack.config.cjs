const { ModuleFederationPlugin } = require('webpack').container;
const { createDefinePluginConfig } = require('../../tools/build/webpack-tools');

module.exports = {
  output: {
    uniqueName: 'meetingTemplatesApp',
    publicPath: 'http://localhost:5001/',
    devtoolNamespace: 'meetingTemplatesApp',
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
      library: { type: 'var', name: 'meetingTemplatesApp' },
      name: 'meetingTemplatesApp',
      filename: 'meetingTemplatesApp.js',
      exposes: {
        MeetingTemplatesAppModule: 'apps/meeting-templates-app/src/app/remote-entry/meeting-templates-app.module.ts',
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
