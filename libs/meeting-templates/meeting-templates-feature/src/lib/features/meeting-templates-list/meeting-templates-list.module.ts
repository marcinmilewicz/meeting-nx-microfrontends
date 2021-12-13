import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialSharedModule } from '@meetings-nx-microfrontends/shared/ui';
import { MeetingTemplateCardComponent } from './meeting-template-card/meeting-template-card.component';
import { MeetingTemplateListComponent } from './meeting-template-list/meeting-template-list.component';

@NgModule({
  declarations: [MeetingTemplateListComponent, MeetingTemplateCardComponent],
  exports: [MeetingTemplateListComponent],
  imports: [CommonModule, MaterialSharedModule],
})
export class MeetingTemplatesListModule {}
