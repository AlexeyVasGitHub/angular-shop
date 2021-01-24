import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItemInterface } from '../../models/cart-item-interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: CartItemInterface | undefined;

  @Output() changeCount = new EventEmitter<number>();

  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeCount(count: number): void {
    this.changeCount.emit(count);
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem?.item.id);
  }
}
