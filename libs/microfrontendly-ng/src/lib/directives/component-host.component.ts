import { Component, ComponentRef, Inject, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { MICROFRONTENDLY_SERVICE, MicrofrontendlyNgService } from '../services/microfrontendly-ng.service';

@Component({
  selector: 'microfrontendly-component-host',
  template: ` <ng-template #componentHost></ng-template>`,
})
export class ComponentHostComponent<T> implements OnInit {
  @Input() remoteName!: string;
  @Input() moduleName!: string;
  @Input() componentName!: string;
  @ViewChild('componentHost', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  constructor(
    @Inject(MICROFRONTENDLY_SERVICE)
    private microfrontendlyNgService: MicrofrontendlyNgService
  ) {}

  ngOnInit() {
    this.loadComponent<T>();
  }

  async loadComponent<T>(): Promise<ComponentRef<T>> {
    const { [this.componentName]: remoteComponent }: { [key: string]: Type<T> } =
      await this.microfrontendlyNgService.loadRemote<any>(this.remoteName, this.moduleName);

    this.viewContainer.clear();

    return this.viewContainer.createComponent<T>(remoteComponent);
  }
}
