import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MeetingScheduledRepository, ScheduledMeeting } from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-scheduled-meeting-list',
  templateUrl: './scheduled-meeting-list.component.html',
  styleUrls: ['./scheduled-meeting-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduledMeetingListComponent {
  readonly scheduledMeetings$: Observable<ScheduledMeeting[]> = this.meetingScheduledRepository.getAll();
  constructor(private meetingScheduledRepository: MeetingScheduledRepository) {}

  removeScheduledMeeting(id: string) {
    this.meetingScheduledRepository.delete(id).subscribe();
  }
}
