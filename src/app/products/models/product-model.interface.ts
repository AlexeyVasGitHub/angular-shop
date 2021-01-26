import { CategoryEnum } from './category.enum';

export interface IProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  isAvailable: boolean;
}
