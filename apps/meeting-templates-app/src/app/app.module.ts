import { NgModule } from '@angular/core';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { createAuthorizedRedirection } from '@meetings-nx-microfrontends/authentication-authentication-core-layer';
import { AuthenticationFeatureModule } from '@meetings-nx-microfrontends/authentication/authentication-feature';
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
        ...canActivate(() => redirectUnauthorizedTo('auth/logout')),
        loadChildren: () =>
          import('./remote-entry/meeting-templates-app.module').then(
            ({ MeetingTemplatesAppModule }) => MeetingTemplatesAppModule
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
