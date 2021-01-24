import { ProductModelInterface } from '../../products/models/product-model-interface';

export interface CartItemInterface {
  item: ProductModelInterface;
  count: number;
}
