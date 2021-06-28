import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NabvarComponent } from './nabvar/nabvar.component';
import { AuthService } from '../api/auth/auth.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NabvarComponent],
  providers:[AuthService],
  exports: [NabvarComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ]
})
export class SharedModule { }
