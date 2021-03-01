import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartItem } from '../../models/cart-item.interface';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: ICartItem | undefined;

  @Output() changeCount = new EventEmitter<any>();

  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onChangeCount(count: number): void {
    if (this.cartItem){
      this.cartItem.count = count;
      this.changeCount.emit({id: this.cartItem?.item.id, count});
    }
  }

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem?.item.id);
  }
}
