import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@meetings-nx-microfrontends/authentication-authentication-core-layer';

@Component({
  selector: 'meetings-nx-microfrontends-logout',
  template: '<button (click)="login()" mat-flat-button="primary"> Login</button>',
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login = () => this.authService.login().then(() => this.router.navigate(['/']));
}
