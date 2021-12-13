/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MeetingsDataLayerModule } from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { environment } from '../../../meeting-templates-app/src/environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./remote-entry/meeting-scheduled-app.module').then(
            ({ MeetingScheduledAppModule }) => MeetingScheduledAppModule
          ),
      },
    ]),
    MeetingsDataLayerModule.forRoot({
      firebaseConfig: environment.firebaseConfig,
      scheduledCollection: 'scheduled',
      templatesCollection: 'templates',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
