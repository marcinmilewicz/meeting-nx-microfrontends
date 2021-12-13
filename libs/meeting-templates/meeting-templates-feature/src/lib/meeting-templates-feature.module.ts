import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingTemplatesListModule } from './features/meeting-templates-list/meeting-templates-list.module';
import { MeetingTemplatesComponent } from './features/meeting-templates/meeting-templates.component';
import { MeetingTemplatesFeatureRoutingModule } from './meeting-templates-feature-routing.module';

@NgModule({
  imports: [CommonModule, MeetingTemplatesListModule, MeetingTemplatesFeatureRoutingModule],
  declarations: [MeetingTemplatesComponent],
})
export class MeetingTemplatesFeatureModule {}
