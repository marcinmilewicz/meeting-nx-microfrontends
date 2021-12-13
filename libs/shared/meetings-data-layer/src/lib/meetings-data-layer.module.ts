import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MeetingsAppConfiguration } from './models/app-config';

export const MEETING_SCHEDULED_COLLECTION = new InjectionToken<string>('data-providers.collection.scheduled');
export const MEETING_TEMPLATES_COLLECTION = new InjectionToken<string>('data-providers.collection.templates');

@NgModule({
  imports: [CommonModule, AngularFireModule, AngularFirestoreModule],
})
export class MeetingsDataLayerModule {
  static forRoot({
    firebaseConfig,
    templatesCollection,
    scheduledCollection,
  }: MeetingsAppConfiguration): ModuleWithProviders<MeetingsDataLayerModule> {
    const firebaseProviders = AngularFireModule.initializeApp(firebaseConfig).providers;
    return {
      ngModule: MeetingsDataLayerModule,
      providers: [
        ...(firebaseProviders || []),
        { provide: MEETING_TEMPLATES_COLLECTION, useValue: templatesCollection },
        { provide: MEETING_SCHEDULED_COLLECTION, useValue: scheduledCollection },
      ],
    };
  }
}
