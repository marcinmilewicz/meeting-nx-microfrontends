import { createAction, props } from '@ngrx/store';
import { MeetingTemplate } from './meeting-templates.models';

export const init = createAction('[MeetingTemplates Page] Init');

export const loadMeetingTemplatesSuccess = createAction(
  '[MeetingTemplates/API] Load MeetingTemplates Success',
  props<{ meetingTemplates: MeetingTemplate[] }>()
);

export const loadMeetingTemplatesFailure = createAction(
  '[MeetingTemplates/API] Load MeetingTemplates Failure',
  props<{ error: any }>()
);
