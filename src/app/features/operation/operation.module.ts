import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CovalentTeraDataModule } from '../../core/covalent-teradata.module';
import { ShopingCartService } from './services/shoping-cart.service/shoping-cart.service';
import { OperationService } from './services/operation.service';
import { CalcDiscountService } from './services/calc-discount.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item/shopping-cart-item.component';
import { OperationComponent} from './operation.component';
import { OperationDatagridComponent } from './operation-datagrid/operation-datagrid.component';
import { FinishPurchaseComponent} from './finish-purchase/finish-purchase.component';
// import { OperationFilterComponent} from './operation-filter/operation-filter.component';
import { PurchaseComponent} from './purchase/purchase.component';
import {CoreModule} from '../../core/core.module';
import 'hammerjs';
@NgModule({
  entryComponents: [
      PurchaseComponent,
      FinishPurchaseComponent
  ],

  declarations: [
     ShoppingCartComponent,
     ShoppingCartItemComponent,
     OperationComponent,
     OperationDatagridComponent,
     FinishPurchaseComponent,
    //  OperationFilterComponent,
     PurchaseComponent
    ],

 imports: [
   CovalentTeraDataModule,
   FormsModule,
   CoreModule

   ],

  providers: [
      ShopingCartService,
      OperationService,
      CalcDiscountService
    ],

  exports: [
      ShoppingCartComponent,
      ShoppingCartItemComponent,
      OperationComponent,
      OperationDatagridComponent,
      FinishPurchaseComponent,
      // OperationFilterComponent,
      PurchaseComponent
  ]

})
export class OperationModule { }
