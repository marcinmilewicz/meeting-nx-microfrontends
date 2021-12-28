import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataPersistence } from '@nrwl/angular';

import { MeetingsAppConfiguration } from './models/app-config';

export const MEETING_SCHEDULED_COLLECTION = new InjectionToken<string>('data-providers.collection.scheduled');
export const MEETING_TEMPLATES_COLLECTION = new InjectionToken<string>('data-providers.collection.templates');

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFirestoreModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot(),
  ],
})
export class MeetingsDataLayerModule {
  static forRoot({
    firebaseConfig,
    templatesCollection,
    scheduledCollection,
    production,
  }: MeetingsAppConfiguration): ModuleWithProviders<MeetingsDataLayerModule> {
    const firebaseProviders: Provider[] | undefined = AngularFireModule.initializeApp(firebaseConfig).providers;
    const storeDevToolsProviders: Provider[] | undefined = !production
      ? StoreDevtoolsModule.instrument().providers
      : [];

    return {
      ngModule: MeetingsDataLayerModule,
      providers: [
        ...(storeDevToolsProviders || []),
        ...(firebaseProviders || []),
        { provide: MEETING_TEMPLATES_COLLECTION, useValue: templatesCollection },
        { provide: MEETING_SCHEDULED_COLLECTION, useValue: scheduledCollection },
        DataPersistence,
      ],
    };
  }
}
