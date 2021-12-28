import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as MeetingTemplatesActions from './meeting-templates.actions';
import { MeetingTemplate } from './meeting-templates.models';

export const MEETING_TEMPLATES_FEATURE_KEY = 'meetingTemplates';

export interface State extends EntityState<MeetingTemplate> {
  selectedId?: string | number; // which MeetingTemplates record has been selected
  loaded: boolean; // has the MeetingTemplates list been loaded
  error?: string | null; // last known error (if any)
}

export interface MeetingTemplatesPartialState {
  readonly [MEETING_TEMPLATES_FEATURE_KEY]: State;
}

export const meetingTemplatesAdapter: EntityAdapter<MeetingTemplate> = createEntityAdapter<MeetingTemplate>();

export const initialState: State = meetingTemplatesAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const meetingTemplatesReducer = createReducer(
  initialState,
  on(MeetingTemplatesActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(MeetingTemplatesActions.loadMeetingTemplatesSuccess, (state, { meetingTemplates }) =>
    meetingTemplatesAdapter.setAll(meetingTemplates, { ...state, loaded: true })
  ),
  on(MeetingTemplatesActions.loadMeetingTemplatesFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return meetingTemplatesReducer(state, action);
}
