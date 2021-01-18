import { Injectable } from '@angular/core';
import { ProductModelInterface } from '../../products/models/product-model-interface';
import { CategoryEnum } from '../../products/models/category-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts(): ProductModelInterface[] {
    return [{name: 'A product', price: 1, isAvailable: true, category: CategoryEnum.Category1, description: 'Test Description 1'}];
  }
}
