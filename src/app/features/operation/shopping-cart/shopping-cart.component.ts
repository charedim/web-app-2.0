import { Component, OnInit , Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Receivable} from '../../../core/models/receivable.model';
import { ShopingCartService } from '../services/shoping-cart.service/shoping-cart.service';
import { UserService } from '../../../core/services/user-services/user-service';

@Component({
  selector:    'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls:  ['./shopping-cart.component.css'],
  providers: []
})
export class ShoppingCartComponent implements OnInit {
  cartItems: Receivable[];

  constructor(private shopingCartService: ShopingCartService) {
  }

  ngOnInit() {
  // subscribe to itemsChange event in shopping cart item that emmit
  // when the items in shopping card changes
  // and update this.cartItems
   this.cartItems = this.shopingCartService.getItems();
   this.shopingCartService.itemsChange.subscribe(
    (items: Receivable[]) => {
      this.cartItems = items;
    }
  );
 }

  getItems() {
  }

 purchase() {
   this.shopingCartService.purchase();
 }

}
