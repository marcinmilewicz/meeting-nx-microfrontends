import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule, FirebaseConnectorModule } from '@meetings-nx-microfrontends/shared/core';
import { MaterialSharedModule } from '@meetings-nx-microfrontends/shared/ui';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { MeetingsHeaderComponent } from './header/meetings-header.component';
import { NoopComponent } from './noop.component';

@NgModule({
  declarations: [AppComponent, MeetingsHeaderComponent, NoopComponent],
  imports: [
    BrowserModule,
    CommonModule,
    CoreModule,
    FirebaseConnectorModule.forRoot(environment),
    BrowserAnimationsModule,
    MaterialSharedModule,
    RouterTestingModule.withRoutes([
      { path: '', redirectTo: 'meeting-templates', pathMatch: 'full' },
      {
        path: 'meeting-templates',
        component: NoopComponent,
        data: { page: 'Meeting Templates' },
      },
      {
        path: 'meeting-scheduled',
        component: NoopComponent,
        data: { page: 'Scheduled Meetings' },
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
