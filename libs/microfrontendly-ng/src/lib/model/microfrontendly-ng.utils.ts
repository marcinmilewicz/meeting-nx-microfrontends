import { Container, RemoteModule, Scope } from './microfrontendly-ng.model';

declare const __webpack_init_sharing__: (shareScope: string) => Promise<void>;
declare const __webpack_share_scopes__: { default: Scope };

const moduleMap: Map<string, boolean> = new Map();
const remoteMap: Map<string, boolean> = new Map();

function loadRemoteEntry(remoteEntry: string): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (moduleMap.has(remoteEntry)) {
      resolve();
      return;
    }

    const script = document.createElement('script');
    script.src = remoteEntry;

    script.onerror = reject;

    script.onload = () => {
      moduleMap.set(remoteEntry, true);
      resolve();
    };

    document.body.append(script);
  });
}

let isDefaultScopeInitialized = false;

async function lookupExposedModule<T>(remoteName: string, exposedModule: string): Promise<T> {
  // Do we still need to initialize the share scope?
  if (!isDefaultScopeInitialized) {
    await __webpack_init_sharing__('default');
    isDefaultScopeInitialized = true;
  }

  const container = window[remoteName] as Container;

  if (!remoteMap.has(remoteName)) {
    await container.init(__webpack_share_scopes__.default);
    remoteMap.set(remoteName, true);
  }

  const factory = await container.get(exposedModule);

  return factory() as T;
}

export async function loadRemoteModule<T>(module: RemoteModule): Promise<T> {
  await loadRemoteEntry(module.remoteEntry);

  return await lookupExposedModule<T>(module.remoteName, module.exposedModule);
}
