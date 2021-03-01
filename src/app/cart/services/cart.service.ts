import { Injectable } from '@angular/core';
import { ICartItem } from '../models/cart-item.interface';
import { IProductModel } from '../../products/models/product-model.interface';
import { LocalStorageService } from '../../core/services';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public totalQuantity = 0;
  public totalSum = 0;

  get isEmptyCart(): boolean {
    return this.cartProducts ? this.cartProducts.length === 0 : true;
  }

  public get cartProducts(): ICartItem[] | null {
    return this.localStorageService.getItem('cart-products');
  }

  public set cartProducts(value: ICartItem[] | null) {
    if (value === null) {
      this.localStorageService.removeItem('cart-products');
    }
    else {
      this.localStorageService.setItem('cart-products', value);
    }
  }

  constructor(
    private localStorageService: LocalStorageService
  ) {
  }

  getProducts(): ICartItem[] {
    return this.cartProducts ? this.cartProducts : [];
  }

  addProduct(product: IProductModel, count = 1): void {
    const products = this.getProducts();
    const correspondCartItem = products.find(x => x.item.id === product.id);
    if (correspondCartItem) {
      correspondCartItem.count += count;
    }
    else {
      products.push({
        count,
        item: product,
        name: product.name,
        price: product.price
      });
    }

    this.cartProducts = products;
  }

  removeProduct(id: number): void {
    const products = this.getProducts();
    const cartItemIndex = products.findIndex(x => x.item.id === id);
    if (cartItemIndex >= 0) {
      products.splice(cartItemIndex, 1);
    }

    this.cartProducts = products;
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
    const products = this.getProducts();
    this.totalQuantity = products.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.count;
    }, 0);

    this.totalSum = products.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.item.price;
    }, 0);
  }

  changeQuantity(id: number, value: number): void {
    const products = this.getProducts();
    const correspondCartItem = products.find(x => x.item.id === id);
    if (correspondCartItem) {
      correspondCartItem.count = correspondCartItem.count + value;
      if (correspondCartItem.count <= 0) {
        this.removeProduct(id);
      }
    }

    this.cartProducts = products;
  }
}
