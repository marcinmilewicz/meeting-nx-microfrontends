const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {
  createDefinePluginConfig,
  createExternalLibsMappings,
  createInternalLibsMappings,
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
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module' },
      remotes: {
        meetingsHeaderApp: 'meetingsHeaderApp@http://localhost:5100/meetingsHeaderApp.js',
        meetingTemplatesApp: 'meetingTemplatesApp@http://localhost:5001/meetingTemplatesApp.js',
        meetingScheduledApp: 'meetingScheduledApp@http://localhost:5002/meetingScheduledApp.js',
      },
      shared: {
        ...createExternalLibsMappings(),
        ...createInternalLibsMappings([
          '@meetings-nx-microfrontends/shared/core',
          '@meetings-nx-microfrontends/shared/ui',
          '@meetings-nx-microfrontends/shared/shared-data-layer',
          '@microfrontendly/ng',
        ]),
      },
    }),
    createDefinePluginConfig(),
  ],
};
