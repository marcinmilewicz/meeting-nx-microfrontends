import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationCoreLayerModule } from '@meetings-nx-microfrontends/authentication-authentication-core-layer';

@NgModule({
  imports: [CommonModule, AuthenticationCoreLayerModule],
})
export class CoreModule {}
