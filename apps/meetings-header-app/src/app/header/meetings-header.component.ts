import { Component, Input } from '@angular/core';
import { AngularRoute } from '@microfrontendly/ng';

@Component({
  selector: 'meetings-nx-microfrontends-meetings-header',
  templateUrl: './meetings-header.component.html',
  styleUrls: ['./meetings-header.component.scss'],
})
export class MeetingsHeaderComponent {
  @Input() routes: AngularRoute[] = [
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
