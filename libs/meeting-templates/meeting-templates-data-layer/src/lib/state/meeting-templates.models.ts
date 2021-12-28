import { WithId } from '@meetings-nx-microfrontends/shared/core';

export interface MeetingTemplateBase {
  name: string;
  description: string;
  imageUrl: string;
}

export type MeetingTemplate = WithId<MeetingTemplateBase, string>;
