import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'meetings-nx-microfrontends-noop',
  template: `{{ page$ | async }}`,
})
export class NoopComponent {
  page$: Observable<string> = this.route.data.pipe(map(({ page }) => page));
  constructor(private route: ActivatedRoute) {}
}
