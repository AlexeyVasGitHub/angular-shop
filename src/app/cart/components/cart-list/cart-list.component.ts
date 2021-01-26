import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartItem } from '../../models/cart-item.interface';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  items: ICartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getProducts();
  }

  trackByItems(index: number, cartItem: ICartItem): string {
    return cartItem.item.name;
  }
}
