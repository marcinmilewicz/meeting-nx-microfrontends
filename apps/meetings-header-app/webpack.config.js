const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { createDefinePluginConfig } = require('../../tools/build/webpack-tools');

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
      library: { type: 'var', name: 'meetingsHeaderApp' },
      name: 'meetingsHeaderApp',
      filename: 'meetingsHeaderApp.js',
      exposes: {
        MeetingsHeaderComponent: 'apps/meetings-header-app/src/app/header/meetings-header.component.ts',
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/common/http': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
      },
    }),
  ],
};
