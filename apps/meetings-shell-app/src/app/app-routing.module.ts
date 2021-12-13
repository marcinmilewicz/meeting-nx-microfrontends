import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicrofrontendlyNg } from '@microfrontendly/ng';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'meeting-templates',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    MicrofrontendlyNg.withDynamicConfiguration('./assets/microapp-config.json', routes),
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
