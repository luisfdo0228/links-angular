import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router/';

const routes: Routes = [

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule,
  ],
  exports: [
    SharedModule,
  ]
})
export class CoreModule { }
