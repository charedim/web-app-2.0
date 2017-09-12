import { Injectable, OnInit} from '@angular/core';
import {EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { Receivable } from '../../../../core/models/receivable.model';
import { ApiService } from '../../../../core/services/api.services';
import { FactorCustomersService } from '../../../../core/services/factor-customers.services';
import { CalcDiscountService } from '../calc-discount.service';
@Injectable()
export class ShopingCartService {

  // The service has events that emmited when the shopping cart items changes
  // total sum Contains the value of all receivable in shopping cart

  private cart:         Receivable[] = [];
  private totalSum =    0;
  supplierCreditLimit:  number;
  supplierCreditLeft:   number;
  itemsChange =         new EventEmitter<Receivable[]>();
  removeFromCart =      new EventEmitter<Receivable>();
  purchaseEvent =       new EventEmitter<Receivable[]>();
  canclePurchaseEvent = new EventEmitter<void>();
  finishPurchaseEvent = new EventEmitter<void>();

  constructor(private factorCustomersService: FactorCustomersService, private calcDiscountService: CalcDiscountService) {
    this.factorCustomersService. getFactorCustomers(). subscribe(
      data => { this.supplierCreditLimit = data.credit_limit_remaining; console.log('bb', data.credit_limit_remaining)}

    );
    this.updateCreditLimit();
  }

  updateCreditLimit() {
     this.supplierCreditLeft = this.supplierCreditLimit  - this.getTotalSum();
   }

  getItems() {
    return this.cart.slice();
  }
// check if receivable.final_amount not beeger than credit left
  addItem( itemToAdd: Receivable ): Boolean {
    if (this.cart.indexOf(itemToAdd) !== -1) {
      return false;
    }

    const expectedCartItems: Receivable[] = this.getItems();
        expectedCartItems.push(itemToAdd);
    const expectedOperationCalc = this.calcDiscountService.calcOperation(expectedCartItems);
    if (this.supplierCreditLimit < expectedOperationCalc) {
        alert('sorry you over your credit');
          return false;
      }
      this.cart.unshift(itemToAdd);
      this.updateDiscountSum();
      this.itemsChange.emit(this.cart);
      return true;
  }

  removeItem(itemToRemove: Receivable): Boolean {
    if (this.cart.indexOf(itemToRemove) === -1) {
      return false;
    }

    this.cart = this.cart.filter(item => item.uuid !== itemToRemove.uuid);
    this.updateDiscountSum();
    this.itemsChange.emit(this.cart);
    this.removeFromCart.emit(itemToRemove);
    return true;
  }

  updateDiscountSum () {
    this.totalSum = this.calcDiscountService.calcOperation(this.cart);
    this.supplierCreditLeft = this.supplierCreditLimit - this.totalSum;
  }

  getLength(): number {
  return this.cart.length;
  }

  getTotalSum(): number {
    if(this.getLength() > 0) {
     return this.totalSum;
   }
   else
      return 0;
  }


  purchase() {
    this.purchaseEvent.emit(this.cart);
  }

  canclePurchase() {
    this.canclePurchaseEvent.emit();
}

  finishPurchase() {
    this.cart = [];
    this.totalSum = 0;
    this.itemsChange.emit(this.cart);
    this.updateCreditLimit();
    this.finishPurchaseEvent.emit();
  }



}
