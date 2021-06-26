import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router/';
import { CoreRoutingModule } from './core-routing.module';

const routes: Routes = [

];


@NgModule({
  declarations: [],
  imports: [
    CoreRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  exports: [
    SharedModule
  ]
})
export class CoreModule { }
