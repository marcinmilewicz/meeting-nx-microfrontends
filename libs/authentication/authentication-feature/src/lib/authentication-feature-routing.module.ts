import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialSharedModule } from '@meetings-nx-microfrontends/shared/ui';
import { LoginComponent } from './login.component';
import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialSharedModule,
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'logout', component: LogoutComponent },
    ]),
  ],
  declarations: [LoginComponent, LogoutComponent],
})
export class AuthenticationFeatureRoutingModule {}
