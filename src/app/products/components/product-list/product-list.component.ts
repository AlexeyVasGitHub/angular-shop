import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProductModel } from '../../models/product-model.interface';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  constructor(public productService: ProductsService, private cartService: CartService) { }

  onBuyClicked(item: IProductModel): void {
    if (item) {
      this.cartService.addProduct(item);
    }
  }
}
