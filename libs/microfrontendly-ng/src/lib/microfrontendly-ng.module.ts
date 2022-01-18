import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentHostComponent } from './components/component-host.component';
import { RoutesFactory } from './model/microfrontendly-ng.model';
import {
  MICRO_APPS_CONFIGURATION_URL,
  MicrofrontendlyNgDynamicService,
} from './services/microfrontendly-ng-dynamic.service';
import { BASE_ROUTES, MICROFRONTENDLY_SERVICE, MicrofrontendlyNgService } from './services/microfrontendly-ng.service';

export function initializeMicrofrontends(
  microfrontendlyNgService: MicrofrontendlyNgService
): () => Promise<void> | void {
  return () => microfrontendlyNgService.initialize();
}

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule.forRoot([])],
  declarations: [ComponentHostComponent],
  exports: [ComponentHostComponent, RouterModule],
})
export class MicrofrontendlyRouter {
  private static createMicrofrontendlyProviders(
    service: Type<MicrofrontendlyNgService>,
    routesFactory: RoutesFactory
  ): Provider[] {
    return [
      { provide: MICROFRONTENDLY_SERVICE, useClass: service },
      {
        provide: BASE_ROUTES,
        useValue: routesFactory,
      },
      {
        provide: APP_INITIALIZER,
        useFactory: initializeMicrofrontends,
        multi: true,
        deps: [MICROFRONTENDLY_SERVICE],
      },
    ];
  }

  static withDynamicConfiguration(
    microAppsConfigurationUrl: string,
    routesFactory: RoutesFactory = () => []
  ): ModuleWithProviders<MicrofrontendlyRouter> {
    return {
      ngModule: MicrofrontendlyRouter,
      providers: [
        ...this.createMicrofrontendlyProviders(MicrofrontendlyNgDynamicService, routesFactory),
        {
          provide: MICRO_APPS_CONFIGURATION_URL,
          useValue: microAppsConfigurationUrl,
        },
      ],
    };
  }
}
