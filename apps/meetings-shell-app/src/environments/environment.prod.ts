import { MeetingsAppConfiguration } from '@meetings-nx-microfrontends/shared/core';

export const environment: MeetingsAppConfiguration = {
  production: true,
  firebaseConfig: {
    apiKey: process.env.FIRESTORE_API_KEY,
    authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
    projectId: process.env.FIRESTORE_PROJECT_ID,
    storageBucket: process.env.FIRESTORE_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.FIRESTORE_APP_ID,
  }
};
