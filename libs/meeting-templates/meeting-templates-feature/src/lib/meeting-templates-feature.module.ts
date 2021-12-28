import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingScheduledDataLayerModule } from '@meetings-nx-microfrontends/meeting-scheduled/meeting-scheduled-data-layer';
import { MeetingTemplatesDataLayerModule } from '@meetings-nx-microfrontends/meeting-templates/meeting-templates-data-layer';
import { MeetingTemplatesListModule } from './features/meeting-templates-list/meeting-templates-list.module';
import { MeetingTemplatesComponent } from './features/meeting-templates/meeting-templates.component';
import { MeetingTemplatesFeatureRoutingModule } from './meeting-templates-feature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MeetingTemplatesListModule,
    MeetingTemplatesFeatureRoutingModule,
    MeetingTemplatesDataLayerModule,
    MeetingScheduledDataLayerModule,
  ],
  declarations: [MeetingTemplatesComponent],
})
export class MeetingTemplatesFeatureModule {}
