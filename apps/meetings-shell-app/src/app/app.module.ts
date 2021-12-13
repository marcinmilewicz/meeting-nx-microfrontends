import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeetingsDataLayerModule } from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { MaterialSharedModule } from '@meetings-nx-microfrontends/shared/ui';
import { MicrofrontendlyNg } from '@microfrontendly/ng';
import { environment } from '../../../meeting-templates-app/src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicrofrontendlyNg,
    MaterialSharedModule,
    MeetingsDataLayerModule.forRoot({
      firebaseConfig: environment.firebaseConfig,
      scheduledCollection: environment.scheduledCollection,
      templatesCollection: environment.templatesCollection,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
