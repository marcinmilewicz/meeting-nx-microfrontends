const webpack = require('webpack');

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

module.exports = { createDefinePluginConfig };
