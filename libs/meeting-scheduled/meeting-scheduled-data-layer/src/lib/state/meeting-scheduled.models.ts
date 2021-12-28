import { MeetingTemplateBase } from '@meetings-nx-microfrontends/meeting-templates/meeting-templates-data-layer';
import { WithId } from '@meetings-nx-microfrontends/shared/core';

export type ScheduledMeeting = WithId<ScheduledMeetingBase, string>;

export interface ScheduledMeetingBase extends MeetingTemplateBase {
  startTime: string;
  endTime: string;
  participants: string[];
}
