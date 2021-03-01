import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartItem } from '../../models/cart-item.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  items: ICartItem[] = [];
  orderByArray = [{name: 'Price', value: 'price'}, {name: 'Count', value: 'count'}, {name: 'Name', value: 'name'}];
  selectedOrderBy = 'price';
  isAscending = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getProducts();
  }

  trackByItems(index: number, cartItem: ICartItem): string {
    return cartItem.item.name;
  }

  onChangeCount(params: any): void {
    const {id, count} = params;
    this.cartService.changeQuantity(id, count);
  }

  onDeleteItem(id: number): void {
    this.cartService.removeProduct(id);
    this.items = this.cartService.getProducts();
  }
}
