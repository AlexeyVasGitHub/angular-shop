import { Component, OnInit } from '@angular/core';
import { ProductModelInterface } from '../../../products/models/product-model-interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  items: ProductModelInterface[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getProducts();
  }

  trackByItems(index: number, item: ProductModelInterface): string {
    return item.name;
  }
}
