import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MicrofrontendlyNg } from '@microfrontendly/ng';
import { initialRoutes, staticRoutes } from './routes';

@NgModule({
  imports: [
    MicrofrontendlyNg.withDynamicConfiguration('./assets/microapp-config.json', initialRoutes),
    RouterModule.forRoot(initialRoutes),
  ],
  exports: [RouterModule, MicrofrontendlyNg],
})
export class AppRoutingModule {}
