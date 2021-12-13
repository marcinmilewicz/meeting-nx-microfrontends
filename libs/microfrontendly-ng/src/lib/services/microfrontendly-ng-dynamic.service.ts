import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { firstValueFrom, Observable } from 'rxjs';
import { RemoteConfiguration } from '../model/microfrontendly-ng.model';
import { BASE_ROUTES, MicrofrontendlyNgService } from './microfrontendly-ng.service';

export const MICRO_APPS_CONFIGURATION_URL = new InjectionToken<string>('configurationUrl');

@Injectable()
export class MicrofrontendlyNgDynamicService extends MicrofrontendlyNgService {
  constructor(
    @Inject(BASE_ROUTES) protected baseRoutes: Routes,
    @Inject(MICRO_APPS_CONFIGURATION_URL) protected configurationUrl: string,
    protected router: Router,
    private httpClient: HttpClient
  ) {
    super(baseRoutes, router);
  }

  async initialize(): Promise<void> {
    const remoteConfiguration$: Observable<RemoteConfiguration> = this.httpClient.get<RemoteConfiguration>(
      this.configurationUrl
    );
    const { angularRemoteLazyModules, angularRemoteModules } = await firstValueFrom(remoteConfiguration$);

    this.loadAndBuildAngularRoutes(angularRemoteLazyModules);
    this.registerRemotes(angularRemoteModules);
  }
}
