import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { MeetingScheduledRepository } from '../meeting-scheduled.repository';

import * as MeetingScheduledActions from './meeting-scheduled.actions';
import * as MeetingScheduledFeature from './meeting-scheduled.reducer';

@Injectable()
export class MeetingScheduledEffects {
  init$ = createEffect(() =>
    this.dataPersistence.fetch(MeetingScheduledActions.init, {
      run: () =>
        this.meetingScheduledRepository
          .getAll()
          .pipe(map((meetingScheduled) => MeetingScheduledActions.loadMeetingScheduledSuccess({ meetingScheduled }))),
      onError: (action: ReturnType<typeof MeetingScheduledActions.init>, error) =>
        MeetingScheduledActions.loadMeetingScheduledFailure({ error }),
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly meetingScheduledRepository: MeetingScheduledRepository,
    private readonly dataPersistence: DataPersistence<MeetingScheduledFeature.MeetingScheduledPartialState>
  ) {}
}
