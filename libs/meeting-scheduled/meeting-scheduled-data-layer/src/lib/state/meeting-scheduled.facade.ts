import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as MeetingScheduledActions from './meeting-scheduled.actions';
import * as MeetingScheduledSelectors from './meeting-scheduled.selectors';

@Injectable()
export class MeetingScheduledFacade {
  loaded$ = this.store.pipe(select(MeetingScheduledSelectors.getMeetingScheduledLoaded));
  allMeetingScheduled$ = this.store.pipe(select(MeetingScheduledSelectors.getAllMeetingScheduled));
  selectedMeetingScheduled$ = this.store.pipe(select(MeetingScheduledSelectors.getSelected));

  constructor(private readonly store: Store) {}

  init() {
    this.store.dispatch(MeetingScheduledActions.init());
  }
}
