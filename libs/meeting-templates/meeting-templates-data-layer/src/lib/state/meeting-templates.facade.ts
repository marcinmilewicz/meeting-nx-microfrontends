import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as MeetingTemplatesActions from './meeting-templates.actions';
import * as MeetingTemplatesSelectors from './meeting-templates.selectors';

@Injectable()
export class MeetingTemplatesFacade {
  loaded$ = this.store.pipe(select(MeetingTemplatesSelectors.getMeetingTemplatesLoaded));
  allMeetingTemplates$ = this.store.pipe(select(MeetingTemplatesSelectors.getAllMeetingTemplates));
  selectedMeetingTemplates$ = this.store.pipe(select(MeetingTemplatesSelectors.getSelected));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(MeetingTemplatesActions.init());
  }
}
