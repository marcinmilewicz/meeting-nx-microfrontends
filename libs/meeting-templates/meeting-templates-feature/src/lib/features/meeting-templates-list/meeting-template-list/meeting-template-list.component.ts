import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  MeetingScheduledFacade,
  ScheduledMeetingBase,
} from '@meetings-nx-microfrontends/meeting-scheduled/meeting-scheduled-data-layer';
import {
  MeetingTemplate,
  MeetingTemplatesFacade,
} from '@meetings-nx-microfrontends/meeting-templates/meeting-templates-data-layer';
import { MeetingScheduledRepository } from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { from, Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'mt-meeting-template-list',
  templateUrl: './meeting-template-list.component.html',
  styleUrls: ['./meeting-template-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetingTemplateListComponent {
  readonly templates$: Observable<MeetingTemplate[]> = this.meetingTemplatesFacade.allMeetingTemplates$;

  constructor(
    private meetingTemplatesFacade: MeetingTemplatesFacade,
    private meetingTSc: MeetingScheduledFacade,
    private meetingScheduledRepository: MeetingScheduledRepository,
    private router: Router
  ) {
    this.meetingTemplatesFacade.init();
  }

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
