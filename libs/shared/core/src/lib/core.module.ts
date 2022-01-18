import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationDataLayerModule } from '@meetings-nx-microfrontends/authentication/authentication-data-layer';

@NgModule({
  imports: [CommonModule, AuthenticationDataLayerModule],
})
export class CoreModule {}
