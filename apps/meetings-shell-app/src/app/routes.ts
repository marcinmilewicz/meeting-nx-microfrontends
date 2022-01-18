import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { Route, Routes } from '@angular/router';
import { createAuthorizedRedirection } from '@meetings-nx-microfrontends/authentication/authentication-data-layer';
import { loadRemoteModule, RoutesFactory } from '@microfrontendly/ng';
import { AppComponent } from './app.component';

export const initialRoute: Route = {
  path: '',
  redirectTo: 'meeting-templates',
  pathMatch: 'full',
};

export const staticRoutes = [
  {
    path: '',
    ...canActivate(() => redirectUnauthorizedTo(['auth/login'])),
    component: AppComponent,
    children: [
      initialRoute,
      {
        path: 'meeting-templates',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'meetingTemplatesApp',
            remoteEntry: 'http://localhost:5001/meetingTemplatesApp.js',
            exposedModule: './MeetingTemplatesAppModule',
          }).then((a) => a.MeetingTemplatesAppModule),
      },
      {
        path: 'meeting-scheduled',
        loadChildren: () =>
          loadRemoteModule({
            remoteName: 'meetingScheduledApp',
            remoteEntry: 'http://localhost:5002/meetingScheduledApp.js',
            exposedModule: './MeetingScheduledAppModule',
          }).then((a) => a.MeetingScheduledAppModule),
      },
    ],
  },
  {
    path: 'auth',
    ...canActivate(createAuthorizedRedirection('')),
    loadChildren: () =>
      import('@meetings-nx-microfrontends/authentication/authentication-feature').then(
        ({ AuthenticationFeatureModule }) => AuthenticationFeatureModule
      ),
  },
];

export const routesFactory: RoutesFactory = (dynamicRoutes: Routes) => [
  {
    path: '',
    ...canActivate(() => redirectUnauthorizedTo('auth/login')),
    component: AppComponent,
    children: [initialRoute, ...dynamicRoutes],
  },
  {
    path: 'auth',
    ...canActivate(createAuthorizedRedirection('')),
    loadChildren: () =>
      import('@meetings-nx-microfrontends/authentication/authentication-feature').then(
        ({ AuthenticationFeatureModule }) => AuthenticationFeatureModule
      ),
  },
];
