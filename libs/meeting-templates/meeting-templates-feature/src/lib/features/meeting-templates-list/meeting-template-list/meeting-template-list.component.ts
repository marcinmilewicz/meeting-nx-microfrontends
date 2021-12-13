import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MeetingScheduledRepository,
  MeetingTemplate,
  MeetingTemplatesRepository,
  ScheduledMeetingBase,
} from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { Observable } from 'rxjs';

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
    private meetingScheduledRepository: MeetingScheduledRepository
  ) {
    this.meetingScheduledRepository.getAll().subscribe((data) => console.log('all sched ', data));
  }

  scheduleMeeting({ id, ...template }: MeetingTemplate) {
    const scheduledMeeting: ScheduledMeetingBase = {
      ...template,
      participants: [],
      startTime: Date.now().toString(),
      endTime: Date.now().toString(),
    };

    this.meetingScheduledRepository.create(scheduledMeeting).subscribe((data) => console.log('datasched ', data));
  }
}
