import { Component, OnInit } from '@angular/core';
import { NavbarDetail } from '../core/models/nav-bar-detail';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { Router } from '@angular/router';

import { AuthenticationService } from '../core/services/authentication/authentication.service';
import { FactorCustomersService } from '../core/services/factor-customers.services';

@Component({
  selector:    'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls:  ['./full-layout.component.scss']
})
export class FullLayoutComponent {

  factoryCustomerDisplayName: string;

  constructor( private _iconRegistry: MdIconRegistry,
               private _domSanitizer: DomSanitizer,
               private authenticationService: AuthenticationService,
               private factorCustomersService: FactorCustomersService,
               private router: Router) {

    this._iconRegistry.addSvgIconInNamespace('assets', 'workCapital',
    this._domSanitizer.bypassSecurityTrustResourceUrl('/src/assets/ico/logo.svg'));
    this.factorCustomersService.getFactorCustomers()
      .subscribe( data => {
        console.log(data);
        this.factoryCustomerDisplayName = data.display_name;
      } );
  }


  navBarTopDetails: NavbarDetail[] = [
      {title: 'ANTECIPAÇÃO', url: '/operation', icon: 'shopping_cart'},
      // {title:"configuration",url:"/configuration",icon:"settings"},
    ];
    navBarBottomDetails: NavbarDetail[] = [
        {title: 'LIVE CHAT', url: '/chat', icon: 'chat'}
      ];

signout(): void {
  this.authenticationService.logout();
  this.router.navigate(['']);


}

}
