import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@meetings-nx-microfrontends/meeting-templates/meeting-templates-feature').then(
        ({ MeetingTemplatesFeatureModule }) => MeetingTemplatesFeatureModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MeetingTemplatesAppRoutingModule {}
