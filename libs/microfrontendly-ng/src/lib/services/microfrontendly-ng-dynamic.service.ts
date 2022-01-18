import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { RemoteConfiguration, RoutesFactory } from '../model/microfrontendly-ng.model';
import { BASE_ROUTES, MicrofrontendlyNgService } from './microfrontendly-ng.service';

export const MICRO_APPS_CONFIGURATION_URL = new InjectionToken<string>('configurationUrl');

@Injectable()
export class MicrofrontendlyNgDynamicService extends MicrofrontendlyNgService {
  constructor(
    @Inject(BASE_ROUTES) protected routesFactory: RoutesFactory,
    @Inject(MICRO_APPS_CONFIGURATION_URL) protected configurationUrl: string,
    protected router: Router,
    private httpClient: HttpClient
  ) {
    super(routesFactory, router);
  }

  async initialize(): Promise<void> {
    const remoteConfiguration$: Observable<RemoteConfiguration> = this.httpClient.get<RemoteConfiguration>(
      this.configurationUrl
    );

    const { angularRemoteLazyModules, angularRemoteModules } = await remoteConfiguration$.pipe(take(1)).toPromise();

    this.loadAndBuildAngularRoutes(angularRemoteLazyModules);
    this.registerRemotes(angularRemoteModules);
  }
}
