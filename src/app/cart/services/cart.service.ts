import { Injectable } from '@angular/core';
import { ICartItem } from '../models/cart-item.interface';
import { IProductModel } from '../../products/models/product-model.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartArray: ICartItem[] = [];

  constructor() { }

  getProducts(): ICartItem[] {
    return this.cartArray;
  }

  addProduct(product: IProductModel): void {
    const correspondCartItem = this.cartArray.find(x => x.item.id === product.id);
    if (correspondCartItem) {
      correspondCartItem.count += 1;
    } else {
      this.cartArray.push({
        count: 1,
        item: product
      });
    }
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
