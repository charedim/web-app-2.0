import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignUpConfirmComponent} from './sign-up-confirm/sign-up-confirm.component';
import {PasswordRecoveryComponent} from './password-recovery/password-recovery.component';

const routes: Routes = [
      { path: '', component: LoginComponent},
      { path: 'sign-up', component: SignUpComponent},
      { path: 'sign-up-confirm', component: SignUpConfirmComponent},
      { path: 'password-recovery', component: PasswordRecoveryComponent}
];

@NgModule({
   imports: [
       RouterModule.forChild(routes),
    ],
   exports: [
        RouterModule,
    ]
})
export class SharedRoutingModule { }
