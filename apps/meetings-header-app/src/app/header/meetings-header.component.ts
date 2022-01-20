import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@meetings-nx-microfrontends/authentication-authentication-core-layer';
import { AngularRoute } from '@microfrontendly/ng';

// Example for Micro Frontend pitfall
@Component({
  selector: 'meetings-nx-microfrontends-meetings-header',
  templateUrl: './meetings-header.component.html',
  styleUrls: ['./meetings-header.component.scss'],
  providers: [AuthService],
})
export class MeetingsHeaderComponent {
  currentRoutes: AngularRoute[] = [];
  @Input() set routes(value: AngularRoute[]) {
    this.currentRoutes = value;
  }

  openGithub = () => window.open('https://github.com/marcinmilewicz/meeting-nx-microfrontends');
  logout = () => this.authService.logout().then(() => this.router.navigate(['auth', 'logout']));

  constructor(private authService: AuthService, private router: Router) {}
}
