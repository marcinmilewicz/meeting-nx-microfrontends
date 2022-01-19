import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MeetingTemplatesDataLayerModule } from '@meetings-nx-microfrontends/meeting-templates/meeting-templates-data-layer';
import { MeetingTemplatesAppRoutingModule } from './meeting-templates-app-routing.module';

@NgModule({
  imports: [CommonModule, MeetingTemplatesAppRoutingModule, MeetingTemplatesDataLayerModule],
  providers: [],
})
export class MeetingTemplatesAppModule {}
