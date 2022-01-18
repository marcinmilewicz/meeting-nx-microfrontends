import { Routes } from '@angular/router';

export type RoutesFactory = (dynamicRoutes: Routes) => Routes;

export type AngularRoute = {
  displayName: string;
  routePath: string;
  children?: AngularRoute[];
};

export type AngularRemoteLazyModule = RemoteModule &
  AngularRoute & {
    ngModuleName: string;
  };

export type RemoteConfiguration = {
  angularRemoteLazyModules: AngularRemoteLazyModule[];
  angularRemoteModules: RemoteModule[];
};

export type Scope = unknown;
export type Factory = () => any;

export type Container = {
  init(shareScope: Scope): void;
  get(module: string): Factory;
};
declare global {
  interface Window {
    [key: string]: Container;
  }
}

export type RemoteModule = {
  remoteEntry: string;
  remoteName: string;
  exposedModule: string;
};
