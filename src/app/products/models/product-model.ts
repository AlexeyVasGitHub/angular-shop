import { IProductModel } from './product-model.interface';
import { CategoryEnum } from './category.enum';

// Вы видели предыдущий пул реквест?
export class ProductModel implements IProductModel {
  category: CategoryEnum;
  description: string;
  isAvailable: boolean;
  name: string;
  price: number;
  id: number;

  constructor(id?: number, name?: string, price?: number, isAvailable?: boolean, description?: string, category?: CategoryEnum) {
    this.name = name || '';
    this.price = price || 0;
    this.isAvailable = isAvailable || false;
    this.description = description || '';
    this.category = category || CategoryEnum.Category1;
    this.id = id || 0;
  }
}
