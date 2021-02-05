import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductModel } from '../../models/product-model.interface';
import { CategoryEnum, GetCategoryName } from '../../models/category.enum';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: IProductModel | undefined;

  @Output() buyClicked = new EventEmitter<IProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    this.buyClicked.emit(this.product);
  }

  getProductCategory(value: CategoryEnum | undefined): string {
    if (!value) {
      return '';
    }
    return GetCategoryName(value);
  }
}
