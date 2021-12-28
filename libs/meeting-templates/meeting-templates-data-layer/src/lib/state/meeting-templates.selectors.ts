import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MEETING_TEMPLATES_FEATURE_KEY, meetingTemplatesAdapter, State } from './meeting-templates.reducer';

// Lookup the 'MeetingTemplates' feature state managed by NgRx
export const getMeetingTemplatesState = createFeatureSelector<State>(MEETING_TEMPLATES_FEATURE_KEY);

const { selectAll, selectEntities } = meetingTemplatesAdapter.getSelectors();

export const getMeetingTemplatesLoaded = createSelector(getMeetingTemplatesState, (state: State) => state.loaded);

export const getMeetingTemplatesError = createSelector(getMeetingTemplatesState, (state: State) => state.error);

export const getAllMeetingTemplates = createSelector(getMeetingTemplatesState, (state: State) => selectAll(state));

export const getMeetingTemplatesEntities = createSelector(getMeetingTemplatesState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(getMeetingTemplatesState, (state: State) => state.selectedId);

export const getSelected = createSelector(getMeetingTemplatesEntities, getSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);
