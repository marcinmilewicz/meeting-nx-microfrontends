import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ScheduledMeeting } from '@meetings-nx-microfrontends/meeting-scheduled/meeting-scheduled-data-layer';

@Component({
  selector: 'ms-scheduled-meeting-card',
  templateUrl: './scheduled-meeting-card.component.html',
  styleUrls: ['./scheduled-meeting-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduledMeetingCardComponent {
  @Input() scheduledMeeting!: ScheduledMeeting;
  @Output() removeScheduledMeeting: EventEmitter<string> = new EventEmitter<string>();
}
