import { Component, OnInit } from '@angular/core';
import { ProductModelInterface } from '../../../products/models/product-model-interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  // При такой организации у вас будут дубли в корзине, если купить больше 1шт одного и того же товара
  items: ProductModelInterface[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getProducts();
  }

  trackByItems(index: number, item: ProductModelInterface): string {
    return item.name;
  }
}
