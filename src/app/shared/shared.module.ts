import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NabvarComponent } from './nabvar/nabvar.component';




@NgModule({
  declarations: [NabvarComponent],
  exports: [NabvarComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule { }
