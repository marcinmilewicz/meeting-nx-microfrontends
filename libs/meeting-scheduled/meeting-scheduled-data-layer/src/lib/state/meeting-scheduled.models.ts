import { MeetingTemplateBase } from '@meetings-nx-microfrontends/meeting-templates/meeting-templates-data-layer';
import { WithId } from '@meetings-nx-microfrontends/shared/shared-data-layer';

export type ScheduledMeeting = WithId<ScheduledMeetingBase, 'id'>;

export interface ScheduledMeetingBase extends MeetingTemplateBase {
  startTime: string;
  endTime: string;
  participants: string[];
}
