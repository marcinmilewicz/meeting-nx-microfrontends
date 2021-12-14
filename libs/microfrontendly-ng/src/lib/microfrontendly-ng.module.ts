import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { Routes } from '@angular/router';

import { ComponentHostComponent } from './components/component-host.component';
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
  imports: [CommonModule, HttpClientModule],
  declarations: [ComponentHostComponent],
  exports: [ComponentHostComponent],
})
export class MicrofrontendlyNg {
  private static createMicrofrontendlyProviders(
    service: Type<MicrofrontendlyNgService>,
    baseRoutes: Routes
  ): Provider[] {
    return [
      { provide: MICROFRONTENDLY_SERVICE, useClass: service },
      {
        provide: BASE_ROUTES,
        useValue: baseRoutes,
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
    baseRoutes: Routes = [{ path: '' }]
  ): ModuleWithProviders<MicrofrontendlyNg> {
    return {
      ngModule: MicrofrontendlyNg,
      providers: [
        ...this.createMicrofrontendlyProviders(MicrofrontendlyNgDynamicService, baseRoutes),
        {
          provide: MICRO_APPS_CONFIGURATION_URL,
          useValue: microAppsConfigurationUrl,
        },
      ],
    };
  }
}
