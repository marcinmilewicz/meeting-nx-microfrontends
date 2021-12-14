import { ChangeDetectionStrategy, Component } from '@angular/core';
import { WithId } from '@meetings-nx-microfrontends/shared/core';
import { MeetingScheduledRepository, ScheduledMeeting } from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'ms-scheduled-meeting-list',
  templateUrl: './scheduled-meeting-list.component.html',
  styleUrls: ['./scheduled-meeting-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduledMeetingListComponent {
  readonly scheduledMeetings$: Observable<ScheduledMeeting[]> = this.meetingScheduledRepository
    .getAll()
    .pipe(
      map((scheduledMeetings: WithId<ScheduledMeeting, string>[]) =>
        scheduledMeetings.sort(({ startTime: first }, { startTime: second }) => parseInt(second) - parseInt(first))
      )
    );
  constructor(private meetingScheduledRepository: MeetingScheduledRepository) {}

  removeScheduledMeeting(id: string) {
    this.meetingScheduledRepository.delete(id).subscribe();
  }
}
