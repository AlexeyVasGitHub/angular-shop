import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProductModel } from '../../models/product-model.interface';
import { CategoryEnum, GetCategoryName } from '../../models/category.enum';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: IProductModel | undefined;

  @Output() buyClicked = new EventEmitter<IProductModel>();

  constructor(private route: ActivatedRoute, public productService: ProductsService) { }

  ngOnInit(): void {
    const observer = {
      next: (product: IProductModel | undefined) => {
        if (product) {
          this.product = {...product};
        }
        },
      error: (err: any) => console.log(err)
    };
    // @ts-ignore
    this.route.paramMap.pipe(switchMap((params: ParamMap) => this.productService.getProduct(+params.get('productID'))))
      .subscribe(observer);
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
