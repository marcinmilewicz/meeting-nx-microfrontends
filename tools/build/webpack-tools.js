const webpack = require('webpack');
const deps = require('./../../package.json').dependencies;

const createInternalLibsMappings = (included = []) => {
  const internalMappings = {
    '@meetings-nx-microfrontends/shared/meetings-data-layer': {
      singleton: true,
      import: 'libs/shared/meetings-data-layer/src/index',
    },
    '@meetings-nx-microfrontends/shared/core': {
      singleton: true,
      import: 'libs/shared/core/src/index.ts',
    },
    '@meetings-nx-microfrontends/shared/ui': { singleton: true, import: 'libs/shared/ui/src/index.ts' },
    '@microfrontendly/ng': {
      singleton: true,
      import: 'libs/microfrontendly-ng/src/index',
      strictVersion: true,
      requiredVersion: '0.0.1',
    },
  };

  return included.reduce((mappings, key) => ({ ...mappings, [key]: internalMappings[key] }), {});
};

const createExternalLibsMappings = () =>
  decorateWithVersion(
    {
      '@angular/animations': { singleton: true },
      '@angular/cdk': { singleton: true },
      '@angular/cdk/coercion': { singleton: true },
      '@angular/common': { singleton: true },
      '@angular/common/http': { singleton: true },
      '@angular/core': { singleton: true },
      '@angular/platform-browser': { singleton: true },
      '@angular/fire': { singleton: true },
      '@angular/flex-layout': { singleton: true },
      '@angular/forms': { singleton: true },
      '@angular/material': { singleton: true },
      '@angular/router': { singleton: true },
      rxjs: { singleton: true, strictVersion: true },
      'rxjs/operators': { singleton: true, strictVersion: true },
      'rxjs/internal/operators': { singleton: true, strictVersion: true },
      '@angular/flex-layout/core': { singleton: true, strictVersion: true },
      '@angular/flex-layout/extended': { singleton: true, strictVersion: true },
      '@angular/flex-layout/flex': { singleton: true, strictVersion: true },
      '@angular/flex-layout/grid': { singleton: true, strictVersion: true },
      tslib: { singleton: true, strictVersion: true },
      '@ngrx/store': { singleton: true, strictVersion: true },
      '@ngrx/effects': { singleton: true, strictVersion: true },
      '@nrwl/angular': { singleton: true, strictVersion: true },
    },
    deps
  );

const decorateWithVersion = (mappings, deps) =>
  Object.keys(mappings).reduce((decorated, key) => {
    decorated[key] = mappings[key].strictVersion ? { ...mappings[key], requiredVersion: deps[key] } : mappings[key];
    decorated[key] = { ...decorated[key] };
    return decorated;
  }, {});

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

module.exports = {
  createDefinePluginConfig,
  createExternalLibsMappings,
  createInternalLibsMappings,
};

// '@angular/fire/compat/firestore': { singleton: true, strictVersion: true },
// '@angular/material/button': { singleton: true, strictVersion: true },
// '@angular/material/card': { singleton: true, strictVersion: true },
// '@angular/material/icon': { singleton: true, strictVersion: true },
// '@angular/material/toolbar': { singleton: true, strictVersion: true },
