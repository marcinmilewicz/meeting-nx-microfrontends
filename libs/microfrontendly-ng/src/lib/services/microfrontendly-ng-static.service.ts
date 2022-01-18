import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteConfiguration, RoutesFactory } from '../model/microfrontendly-ng.model';
import { BASE_ROUTES, MicrofrontendlyNgService } from './microfrontendly-ng.service';

@Injectable()
export class MicrofrontendlyNgStaticService extends MicrofrontendlyNgService {
  constructor(@Inject(BASE_ROUTES) protected routesFactory: RoutesFactory, protected router: Router) {
    super(routesFactory, router);
  }

  initialize({ angularRemoteLazyModules }: RemoteConfiguration) {
    this.loadAndBuildAngularRoutes(angularRemoteLazyModules);
  }
}
