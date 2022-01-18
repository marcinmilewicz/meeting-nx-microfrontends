import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FirebaseAppModule, initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AuthModule, getAuth, provideAuth } from '@angular/fire/auth';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MeetingsAppConfiguration } from '../app-config';

@NgModule({
  imports: [CommonModule, FirebaseAppModule, FirestoreModule, AuthModule],
})
export class FirebaseConnectorModule {
  static forRoot(environment: MeetingsAppConfiguration): ModuleWithProviders<FirebaseConnectorModule> {
    const { providers: firebaseProviders } = provideFirebaseApp(() => initializeApp(environment.firebaseConfig));
    const { providers: firestoreProviders } = provideFirestore(() => getFirestore());
    const { providers: firestoreAuth } = provideAuth(() => getAuth());

    return {
      ngModule: FirebaseConnectorModule,
      providers: [...(firebaseProviders || []), ...(firestoreProviders || []), ...(firestoreAuth || [])],
    };
  }
}
