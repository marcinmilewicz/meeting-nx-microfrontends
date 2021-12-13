import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MeetingScheduledComponent } from './features/meeting-scheduled/meeting-scheduled.component';

export const meetingScheduledFeatureRoutes: Route[] = [{ path: '', component: MeetingScheduledComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(meetingScheduledFeatureRoutes)],
})
export class MeetingScheduledFeatureRoutingModule {}
