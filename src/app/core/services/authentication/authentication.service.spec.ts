import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule} from '@angular/http';
import { ApiService } from '../../../core/services/api.services';
import { Observable } from 'rxjs';
import {AuthenticationService} from './authentication.service';


describe('service: AuthenticationService', () => {
let authenticationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:   [HttpModule],
      providers: [
        ApiService,
        AuthenticationService,
                 ]
    });
  });
  beforeEach(inject([AuthenticationService], service => {
    authenticationService = service;
  }));

  it('should be created', () => {
    expect(authenticationService).toBeTruthy();
  });


   it('shuold return res from login', () => {
     let res;
     authenticationService.login('shulamit@work.capital', 'aaaaaaa111111!Aa', '90.344.652/0001-36')
     .finally( () => {
       console.log( res );
       expect(res).toBeDefined();
       expect(res.email).toEqual('jon@gmail.com');
       expect(res.cnpj).toEqual('ali23qu34i54p');
       expect(res.token).toBeDefined();

     })
      .subscribe(
         data => { res = data; },
         err  => { res = err; }
       );
     });

   it('shuold  logout remove token from local storage', () => {
     authenticationService.logout();
     expect(authenticationService.token).toBeNull();
     expect(localStorage.getItem('currentUser')).toBeNull();
   });

   it('shuold return res from signup', () => {
     let res;
     authenticationService.signup('shulamit@work.capital', '90.344.652/0001-36', 'aaaaaaa111111!Aa')
     .finally( () => {
       console.log(res);
       expect(res).toBeDefined();
       expect(res.email).toEqual('jon@gmail.com');
       expect(res.cnpj).toEqual('13.514.676/0001-46');

     })
      .subscribe(
         data => { res = data; },
         err  => { res = err; }
       );
     });

   it('shuold save token in local storage', () => {
    authenticationService.saveTokenInLocalStorage('aaaa1111', 'test');
     expect(localStorage.getItem('currentUser')).toBeDefined();
     expect(JSON.parse(localStorage.getItem('currentUser')).userName).toBe('test');
     expect(JSON.parse(localStorage.getItem('currentUser')).token).toBe('aaaa1111');
   });

});
