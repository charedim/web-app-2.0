import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { Receivable } from '../../../../core/models/receivable.model';
import { ShopingCartService } from '../../services/shoping-cart.service/shoping-cart.service';
@Component({
  selector:    'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls:  ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent implements OnInit {

@Input()item: Receivable;

removeFromCart = false;

  constructor(private shopingCartService: ShopingCartService) { }
  ngOnInit() {
  }


removeItem() {
   this.shopingCartService.removeItem(this.item);
}

}
