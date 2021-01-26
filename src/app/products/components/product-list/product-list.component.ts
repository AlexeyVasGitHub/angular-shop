import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProductModel } from '../../models/product-model.interface';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  items: IProductModel[] = [];

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.productService.getProducts();
  }

  onBuyClicked(id: number): void {
    const item = this.items.find(x => x.id === id);
    if (item) {
      this.cartService.addProduct(item);
    }
  }
}
