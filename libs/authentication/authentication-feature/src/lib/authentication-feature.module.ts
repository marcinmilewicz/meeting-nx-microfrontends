import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationFeatureRoutingModule } from './authentication-feature-routing.module';

@NgModule({
  imports: [CommonModule, AuthenticationFeatureRoutingModule],
})
export class AuthenticationFeatureModule {}
