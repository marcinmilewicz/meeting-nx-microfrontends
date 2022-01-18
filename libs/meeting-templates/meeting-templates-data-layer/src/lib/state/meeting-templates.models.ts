import { WithId } from '@meetings-nx-microfrontends/shared-shared-data-layer';

export interface MeetingTemplateBase {
  name: string;
  description: string;
  imageUrl: string;
}

export type MeetingTemplate = WithId<MeetingTemplateBase, string>;
