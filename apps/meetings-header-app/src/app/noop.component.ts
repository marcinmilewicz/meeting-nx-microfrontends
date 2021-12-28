import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'meetings-nx-microfrontends-noop',
  template: `{{ page$ | async }}`,
})
export class NoopComponent {
  page$: Observable<string> = this.route.data.pipe(map(({ page }) => page));
  constructor(private route: ActivatedRoute) {}
}
