import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@meetings-nx-microfrontends/authentication/authentication-data-layer';

@Component({
  selector: 'meetings-nx-microfrontends-login',
  template: '',
})
export class LoginComponent {
  constructor(authService: AuthService, router: Router) {
    authService.login().then(() => router.navigate(['/']));
  }
}
