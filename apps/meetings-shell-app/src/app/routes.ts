import { Routes } from '@angular/router';
import { loadRemoteModule } from '@microfrontendly/ng';

export const initialRoutes: Routes = [
  {
    path: '',
    redirectTo: 'meeting-templates',
    pathMatch: 'full',
  },
];

export const staticRoutes = [
  {
    path: '',
    redirectTo: 'meeting-templates',
    pathMatch: 'full',
  },
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
];
