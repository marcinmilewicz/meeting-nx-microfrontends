const webpack = require('webpack');

const getInternalLibsMappings = () => ({
  '@meetings-nx-microfrontends/shared/meetings-data-layer': {
    singleton: true,
    import: 'libs/shared/meetings-data-layer/src/index',
  },
  '@meetings-nx-microfrontends/shared/core': {
    singleton: true,
    import: 'libs/shared/core/src/index.ts',
  },
});

const getAngularMappings = () => ({
  '@angular/animations': { singleton: true, strictVersion: true },
  '@angular/cdk': { singleton: true, strictVersion: true },
  '@angular/common': { singleton: true, strictVersion: true },
  '@angular/common/http': { singleton: true, strictVersion: true },
  '@angular/core': { singleton: true, strictVersion: true },
  '@angular/fire': { singleton: true, strictVersion: true },
  '@angular/flex-layout': { singleton: true, strictVersion: true },
  '@angular/forms': { singleton: true, strictVersion: true },
  '@angular/material': { singleton: true, strictVersion: true },
  '@angular/router': { singleton: true, strictVersion: true },
  '@angular/fire/compat/firestore': { singleton: true, strictVersion: true },
  '@angular/material/button': { singleton: true, strictVersion: true },
  '@angular/material/card': { singleton: true, strictVersion: true },
  '@angular/material/icon': { singleton: true, strictVersion: true },
  '@angular/material/toolbar': { singleton: true, strictVersion: true },
  rxjs: { singleton: true, strictVersion: true },
});

const createDefinePluginConfig = () =>
  new webpack.DefinePlugin({
    'process.env': {
      FIRESTORE_API_KEY: JSON.stringify(process.env.FIRESTORE_API_KEY),
      FIRESTORE_AUTH_DOMAIN: JSON.stringify(process.env.FIRESTORE_AUTH_DOMAIN),
      FIRESTORE_PROJECT_ID: JSON.stringify(process.env.FIRESTORE_PROJECT_ID),
      FIRESTORE_STORAGE_BUCKET: JSON.stringify(process.env.FIRESTORE_STORAGE_BUCKET),
      MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
      FIRESTORE_APP_ID: JSON.stringify(process.env.FIRESTORE_APP_ID),
    },
  });

module.exports = { createDefinePluginConfig, getAngularMappings, getInternalLibsMappings };
