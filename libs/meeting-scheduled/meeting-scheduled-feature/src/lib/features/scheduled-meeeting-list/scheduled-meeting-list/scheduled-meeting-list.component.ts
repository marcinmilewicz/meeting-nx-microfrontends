import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MeetingScheduledFacade,
  ScheduledMeeting,
} from '@meetings-nx-microfrontends/meeting-scheduled/meeting-scheduled-data-layer';
import { MeetingScheduledRepository } from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'ms-scheduled-meeting-list',
  templateUrl: './scheduled-meeting-list.component.html',
  styleUrls: ['./scheduled-meeting-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduledMeetingListComponent {
  readonly scheduledMeetings$: Observable<ScheduledMeeting[]> = this.meetingScheduledFacade.allMeetingScheduled$.pipe(
    map((scheduledMeetings: ScheduledMeeting[]) =>
      scheduledMeetings.sort(({ startTime: first }, { startTime: second }) => parseInt(second) - parseInt(first))
    )
  );
  constructor(
    private meetingScheduledRepository: MeetingScheduledRepository,
    private meetingScheduledFacade: MeetingScheduledFacade
  ) {
    this.meetingScheduledFacade.init();
  }

  removeScheduledMeeting(id: string) {
    this.meetingScheduledRepository.delete(id).subscribe();
  }
}
