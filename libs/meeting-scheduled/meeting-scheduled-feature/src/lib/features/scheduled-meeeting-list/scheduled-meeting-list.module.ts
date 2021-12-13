import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialSharedModule } from '@meetings-nx-microfrontends/shared/ui';
import { ScheduledMeetingCardComponent } from './scheduled-meeting-card/scheduled-meeting-card.component';
import { ScheduledMeetingListComponent } from './scheduled-meeting-list/scheduled-meeting-list.component';

@NgModule({
  declarations: [ScheduledMeetingListComponent, ScheduledMeetingCardComponent],
  exports: [ScheduledMeetingListComponent],
  imports: [CommonModule, MaterialSharedModule],
})
export class ScheduledMeetingListModule {}
