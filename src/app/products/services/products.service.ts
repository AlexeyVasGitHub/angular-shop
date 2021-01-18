import { Injectable } from '@angular/core';
import { ProductModelInterface } from '../models/product-model-interface';
import { CategoryEnum } from '../models/category-enum.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProductModelInterface[] {
    return [{name: 'A product', price: 1, isAvailable: true, category: CategoryEnum.Category1, description: 'Test Description 1'},
      {name: 'B product', price: 2, isAvailable: true, category: CategoryEnum.Category2, description: 'Test Description 2'},
      {name: 'C product', price: 3, isAvailable: false, category: CategoryEnum.Category2, description: 'Test Description 3'}];
  }
}
