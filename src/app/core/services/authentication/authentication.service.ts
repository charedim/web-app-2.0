import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import {ApiService} from '../api.services';
const baseUrl = 'auth/';

@Injectable()
export class AuthenticationService {
  public token: string;

  constructor(private apiService: ApiService) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(email: string, password: string, cnpj: string): Observable<any> {
   return this.apiService.post(`${baseUrl}${'login'}`, {email: email, password: password, cnpj: cnpj});
    // .map((data)=>{console.log("aa");  return this.saveTokenInLocalStorage(data,email)})
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  signup(email: string, cnpj: string, password: string): Observable<any> {
    return this.apiService.post(`${baseUrl}${'signup'}`, {email: email, cnpj: cnpj, password: password});
  }

  verifyEmail() {
    this.apiService.post(`${baseUrl}${'email/verify'}`);
  }

  resendEmail(email: string, cnpj: string): Observable<any> {
    return this.apiService.post(`${baseUrl}${'email/resend'}`, {email: email, cnpj: cnpj});
  }

  passwordRecovery(email: string, cnpj: string): Observable<boolean> {
    return this.apiService.post(`${baseUrl}${'password/reset'}`, {email: email, cnpj: cnpj});
  }

  updatePassword(oldPassword, newPassword): Observable<any> {
    return this.apiService.post(`${baseUrl}${'password/update'}`, {password_old: oldPassword, password_new: newPassword});
  }

  getToken() {
    return this.token;
  }



  saveTokenInLocalStorage(token: string, userName: string): Boolean {
    if (token) {
      this.token = token;
      localStorage.setItem('currentUser', JSON.stringify({ userName: userName, token: token }));
       return true;
    }
   return false;
  }

}
