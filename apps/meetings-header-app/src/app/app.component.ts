import { Component } from '@angular/core';

@Component({
  selector: 'meetings-nx-microfrontends-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'meetings-header-app';
  routes = [
    {
      displayName: 'Meeting Templates',
      routePath: 'meeting-templates',
    },
    {
      displayName: 'Scheduled Meetings',
      routePath: 'meeting-scheduled',
    },
  ];
}
