import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@meetings-nx-microfrontends/meeting-scheduled/meeting-scheduled-feature').then(
        ({ MeetingScheduledFeatureModule }) => MeetingScheduledFeatureModule
      ),
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MeetingScheduledAppRoutingModule {}
