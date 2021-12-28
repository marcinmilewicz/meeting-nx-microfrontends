import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MeetingTemplatesEffects } from './state/meeting-templates.effects';
import { MeetingTemplatesFacade } from './state/meeting-templates.facade';
import * as fromMeetingTemplates from './state/meeting-templates.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromMeetingTemplates.MEETING_TEMPLATES_FEATURE_KEY, fromMeetingTemplates.reducer),
    EffectsModule.forFeature([MeetingTemplatesEffects]),
  ],
  providers: [MeetingTemplatesFacade],
})
export class MeetingTemplatesDataLayerModule {}
