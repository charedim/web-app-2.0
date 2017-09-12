import { Component, OnInit } from '@angular/core';

import { FactorCustomersService } from '../../../core/services/factor-customers.services';
import { OperationService } from '../services/operation.service';
import { ShopingCartService } from '../services/shoping-cart.service/shoping-cart.service';
import { BankAccount } from '../../../core/models/bank-account';
import { Operation } from '../../../core/models/operation.model';

@Component({
  selector:    'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls:  ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  bankAccounts: BankAccount[];
  totalSum;
  numberOfRecivable;
  factorCustomersEmail = '';
  level = 0;
  selectedAccount: BankAccount;
  operationUuid: string;

  constructor( private shopingCartService: ShopingCartService,
               private operationService: OperationService,
               private factorCustomersService: FactorCustomersService) {
    this.totalSum          = this.shopingCartService.getTotalSum();
    this.numberOfRecivable = this.shopingCartService.getLength();
    this.factorCustomersService.getBankAccounts().subscribe( data => this.bankAccounts = data );
  }

  ngOnInit() {
  }

  chooseBankAccount() {
    this.operationUuid = this.operationService.createOperation(this.selectedAccount);
    this.factorCustomersService.getFactorCustomers().
    finally( () => this.level++)
    .subscribe (
    data => this.factorCustomersEmail = data.email );
  }

  finishPurchase() {
    this.shopingCartService.finishPurchase();
  }

  canclepuchase() {
    this.shopingCartService.canclePurchase();
  }

}
