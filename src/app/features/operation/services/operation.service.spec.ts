import { TestBed, async, inject } from '@angular/core/testing';
import { HttpModule} from '@angular/http';

import { OperationService } from './operation.service';
import { FactorCustomersService } from '../../../core/services/factor-customers.services';
import { ShopingCartService } from '../services/shoping-cart.service/shoping-cart.service';
import { CalcDiscountService } from '../services/calc-discount.service';
import { ApiService } from '../../../core/services/api.services';
import { Receivable } from '../../../core/models/receivable.model';
import { Observable } from 'rxjs';
import { BankAccount } from '../../../core/models/bank-account';

describe('OperationService', () => {
let operationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ApiService,
        OperationService,
        FactorCustomersService,
        CalcDiscountService,
        ShopingCartService
  ]
    });
  });
  beforeEach(inject([OperationService], service => {
    operationService = service;
  }));

    it('should be created', () => {
      expect(operationService).toBeTruthy();
    });

    it('should return receivables', (inject([OperationService], (operationService) => {
        // spyOn(operationService, 'getReceviables').and.callFake(()=>{return Observable.of(allRecevivables)})
        // operationService.getReceviables().subscribe(data=> { expect(data).toEqual(allRecevivables)});
        const params: URLSearchParams = new URLSearchParams();
              params.set('page', '1');
              params.set('amount', '15');
              params.set('rate', 'true');


        operationService.getReceviables(1,15).subscribe(
           data => {
              expect(data.length).toBeLessThanOrEqual(15);
            }
         );

    })));
    // it('shuold return bankAccuont', async() => {
    //     // spyOn(operationService,'getBankAccounts').and.callFake(()=>{return Observable.of(allBankAccunts)})
    //     // operationService.getBankAccounts().subscribe(data=> { expect(data).toEqual(allBankAccunts)});
    //   operationService.getBankAccounts().subscribe(
    //     data => {
    //        expect(data).toBeDefined();
    //   });
    //
    // });

    it('shuld sort the receivable', async() => {

    let recevalble: Receivable;
        function isSort(element, index, array) {
           if (index === 0) {
            return true;
          }
          recevalble = <Receivable> element;
          if (recevalble.compareTo(array[index - 1]) === 1) {
            return true;
          }
        }

      const params: URLSearchParams = new URLSearchParams();
            params.set('page', '1');
            params.set('amount', '15');
            params.set('rate', 'true');

      operationService.getReceviables(1, 15).subscribe(
         data => { expect(data.every(isSort)).toBeTruthy(); }
       );
  });

});
