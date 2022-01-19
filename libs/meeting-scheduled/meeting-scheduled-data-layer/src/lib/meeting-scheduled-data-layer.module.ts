import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
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
export class MeetingScheduledDataLayerModule {
  constructor(@Optional() @SkipSelf() parentModule?: MeetingScheduledDataLayerModule) {
    if (parentModule) {
      throw new Error('MeetingScheduledDataLayerModule is already loaded. Import it in the AppModule only');
    }
  }
}
