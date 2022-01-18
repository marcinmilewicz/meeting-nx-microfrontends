import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DataPersistence } from '@nrwl/angular';

@NgModule({
  imports: [
    CommonModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ router: routerReducer }),
    EffectsModule.forRoot(),
  ],
})
export class PersistanceModule {
  static forRoot(production?: boolean): ModuleWithProviders<PersistanceModule> {
    const storeDevToolsProviders: Provider[] | undefined = !production
      ? StoreDevtoolsModule.instrument().providers
      : [];

    return {
      ngModule: PersistanceModule,
      providers: [...(storeDevToolsProviders || []), DataPersistence],
    };
  }
}
