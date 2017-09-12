  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  import { AuthGuard } from './core/services/guards/auth.guard';
  import {HomePageComponent} from './layout/home-page.component';
  import {LoginComponent} from './shared/login/login.component';
  import {SignUpComponent} from './shared/sign-up/sign-up.component';
  import {PasswordRecoveryComponent} from './shared/password-recovery/password-recovery.component';

 export const routes: Routes = [
            { path: '', redirectTo: '/sign-in', pathMatch: 'full'},
            { path: 'sign-in', loadChildren: './shared/shared.module#SharedModule'},
            { path: 'discount', canActivate: [AuthGuard], loadChildren: './layout/layout.module#LayoutModule'}

];
  @NgModule({
     imports: [
         RouterModule.forRoot(routes, { useHash: true }),
      ],
     exports: [
          RouterModule,
      ]
  })
  export class AppRoutingModule { }
