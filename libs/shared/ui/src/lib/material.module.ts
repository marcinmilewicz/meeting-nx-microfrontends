import { BidiModule } from '@angular/cdk/bidi';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, BidiModule, MatIconModule, MatCardModule, FlexLayoutModule],
  exports: [MatToolbarModule, MatButtonModule, BidiModule, MatIconModule, MatCardModule, FlexLayoutModule],
})
export class MaterialSharedModule {}
