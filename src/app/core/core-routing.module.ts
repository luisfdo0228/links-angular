import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckLoginGuard } from '../shared/guards/check-login.guard';

const routes: Routes = [
  
  { 
    path: 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    // canActivate: [CheckLoginGuard]
  },
  { 
    path: 'signup', 
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule),
    // canActivate: [CheckLoginGuard] 
  },
  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate: [CheckLoginGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
