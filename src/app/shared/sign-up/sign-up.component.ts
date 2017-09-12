import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidation } from './password-confirm-validation';
import {AuthenticationService } from '../../core/services/authentication/authentication.service';

@Component({
  selector:    'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls:  ['./sign-up.component.scss', '../login/login.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm: FormGroup;

    constructor(private router: Router,
                private fb: FormBuilder,
                private authenticationService: AuthenticationService) {
      this.createForm();
     }
    ngOnInit() {

    }

  signUp() {
    const password = this.signupForm.get('password').value;
    const email = this.signupForm.get('email').value;
    const cnpj = this.signupForm.get('cnpj').value;
    this.authenticationService.signup(email, cnpj, password).subscribe(
    data => {
       this.router.navigate(['/sign-up-confirm', { email: data.email, cnpj: data.cnpj}]);
     },
      err => {
        // if(err.receivable_status==404)
        //  console.log(err);
         err = err.json();
        // console.log(err.Errors)
         for (const erorr of err.Errors) {
               console.log('error in field :', erorr.location);
             }
         // this.signupForm.reset();
     }
    );
  }

  createForm() {
     this.signupForm = this.fb.group({
        email:           ['', Validators.compose([ Validators.email, Validators.required])],
        cnpj:            ['', Validators.compose([ Validators.required,
                           Validators.pattern('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')  ])],
        password:        ['', Validators.compose(
                          [Validators.required, Validators.pattern('(^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$)')])],
        confirmPassword: ['', Validators.required]},
                            { validator: PasswordValidation.MatchPassword} );
   }
}
