import { Injectable  } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { UUID } from 'angular2-uuid';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { AuthenticationService } from '../../../core/services/authentication/authentication.service';
import { ApiService } from '../../../core/services/api.services';
import { Receivable } from '../../../core/models/receivable.model';
import { BankAccount } from '../../../core/models/bank-account';
import { FactorCustomersService } from '../../../core/services/factor-customers.services';
import { ShopingCartService } from '../services/shoping-cart.service/shoping-cart.service';
import { Operation } from '../../../core/models/operation.model';

@Injectable()
export class OperationService {

  receivableChange = new EventEmitter<void>();

  constructor( private apiService: ApiService,
               private factorCustomersService: FactorCustomersService,
               private shopingCartService: ShopingCartService,
              ) { }

  getReceviables(page: number, size: number): Observable< Receivable[] > {
    const params: URLSearchParams = new URLSearchParams();
          params.set('page', page.toString());
          params.set('amount', size.toString());
          params.set('rate', 'true');
1
     return this.apiService.get('receivables', params)
   .map(data => this.sortAllResivables(data));
   }

   getTotalNumOfReceviables(): Observable< number > {

    return this.apiService.get('receivables/count');
    }

   sortAllResivables(allResivables: Receivable[]): Receivable[] {
       console.log(allResivables);
        return allResivables;
    //  return allResivables.sort(this.sortResivableByDefult);
   }

   sortResivableByDefult(a: Receivable, b: Receivable): number {
       return a.compareTo(b);
   }

  createOperation(selectedAccount: BankAccount): any {
    const operation: Operation  = new Operation();
    operation.uuid              = UUID.UUID();
    operation.bank_account_uuid = selectedAccount.uuid;
    operation.receivables       = this.shopingCartService.getItems().map(receivable => receivable.uuid);
    operation.gross_amount      = this.shopingCartService.getItems().reduce((a, b) =>  a + b.outstanding_value, 0);
    operation.net_amount        = this.shopingCartService.getTotalSum();

    this.apiService.put('operation', operation).subscribe (
      data => {
        if (data.net_amount == operation.net_amount) {
          return operation.uuid;
        }
      },
       err => {}
    );
     return false;
     //TODO ask if this is the rghit way how to wirte it

   }
}
