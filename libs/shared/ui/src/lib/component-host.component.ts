import { Component, ComponentRef, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@microfrontendly/ng';

@Component({
  selector: 'static-component-host',
  template: ` <ng-template #componentHost></ng-template>`,
})
export class ComponentHostComponent<T> implements OnInit {
  @Input() remoteName!: string;
  @Input() remoteEntry!: string;
  @Input() exposedModule!: string;
  @Input() componentName!: string;
  @ViewChild('componentHost', { read: ViewContainerRef, static: true })
  viewContainer!: ViewContainerRef;

  ngOnInit() {
    this.loadComponent<T>();
  }

  async loadComponent<T>(): Promise<ComponentRef<T>> {
    const { remoteName, exposedModule, remoteEntry, componentName } = this;
    const { [componentName]: remoteComponent }: { [key: string]: Type<T> } = await loadRemoteModule<any>({
      remoteName,
      exposedModule,
      remoteEntry,
    });

    this.viewContainer.clear();

    return this.viewContainer.createComponent<T>(remoteComponent);
  }
}
