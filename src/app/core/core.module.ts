import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule} from "@angular/common/http";
import { RouterModule, Routes } from '@angular/router/';
import { CoreRoutingModule } from './core-routing.module';
import { LinksService } from '../api/links/links.service';


const routes: Routes = [

];


@NgModule({
  declarations: [],
  providers:[LinksService],
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
