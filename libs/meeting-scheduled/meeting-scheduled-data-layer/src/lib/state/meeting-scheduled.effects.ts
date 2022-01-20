import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map, mergeMap, tap } from 'rxjs/operators';
import { MeetingScheduledRepository } from '../meeting-scheduled.repository';
import * as MeetingScheduledActions from './meeting-scheduled.actions';
import { ScheduledMeetingBase } from './meeting-scheduled.models';
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

  scheduleMeeting$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MeetingScheduledActions.scheduleMeeting),
      mergeMap(({ meeting }: { meeting: ScheduledMeetingBase }) =>
        this.meetingScheduledRepository
          .create(meeting)
          .pipe(map(() => MeetingScheduledActions.scheduleMeetingSuccess()))
      )
    )
  );

  scheduleMeetingSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MeetingScheduledActions.loadMeetingScheduledSuccess),
        tap(() => this.router.navigate(['meeting-scheduled']))
      ),
    { dispatch: false }
  );

  constructor(
    private readonly router: Router,
    private readonly actions$: Actions,
    private readonly meetingScheduledRepository: MeetingScheduledRepository,
    private readonly dataPersistence: DataPersistence<MeetingScheduledFeature.MeetingScheduledPartialState>
  ) {}
}
