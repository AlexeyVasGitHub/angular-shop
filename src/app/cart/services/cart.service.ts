import { Injectable } from '@angular/core';
import { CartItemInterface } from '../models/cart-item-interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartArray: CartItemInterface[] = [];

  constructor() { }

  getProducts(): CartItemInterface[] {
    return this.cartArray;
  }

  getCountTotal(): number {
    return this.cartArray.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.count;
    }, 0);
  }

  getPriceTotal(): number {
    return this.cartArray.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.item.price;
    }, 0);
  }
}
