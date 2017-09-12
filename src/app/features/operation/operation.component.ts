import { Component, OnInit } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { DialogPosition } from '@angular/material';

import { ShopingCartService } from './services/shoping-cart.service/shoping-cart.service';
import { PurchaseComponent } from './purchase/purchase.component';
import { FinishPurchaseComponent } from './finish-purchase/finish-purchase.component';

@Component({
  selector:    'app-operation',
  templateUrl: './operation.component.html',
  styleUrls:  ['./operation.component.css']
})
export class OperationComponent implements OnInit {

   purchase = false;

    constructor( private shopingCartService: ShopingCartService,
                 private _dialogService: TdDialogService,
                 private _viewContainerRef: ViewContainerRef) {
      this.shopingCartService.purchaseEvent.subscribe      (res => {this.purchase = true, this.openPurchase(); });
      this.shopingCartService.canclePurchaseEvent.subscribe(res => {this.purchase = false, this.closePurchase(); });
      this.shopingCartService.finishPurchaseEvent.subscribe(res => {this.purchase = false, this.openFinishAlert(); });
  }

  ngOnInit() {
  }

  openFinishAlert(): void {
    this._dialogService.closeAll();
    // this._dialogService.open(FinishPurchaseComponent,{ disableClose: false, height: "60%", width:"60%"})
    window.location.reload();
  }


 closePurchase(): void {
  this._dialogService.closeAll();
  }

  openPurchase(): void {
    this._dialogService.open(PurchaseComponent, {disableClose: true, height: '100%', width: '30%', position: {right: '0', top: '0'}} );
 }

}
