import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { GoogleAnalyticsEventsService } from '../../google-analytics-events.service';
import { AuthenticationService} from '../../core/services/authentication/authentication.service';
import { FactorCustomersService } from '../../core/services/factor-customers.services';

@Component({
  selector:    'app-login',
  templateUrl: './login.component.html',
  styleUrls:  ['./login.component.scss'],

})

export class LoginComponent implements OnInit {
  mask = [/[1-9]/, /[1-9]/,'.', /[1-9]/, /[1-9]/,/[1-9]/, '.', /[1-9]/, /[1-9]/, /[1-9]/, '/', /[1-9]/, /[1-9]/, /[1-9]/, /[1-9]/, '-', /[1-9]/, /[1-9]/ ]
  signinForm: FormGroup;

  constructor( private authenticationService: AuthenticationService,
               private router: Router,
               private fb: FormBuilder,
               private factorCustomersService: FactorCustomersService) {
   this.createForm();
  }

  ngOnInit() {

  }

  login() {
    const email    = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;
    const cnpj     = this.signinForm.get('cnpj').value;
    this.authenticationService.login(email, password, cnpj).subscribe(
        data => {
             const result = this.authenticationService.saveTokenInLocalStorage(data, email);
               if (result === true) {
                 this.router.navigate(['/discount']);
                }
               else {
                  this.signinForm.reset();
                }
              },
        err => {
                 if (err) {
                  err = err.json();
                  for (const erorr of err.Errors) {
                  console.log('error in field :', erorr.location);
                  this.signinForm.get(erorr.location).setValue('');
                }
              }
            //  this.signinForm.reset();
         }
     );
  // this.googleAnalyticsEventsService.emitEvent("testCategory", "testAction", "testLabel", 10);
  }

  createForm() {
   this.signinForm = this.fb.group({
   email:    ['', Validators.compose([ Validators.email, Validators.required])] ,
   password: ['', Validators.required ],
   cnpj:     ['', Validators.compose([
                  Validators.required,
                  Validators.pattern('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')
          ])],
   });
  }
}
