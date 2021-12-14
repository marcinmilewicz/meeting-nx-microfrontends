import { Component, Input } from '@angular/core';
import { AngularRoute } from '@microfrontendly/ng';

// Example for Micro Frontend pitfall
@Component({
  selector: 'meetings-nx-microfrontends-meetings-header',
  templateUrl: './meetings-header.component.html',
  styleUrls: ['./meetings-header.component.scss'],
})
export class MeetingsHeaderComponent {
  @Input() set routes(value: AngularRoute[]) {
    this.currentRoutes = value;
  }

  currentRoutes: AngularRoute[] = [
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
