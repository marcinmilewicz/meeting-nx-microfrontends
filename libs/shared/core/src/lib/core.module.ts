import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationCoreLayerModule } from '@meetings-nx-microfrontends/authentication-authentication-core-layer';
import { MeetingsErrorHandlerHandler } from './error-handling/meetings-error.handler';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule, MatSnackBarModule, AuthenticationCoreLayerModule],
  providers: [{ provide: ErrorHandler, useClass: MeetingsErrorHandlerHandler }],
})
export class CoreModule {}
