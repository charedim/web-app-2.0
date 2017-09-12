import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MdTableModule } from '@angular/material';

import { DashboardComponent } from '../features/dashboard/dashboard.component';
import { AuthenticationService } from '../core/services/authentication/authentication.service';
 // import { fakeBackendProvider } from '../core/services/fake-backend'
import { AuthGuard } from '../core/services/guards/auth.guard';
import { ApiService } from '../core/services/api.services';
import { UserProfileService } from '../core/services/user-services/user-profile';

import { SharedModule } from '../shared/shared.module';
import { CovalentTeraDataModule } from '../core/covalent-teradata.module';
import { OperationModule } from './operation/operation.module';
import { CoreModule } from '../core/core.module';
import 'hammerjs';

@NgModule({

  declarations: [
     DashboardComponent,
  ],

  imports: [
    MdTableModule,
    CovalentTeraDataModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    SharedModule,
    OperationModule,
    CoreModule
  ],

  providers: [
    // { provide:HTTP_INTERCEPTORS, useClass:myTryInterceptor, multi:true},
    //  ShopingCartService,
    UserProfileService,
    AuthenticationService,
    ApiService,
    // fakeBackendProvider,
    // MockBackend,
    BaseRequestOptions ],

  exports: [
     DashboardComponent
  ]

})
export class FeaturesModule { }
