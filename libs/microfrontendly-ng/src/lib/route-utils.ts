import { Routes } from '@angular/router';
import { AngularRemoteLazyModule, RemoteModule, RoutesFactory } from './model/microfrontendly-ng.model';

export function buildRoutes(
  angularRemoteModules: AngularRemoteLazyModule[],
  routesFactory: RoutesFactory,
  moduleLoader: (module: RemoteModule) => Promise<any>
): Routes {
  const lazyRoutes: Routes = angularRemoteModules.map((module: AngularRemoteLazyModule) => ({
    path: module.routePath,
    loadChildren: () => moduleLoader(module).then((m) => m[module.ngModuleName]),
  }));

  return routesFactory(lazyRoutes);
}
