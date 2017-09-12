import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ApiService } from './api.services';
import { BankAccount } from '../models/bank-account';
import { FactorCustomers } from '../models/factor_customers';

@Injectable()
export class FactorCustomersService {

  factorCustomers: FactorCustomers;
  displayName = '';
  constructor(private apiService: ApiService) {

  }


  getFactorCustomers() {
   return this.apiService.get('factor_customers');
  }

  getCreditLimit(): number {
    if (this.factorCustomers) {
      return this.factorCustomers.credit_limit_remaining;
    }
  // return this.apiService.get(`${baseUrl}${'getCreditLimit'}`)
  // return Observable.of(4500);
   return 0;
  }

  getBankAccounts(): Observable< BankAccount[] > {
   return this.apiService.get('/bank_accounts');
  }

  setFactorCustomers(factorCustomers) {
    this.factorCustomers = factorCustomers;
  }

  getFactorCustomersName(): string {
    if (this.factorCustomers) {
     return this.factorCustomers.display_name;
   }
   return null;
  }

   getFactorCustomersEmail(): string {
     if (this.factorCustomers) {
      return this.factorCustomers.email;
    }
    return '';
  }

}
