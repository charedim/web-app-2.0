import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService } from '../../core/services/authentication/authentication.service';
@Component({
  templateUrl: './sign-up-confirm.component.html',
  styleUrls:  ['./sign-up-confirm.component.scss', '../login/login.component.scss']
})
export class SignUpConfirmComponent implements OnInit {

  email;
  cnpj;
  constructor( private router: Router,
               private authenticationService: AuthenticationService,
               private route: ActivatedRoute) {
   this.route.params.subscribe(params => {
   this.email = params['email'];
   this.cnpj = params['cnpj'];
 });
}

  ngOnInit() {

  }

  resendEmail() {
    this.authenticationService.resendEmail(this.email, this.cnpj).subscribe(
      data => {},
      err => {}
    );
  }

}
