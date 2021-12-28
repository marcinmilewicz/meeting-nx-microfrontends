import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as MeetingScheduledActions from './meeting-scheduled.actions';
import { ScheduledMeeting } from './meeting-scheduled.models';

export const MEETING_SCHEDULED_FEATURE_KEY = 'meetingScheduled';

export interface State extends EntityState<ScheduledMeeting> {
  selectedId?: string | number; // which MeetingScheduled record has been selected
  loaded: boolean; // has the MeetingScheduled list been loaded
  error?: string | null; // last known error (if any)
}

export interface MeetingScheduledPartialState {
  readonly [MEETING_SCHEDULED_FEATURE_KEY]: State;
}

export const meetingScheduledAdapter: EntityAdapter<ScheduledMeeting> = createEntityAdapter<ScheduledMeeting>();

export const initialState: State = meetingScheduledAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const meetingScheduledReducer = createReducer(
  initialState,
  on(MeetingScheduledActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(MeetingScheduledActions.loadMeetingScheduledSuccess, (state, { meetingScheduled }) =>
    meetingScheduledAdapter.setAll(meetingScheduled, { ...state, loaded: true })
  ),
  on(MeetingScheduledActions.loadMeetingScheduledFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return meetingScheduledReducer(state, action);
}
