import { FirebaseOptions } from '@firebase/app';

export interface MeetingsAppConfiguration {
  production?: boolean;
  firebaseConfig: FirebaseOptions;
}
