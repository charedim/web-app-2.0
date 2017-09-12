import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../shared/login/login.component';
import {FullLayoutComponent} from './full-layout.component';
import {HomePageComponent} from './home-page.component';
import {SignUpComponent} from '../shared/sign-up/sign-up.component';
// import {InvoicesComponent} from '../features/invoices/invoices.component';
// import {ReceivableComponent} from '../features/receivable/receivable.component'
import {DashboardComponent } from '../features/dashboard/dashboard.component';
import {OperationComponent} from '../features/operation/operation.component';
 // import {ContractsComponent} from '../features/contracts/contracts.component';

export const routes: Routes = [

       { path: '', component: FullLayoutComponent ,
        children: [
         {path: '', redirectTo: '/operation', pathMatch: 'full'},
         {path: 'operation',      component: OperationComponent},
         {path: 'configuration' , component: OperationComponent},
         {path: 'chat' ,          component: OperationComponent}
    ]
}
];

@NgModule({
   imports: [
       RouterModule.forChild(routes),
    ],
   exports: [
        RouterModule,
    ]
})
export class LayoutRoutingModule { }
