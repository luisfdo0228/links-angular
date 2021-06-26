import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from './auth/guard/auth.guard'

const routes: Routes = [
  
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    // canActivate: [AuthGuard]
  },
  { 
    path: 'signup', 
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
    // canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
