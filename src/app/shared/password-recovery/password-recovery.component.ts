import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../core/services/authentication/authentication.service';

@Component({
  selector:    'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls:  ['./password-recovery.component.css', '../login/login.component.scss'],

})
export class PasswordRecoveryComponent implements OnInit {
recoveryPasswordForm: FormGroup;

  constructor( private authenticationService: AuthenticationService,
               private fb: FormBuilder,
               private router: Router ) {
  this.createForm();
  }

  ngOnInit() {

  }

recovery() {
  const email = this.recoveryPasswordForm.get('email').value;
  const cnpj  = this.recoveryPasswordForm.get('cnpj').value;
  this.authenticationService.passwordRecovery(email, cnpj).subscribe(
    data => {
           this.router.navigate(['/sign-in']);
          },
    err => {
        if (err) {
         err = err.json();
         for (const erorr of err.Errors) {
           console.log('error in field :', erorr.location);
           this.recoveryPasswordForm.get(erorr.location).setValue('');
            }
        }
    });
}

createForm() {
     this.recoveryPasswordForm = this.fb.group({
       email:    ['', [Validators.email, Validators.required]],
       cnpj:     ['', Validators.compose([Validators.required,
                      Validators.pattern('([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})')
              ])],
     });
 }

}
