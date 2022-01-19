import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingScheduledDataLayerModule } from '@meetings-nx-microfrontends/meeting-scheduled/meeting-scheduled-data-layer';
import { MeetingScheduledAppRoutingModule } from './meeting-scheduled-app-routing.module';

@NgModule({
  imports: [CommonModule, MeetingScheduledAppRoutingModule, MeetingScheduledDataLayerModule],
  providers: [],
})
export class MeetingScheduledAppModule {}
