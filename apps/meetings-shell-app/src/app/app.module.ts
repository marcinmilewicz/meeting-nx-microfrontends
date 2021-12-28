import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MeetingsDataLayerModule } from '@meetings-nx-microfrontends/shared/meetings-data-layer';
import { MaterialSharedModule, UiModule } from '@meetings-nx-microfrontends/shared/ui';
import { ReducerManager } from '@ngrx/store';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MeetingsDataLayerModule.forRoot({
      firebaseConfig: environment.firebaseConfig,
      scheduledCollection: environment.scheduledCollection,
      templatesCollection: environment.templatesCollection,
    }),
    MaterialSharedModule,
    UiModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(red: ReducerManager) {
    console.log('app ', red);
  }
}
