import { IProductModel } from '../../products/models/product-model.interface';

export interface ICartItem {
  item: IProductModel;
  count: number;
}
