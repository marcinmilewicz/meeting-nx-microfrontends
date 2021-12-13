import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { AngularRemoteLazyModule, RemoteConfiguration, RemoteModule } from '../model/microfrontendly-ng.model';
import { loadRemoteModule } from '../model/microfrontendly-ng.utils';

import { buildRoutes } from '../route-utils';

export const BASE_ROUTES = new InjectionToken<Routes>('baseRoutes');
export const MICROFRONTENDLY_SERVICE = new InjectionToken<MicrofrontendlyNgService>('microfrontendlyService');

const hashRemoteModule = ({ remoteName, exposedModule }: Omit<RemoteModule, 'remoteEntry'>): string =>
  `${remoteName}_${exposedModule}`;

@Injectable()
export abstract class MicrofrontendlyNgService {
  private readonly remotes: Map<string, RemoteModule> = new Map();

  abstract initialize(configuration?: RemoteConfiguration): Promise<void> | void;

  protected constructor(@Inject(BASE_ROUTES) protected baseRoutes: Routes, protected router: Router) {}

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

  protected loadAndBuildAngularRoutes(modules: AngularRemoteLazyModule[]) {
    const routes = buildRoutes(modules, this.baseRoutes, loadRemoteModule);
    this.router.resetConfig(routes);
  }

  protected registerRemotes(modules: RemoteModule[]) {
    modules.forEach((remoteModule: RemoteModule) => this.remotes.set(hashRemoteModule(remoteModule), remoteModule));
  }
}
