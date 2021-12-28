import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMeetingScheduled from './state/meeting-scheduled.reducer';
import { MeetingScheduledEffects } from './state/meeting-scheduled.effects';
import { MeetingScheduledFacade } from './state/meeting-scheduled.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMeetingScheduled.MEETING_SCHEDULED_FEATURE_KEY, fromMeetingScheduled.reducer),
    EffectsModule.forFeature([MeetingScheduledEffects]),
  ],
  providers: [MeetingScheduledFacade],
})
export class MeetingScheduledDataLayerModule {}
