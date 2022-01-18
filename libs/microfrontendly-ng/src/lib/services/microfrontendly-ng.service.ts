import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {
  AngularRemoteLazyModule,
  RemoteConfiguration,
  RemoteModule,
  RoutesFactory,
} from '../model/microfrontendly-ng.model';
import { loadRemoteModule } from '../model/microfrontendly-ng.utils';

import { buildRoutes } from '../route-utils';

export const BASE_ROUTES = new InjectionToken<RoutesFactory>('routesFactory');
export const MICROFRONTENDLY_SERVICE = new InjectionToken<MicrofrontendlyNgService>('microfrontendlyService');

const hashRemoteModule = ({ remoteName, exposedModule }: Omit<RemoteModule, 'remoteEntry'>): string =>
  `${remoteName}_${exposedModule}`;

@Injectable()
export abstract class MicrofrontendlyNgService {
  private readonly remotes: Map<string, RemoteModule> = new Map();
  private readonly angularRemoteLazyModulesSubject: Subject<AngularRemoteLazyModule[]> = new BehaviorSubject<
    AngularRemoteLazyModule[]
  >([]);
  readonly angularRemoteLazyModules$: Observable<AngularRemoteLazyModule[]> =
    this.angularRemoteLazyModulesSubject.asObservable();

  abstract initialize(configuration?: RemoteConfiguration): Promise<void> | void;

  protected constructor(@Inject(BASE_ROUTES) protected routesFactory: RoutesFactory, protected router: Router) {}

  async loadRemote<T>(remoteName: string, exposedModule: string): Promise<T> {
    const remoteModuleKey: string = hashRemoteModule({
      exposedModule,
      remoteName,
    });
    const remoteModule: RemoteModule | undefined = this.remotes.get(remoteModuleKey);

    if (!remoteModule) {
      return Promise.reject(`No remote module named ${remoteName} registered`);
    }

    return loadRemoteModule(remoteModule);
  }

  protected loadAndBuildAngularRoutes(angularRemoteLazyModule: AngularRemoteLazyModule[]) {
    const routes = buildRoutes(angularRemoteLazyModule, this.routesFactory, loadRemoteModule);
    this.router.resetConfig(routes);
    this.angularRemoteLazyModulesSubject.next(angularRemoteLazyModule);
  }

  protected registerRemotes(modules: RemoteModule[]) {
    modules.forEach((remoteModule: RemoteModule) => this.remotes.set(hashRemoteModule(remoteModule), remoteModule));
  }
}
