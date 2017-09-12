
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { LoginComponent } from '../shared/login/login.component';
import { PasswordRecoveryComponent} from '../shared/password-recovery/password-recovery.component';
import { PasswordStrenghComponent } from '../shared/password-strength/password-strength.component'
import { UploadFileComponent } from '../shared/upload-file/upload-file.component';
import { SignUpComponent } from '../shared/sign-up/sign-up.component';
import { SignUpConfirmComponent } from '../shared/sign-up-confirm/sign-up-confirm.component';
import { AuthenticationService } from '../core/services/authentication/authentication.service';
import { UserService } from '../core/services/user-services/user-service';
// import { fakeBackendProvider} from '../core/services/fake-backend'
import { ApiService } from '../core/services/api.services';
import { UserProfileService } from '../core/services/user-services/user-profile';
import { CovalentTeraDataModule } from '../core/covalent-teradata.module';
import { SharedRoutingModule } from './shared-routing';
import { CoreModule } from '../core/core.module';
import { GoogleAnalyticsEventsService } from '../google-analytics-events.service';
import { TextMaskModule } from 'angular2-text-mask';
import 'hammerjs';

@NgModule({
  declarations: [
       LoginComponent,
       UploadFileComponent,
       SignUpComponent,
       SignUpConfirmComponent,
       PasswordRecoveryComponent,
       PasswordStrenghComponent
   ],

  imports: [
      CovalentTeraDataModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      HttpClientModule,
      SharedRoutingModule,
      CoreModule,
      TextMaskModule
    ],

  providers: [
  // { provide:HTTP_INTERCEPTORS, useClass:myTryInterceptor, multi:true},
       MockBackend,
      AuthenticationService,
      UserService,
      // fakeBackendProvider,
      ApiService,
      UserProfileService,
      GoogleAnalyticsEventsService],

  exports: [
      LoginComponent,
      UploadFileComponent,
      SignUpComponent,
      SignUpConfirmComponent,
      PasswordRecoveryComponent,
      PasswordStrenghComponent
  ]

})
export class SharedModule { }
