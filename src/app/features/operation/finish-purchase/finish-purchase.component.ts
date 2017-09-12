import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';

import {ShopingCartService} from '../services/shoping-cart.service/shoping-cart.service';
@Component({
  templateUrl: './finish-purchase.component.html',
  styleUrls:  ['./finish-purchase.component.css']
})
export class FinishPurchaseComponent implements OnInit {

final_amount;
leftCredit;
numOfRecivables;

constructor(private _dialogService: TdDialogService, private shopingCartService: ShopingCartService) {
  this.final_amount      = this.shopingCartService.getTotalSum();
  this.numOfRecivables   = this.shopingCartService.getLength();
  this.leftCredit        = this.shopingCartService.supplierCreditLeft;
}
ngOnInit() {
}

closeDialog() {
  this._dialogService.closeAll();
}

}
