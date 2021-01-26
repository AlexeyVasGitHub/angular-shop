import { Injectable } from '@angular/core';
import { IProductModel } from '../models/product-model.interface';
import { CategoryEnum } from '../models/category.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): IProductModel[] {
    return [{id: 1, name: 'A product', price: 100, isAvailable: true, category: CategoryEnum.Category1, description: 'Test Description 1'},
      {id: 2, name: 'B product', price: 90, isAvailable: true, category: CategoryEnum.Category2, description: 'Test Description 2'},
      {id: 3, name: 'C product', price: 125, isAvailable: false, category: CategoryEnum.Category2, description: 'Test Description 3'}];
  }
}
