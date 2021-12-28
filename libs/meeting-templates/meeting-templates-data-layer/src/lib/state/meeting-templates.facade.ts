import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as MeetingTemplatesActions from './meeting-templates.actions';
import * as MeetingTemplatesSelectors from './meeting-templates.selectors';

@Injectable()
export class MeetingTemplatesFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(MeetingTemplatesSelectors.getMeetingTemplatesLoaded));
  allMeetingTemplates$ = this.store.pipe(select(MeetingTemplatesSelectors.getAllMeetingTemplates));
  selectedMeetingTemplates$ = this.store.pipe(select(MeetingTemplatesSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(MeetingTemplatesActions.init());
  }
}
