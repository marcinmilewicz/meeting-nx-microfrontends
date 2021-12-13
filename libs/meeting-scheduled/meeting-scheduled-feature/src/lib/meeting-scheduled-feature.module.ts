import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingScheduledComponent } from './features/meeting-scheduled/meeting-scheduled.component';
import { ScheduledMeetingListModule } from './features/scheduled-meeeting-list/scheduled-meeting-list.module';
import { MeetingScheduledFeatureRoutingModule } from './meeting-scheduled-feature-routing.module';

@NgModule({
  imports: [CommonModule, MeetingScheduledFeatureRoutingModule, ScheduledMeetingListModule],
  declarations: [MeetingScheduledComponent],
  exports: [MeetingScheduledComponent],
})
export class MeetingScheduledFeatureModule {}
