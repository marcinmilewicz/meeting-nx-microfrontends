import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PersistenceModule } from '@meetings-nx-microfrontends/shared-shared-data-layer';
import { CoreModule, FirebaseConnectorModule } from '@meetings-nx-microfrontends/shared/core';
import { MaterialSharedModule } from '@meetings-nx-microfrontends/shared/ui';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BootstrapComponent } from './bootstrap.component';

@NgModule({
  declarations: [BootstrapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FirebaseConnectorModule.forRoot(environment),
    PersistenceModule.forRoot(environment.production),
    MaterialSharedModule,
  ],
  providers: [],
  bootstrap: [BootstrapComponent],
})
export class AppModule {}
