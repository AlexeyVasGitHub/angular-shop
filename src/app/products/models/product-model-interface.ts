import { CategoryEnum } from './category-enum.enum';

export interface ProductModelInterface {
  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  isAvailable: boolean;
}
