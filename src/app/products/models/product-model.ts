import { ProductModelInterface } from './product-model-interface';
import { CategoryEnum } from './category-enum.enum';

export class ProductModel implements ProductModelInterface {
  category: CategoryEnum;
  description: string;
  isAvailable: boolean;
  name: string;
  price: number;

  // Посмотрите как уменьшить объек этого кода как минимум в 2 разаэ
  // 1. Просто используйте свойства без конструктора
  // 2. Или используйте модификатор public для параметров конструктора
  constructor(name?: string, price?: number, isAvailable?: boolean, description?: string, category?: CategoryEnum) {
    this.name = name || '';
    this.price = price || 0;
    this.isAvailable = isAvailable || false;
    this.description = description || '';
    this.category = category || CategoryEnum.Category1;
  }
}
