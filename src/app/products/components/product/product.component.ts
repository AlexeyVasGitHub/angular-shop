import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModelInterface } from '../../models/product-model-interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: ProductModelInterface | undefined;

  @Output() buyClicked = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    this.buyClicked.emit(this.product?.id);
  }
}
