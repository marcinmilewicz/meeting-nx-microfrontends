/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { createAuthorizedRedirection } from '@meetings-nx-microfrontends/authentication-authentication-core-layer';
import { PersistenceModule } from '@meetings-nx-microfrontends/shared/shared-data-layer';
import { CoreModule, FirebaseConnectorModule } from '@meetings-nx-microfrontends/shared/core';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    FirebaseConnectorModule.forRoot(environment),
    PersistenceModule.forRoot(environment.production),
    RouterModule.forRoot([
      {
        path: '',
        ...canActivate(() => redirectUnauthorizedTo(['login'])),
        loadChildren: () =>
          import('./remote-entry/meeting-scheduled-app.module').then(
            ({ MeetingScheduledAppModule }) => MeetingScheduledAppModule
          ),
      },
      {
        path: 'login',
        ...canActivate(createAuthorizedRedirection('')),
        loadChildren: () =>
          import('@meetings-nx-microfrontends/authentication/authentication-feature').then(
            ({ AuthenticationFeatureModule }) => AuthenticationFeatureModule
          ),
      },
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
