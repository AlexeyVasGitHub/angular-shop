import { Injectable } from '@angular/core';
import { ICartItem } from '../models/cart-item.interface';
import { IProductModel } from '../../products/models/product-model.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public totalQuantity = 0;
  public totalSum = 0;

  get isEmptyCart(): boolean {
    return this.cartProducts.length === 0;
  }

  private cartProducts: ICartItem[] = [];

  constructor() { }

  getProducts(): ICartItem[] {
    return this.cartProducts;
  }

  addProduct(product: IProductModel, count = 1): void {
    const correspondCartItem = this.cartProducts.find(x => x.item.id === product.id);
    if (correspondCartItem) {
      correspondCartItem.count += count;
    } else {
      this.cartProducts.push({
        count,
        item: product
      });
    }
  }

  removeProduct(id: number): void {
    const cartItemIndex = this.cartProducts.findIndex(x => x.item.id === id);
    if (cartItemIndex >= 0){
      this.cartProducts.splice(cartItemIndex, 1);
    }
  }

  increaseQuantity(id: number, value = 1): void {
    this.changeQuantity(id, value);
  }

  decreaseQuantity(id: number, value = -1): void {
    this.changeQuantity(id, value);
  }

  removeAllProducts(): void {
    this.cartProducts = [];
  }

  updateCartData(): void {
    this.totalQuantity = this.cartProducts.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.count;
    }, 0);

    this.totalSum = this.cartProducts.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.item.price;
    }, 0);
  }

  private changeQuantity(id: number, value: number): void {
    const correspondCartItem = this.cartProducts.find(x => x.item.id === id);
    if (correspondCartItem) {
      correspondCartItem.count = correspondCartItem.count + value;
      if (correspondCartItem.count <= 0) {
        this.removeProduct(id);
      }
    }
  }
}
