import { createAction, props } from '@ngrx/store';
import { ScheduledMeeting, ScheduledMeetingBase } from './meeting-scheduled.models';

export const init = createAction('[MeetingScheduled Page] Init');
export const loadMeetingScheduledSuccess = createAction(
  '[MeetingScheduled/API] Load MeetingScheduled Success',
  props<{ meetingScheduled: ScheduledMeeting[] }>()
);
export const loadMeetingScheduledFailure = createAction(
  '[MeetingScheduled/API] Load MeetingScheduled Failure',
  props<{ error: any }>()
);

export const scheduleMeeting = createAction(
  '[MeetingScheduled/API Schedule Meeting',
  props<{ meeting: ScheduledMeetingBase }>()
);
export const scheduleMeetingSuccess = createAction('[MeetingScheduled/API Schedule Meeting Success');
export const scheduleMeetingFailure = createAction(
  '[MeetingScheduled/API Schedule Meeting Failure',
  props<{ error: any }>()
);
