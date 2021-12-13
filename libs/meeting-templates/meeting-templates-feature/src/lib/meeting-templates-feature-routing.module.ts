import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MeetingTemplatesComponent } from './features/meeting-templates/meeting-templates.component';

export const meetingTemplatesFeatureRoutes: Route[] = [{ path: '', component: MeetingTemplatesComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(meetingTemplatesFeatureRoutes)],
})
export class MeetingTemplatesFeatureRoutingModule {}
