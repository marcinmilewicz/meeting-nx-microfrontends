import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@meetings-nx-microfrontends/shared/ui';
import { MicrofrontendlyRouter } from '@microfrontendly/ng';
import { AppComponent } from './app.component';
import { routesFactory } from './routes';

const MICRO_APPS_CONFIG_URL: string = './assets/microapp-config.json';

@NgModule({
  declarations: [AppComponent],
  imports: [MicrofrontendlyRouter.withDynamicConfiguration(MICRO_APPS_CONFIG_URL, routesFactory), UiModule],
  exports: [RouterModule, MicrofrontendlyRouter],
})
export class AppRoutingModule {}
