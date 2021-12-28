import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MEETING_SCHEDULED_FEATURE_KEY, meetingScheduledAdapter, State } from './meeting-scheduled.reducer';

export const getMeetingScheduledState = createFeatureSelector<State>(MEETING_SCHEDULED_FEATURE_KEY);

const { selectAll, selectEntities } = meetingScheduledAdapter.getSelectors();

export const getMeetingScheduledLoaded = createSelector(getMeetingScheduledState, (state: State) => state.loaded);

export const getMeetingScheduledError = createSelector(getMeetingScheduledState, (state: State) => state.error);

export const getAllMeetingScheduled = createSelector(getMeetingScheduledState, (state: State) => selectAll(state));

export const getMeetingScheduledEntities = createSelector(getMeetingScheduledState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(getMeetingScheduledState, (state: State) => state.selectedId);

export const getSelected = createSelector(getMeetingScheduledEntities, getSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);
