import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MeetingScheduledEffects } from './state/meeting-scheduled.effects';
import { MeetingScheduledFacade } from './state/meeting-scheduled.facade';
import * as fromMeetingScheduled from './state/meeting-scheduled.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMeetingScheduled.MEETING_SCHEDULED_FEATURE_KEY, fromMeetingScheduled.reducer),
    EffectsModule.forFeature([MeetingScheduledEffects]),
  ],
  providers: [MeetingScheduledFacade],
})
export class MeetingScheduledDataLayerModule {}
