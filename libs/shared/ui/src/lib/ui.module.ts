import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentHostComponent } from './component-host.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ComponentHostComponent],
  exports: [ComponentHostComponent],
})
export class UiModule {}
