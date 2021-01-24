import { CategoryEnum } from './category-enum.enum';

export interface ProductModelInterface {
  id: number;
  name: string;
  description: string;
  price: number;
  category: CategoryEnum;
  isAvailable: boolean;
}
