import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  MeetingScheduledRepository,
  MeetingTemplate,
  MeetingTemplatesRepository,
  ScheduledMeetingBase,
} from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { from, Observable, switchMap, take } from 'rxjs';

@Component({
  selector: 'mt-meeting-template-list',
  templateUrl: './meeting-template-list.component.html',
  styleUrls: ['./meeting-template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingTemplateListComponent {
  readonly templates$: Observable<MeetingTemplate[]> = this.meetingTemplatesRepository.getAll();

  constructor(
    private meetingTemplatesRepository: MeetingTemplatesRepository,
    private meetingScheduledRepository: MeetingScheduledRepository,
    private router: Router
  ) {}

  scheduleMeeting({ id, ...template }: MeetingTemplate) {
    const scheduledMeeting: ScheduledMeetingBase = {
      ...template,
      participants: [],
      startTime: Date.now().toString(),
      endTime: Date.now().toString(),
    };

    this.meetingScheduledRepository
      .create(scheduledMeeting)
      .pipe(
        take(1),
        switchMap(() => from(this.router.navigate(['meeting-scheduled'])))
      )
      .subscribe();
  }
}
