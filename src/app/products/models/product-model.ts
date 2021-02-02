import { IProductModel } from './product-model.interface';
import { CategoryEnum } from './category.enum';

export class ProductModel implements IProductModel {
  category: CategoryEnum = 0;
  description = '';
  isAvailable = false;
  name = '';
  price = 0;
  id = 0;

  constructor() {
  }
}
