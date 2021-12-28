import { WithId } from '@meetings-nx-microfrontends/shared/core';
import { MeetingTemplateBase } from '@meetings-nx-microfrontends/shared/meetings-data-layer';

export type ScheduledMeeting = WithId<ScheduledMeetingBase, string>;

export interface ScheduledMeetingBase extends MeetingTemplateBase {
  startTime: string;
  endTime: string;
  participants: string[];
}
