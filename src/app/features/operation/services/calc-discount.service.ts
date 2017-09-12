import { Injectable, OnInit} from '@angular/core';
import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Receivable } from '../../../core/models/receivable.model';

  // const AD_VALOREM_RATE            = (0.01 / 100);
  // const IOF_RATE_PER_DAY           = (1.5 / 100 / 365);
  // const IOF                        = (0.38 / 100);
  // const DEFAULT_TAC_PER_RECEIVABLE = 3;
  // const DEFAULT_FLOAT              = 1;
  // const PRECISION                  = 2;
  // const TAC                        = 20;
  // const MONTH_DAYS                 = 30;

  const TAC                        = 20;
  const IOF                        = (0.38 / 100);


@Injectable()
export class CalcDiscountService {

  calcOperation( receivables: Receivable[] ): number {
    const outstanding_value_sum      = receivables.reduce((a, b) =>  a + b.outstanding_value, 0);
    const profit_from_rate_sum       = receivables.reduce((a, b) =>  a + b.profit_from_rate, 0);
    const iof_addition               =  IOF * (outstanding_value_sum - profit_from_rate_sum);
    const total_deduction_amount_sum = receivables.reduce((a, b) =>  a + b.total_deduction_amount, 0);
    const to_discount                = total_deduction_amount_sum + iof_addition + TAC;
    const total_to_pay               =  (outstanding_value_sum - to_discount);
     return total_to_pay;
  }

  // calcReceivable(receivable: Receivable) {
  //   receivable.fee = TAC;
  //   let float = DEFAULT_FLOAT;
  //   receivable.interest_total = this.interest(receivable);
  //   receivable.addValorem = this.addValorem(receivable);
  //   receivable.dailyIof = this.dailyIof(receivable);
  //   receivable.to_be_paid = receivable.interest_total + receivable.addValorem  + receivable.dailyIof  + receivable.fee;
  // }

//
//   interest(receivable: Receivable) {
//     receivable.original_amount * this.numOfDays(receivable.realPaymentDay) * (Number(receivable.rate) / MONTH_DAYS)
//   }
//
//   numOfDays(date: string): number {
//     var oneDay     = 24 * 60 * 60 * 1000;
//     var firstDate  = new Date();
//     var secondDate = new Date(date);
//     var diffDays   = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
//      return diffDays;
//   }
//
//   addValorem(receivable: Receivable) {
//     receivable.original_amount * AD_VALOREM_RATE;
//   }
//
// dailyIof(receivable: Receivable) {
//   (receivable.original_amount - receivable.interest_total - receivable.addValorem ) * this.numOfDays(receivable.due_date) * IOF_RATE_PER_DAY
// }



}
