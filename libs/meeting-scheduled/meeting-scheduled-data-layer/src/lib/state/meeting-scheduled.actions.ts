import { createAction, props } from '@ngrx/store';
import { ScheduledMeeting } from './meeting-scheduled.models';

export const init = createAction('[MeetingScheduled Page] Init');

export const loadMeetingScheduledSuccess = createAction(
  '[MeetingScheduled/API] Load MeetingScheduled Success',
  props<{ meetingScheduled: ScheduledMeeting[] }>()
);

export const loadMeetingScheduledFailure = createAction(
  '[MeetingScheduled/API] Load MeetingScheduled Failure',
  props<{ error: any }>()
);
