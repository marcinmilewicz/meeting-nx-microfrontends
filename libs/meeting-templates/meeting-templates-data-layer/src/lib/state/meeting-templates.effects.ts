import { Injectable } from '@angular/core';

import { Actions, createEffect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import { MeetingTemplatesRepository } from '../meeting-templates.repository';

import * as MeetingTemplatesActions from './meeting-templates.actions';
import * as MeetingTemplatesFeature from './meeting-templates.reducer';

@Injectable()
export class MeetingTemplatesEffects {
  init$ = createEffect(() =>
    this.dataPersistence.fetch(MeetingTemplatesActions.init, {
      run: () =>
        this.meetingTemplatesRepository
          .getAll()
          .pipe(map((meetingTemplates) => MeetingTemplatesActions.loadMeetingTemplatesSuccess({ meetingTemplates }))),
      onError: (action: ReturnType<typeof MeetingTemplatesActions.init>, error) =>
        MeetingTemplatesActions.loadMeetingTemplatesFailure({ error }),
    })
  );

  constructor(
    private readonly actions$: Actions,
    private readonly meetingTemplatesRepository: MeetingTemplatesRepository,
    private readonly dataPersistence: DataPersistence<MeetingTemplatesFeature.MeetingTemplatesPartialState>
  ) {}
}
