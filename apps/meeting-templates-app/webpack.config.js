const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const {
  createDefinePluginConfig,
  createExternalLibsMappings,
  createInternalLibsMappings,
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
      library: { type: 'var', name: 'meetingTemplatesApp' },
      filename: 'meetingTemplatesApp.js',
      exposes: {
        './MeetingTemplatesAppModule':
          './apps/meeting-templates-app/src/app/remote-entry/meeting-templates-app.module.ts',
      },
      shared: {
        ...createExternalLibsMappings(),
        ...createInternalLibsMappings([
          '@meetings-nx-microfrontends/shared/meetings-data-layer',
          '@meetings-nx-microfrontends/shared/core',
          '@meetings-nx-microfrontends/shared/ui',
          '@microfrontendly/ng',
        ]),
      },
    }),
  ],
};
