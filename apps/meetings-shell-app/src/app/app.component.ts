import { Component, Inject } from '@angular/core';
import { AngularRemoteLazyModule, MICROFRONTENDLY_SERVICE, MicrofrontendlyNgService } from '@microfrontendly/ng';
import { Observable } from 'rxjs';

@Component({
  selector: 'meetings-nx-microfrontends-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  modules$: Observable<AngularRemoteLazyModule[]> = this.microfrontendlyNgService.angularRemoteLazyModules$;

  constructor(@Inject(MICROFRONTENDLY_SERVICE) private microfrontendlyNgService: MicrofrontendlyNgService) {}
}
