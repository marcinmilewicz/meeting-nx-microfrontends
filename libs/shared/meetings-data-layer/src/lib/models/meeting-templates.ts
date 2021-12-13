import { WithId } from '@meetings-nx-microfrontends/shared/core';

export type MeetingTemplate = WithId<MeetingTemplateBase, string>;
export type ScheduledMeeting = WithId<ScheduledMeetingBase, string>;

export interface MeetingTemplateBase {
  name: string;
  description: string;
  imageUrl: string;
}

export interface ScheduledMeetingBase extends MeetingTemplateBase {
  startTime: string;
  endTime: string;
  participants: string[];
}
