import { Inject, Injectable } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { RemoteConfiguration } from '../model/microfrontendly-ng.model';
import { BASE_ROUTES, MicrofrontendlyNgService } from './microfrontendly-ng.service';

@Injectable()
export class MicrofrontendlyNgStaticService extends MicrofrontendlyNgService {
  constructor(@Inject(BASE_ROUTES) protected baseRoutes: Routes, protected router: Router) {
    super(baseRoutes, router);
  }

  initialize({ angularRemoteLazyModules }: RemoteConfiguration) {
    this.loadAndBuildAngularRoutes(angularRemoteLazyModules);
  }
}
