const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');
const { createDefinePluginConfig } = require('../../tools/build/webpack-tools');
const share = mf.share;
/**
 * We use the NX_TSCONFIG_PATH environment variable when using the @nrwl/angular:webpack-browser
 * builder as it will generate a temporary tsconfig file which contains any required remappings of
 * shared libraries.
 * A remapping will occur when a library is buildable, as webpack needs to know the location of the
 * built files for the buildable library.
 * This NX_TSCONFIG_PATH environment variable is set by the @nrwl/angular:webpack-browser and it contains
 * the location of the generated temporary tsconfig file.
 */
const tsConfigPath = process.env.NX_TSCONFIG_PATH ?? path.join(__dirname, '../../tsconfig.base.json');

const workspaceRootPath = path.join(__dirname, '../../');
const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  tsConfigPath,
  [
    /* mapped paths to share */
  ],
  workspaceRootPath
);

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
      shared: share({
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
        ...sharedMappings.getDescriptors(),
      }),
    }),
  ],
};
