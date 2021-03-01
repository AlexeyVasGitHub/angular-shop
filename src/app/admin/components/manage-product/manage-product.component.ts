import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../products/models/product-model';
import { IProductModel } from '../../../products/models/product-model.interface';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router, UrlTree } from '@angular/router';
import { ProductsService } from '../../../products/services/products.service';
import { CanComponentDeactivate } from '../../../core/interfaces/can-component-deactivate.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.css']
})
export class ManageProductComponent implements OnInit, CanComponentDeactivate {
  product: ProductModel | undefined;
  originalProduct: ProductModel | undefined;

  constructor(private productService: ProductsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const observer = {
      next: (product: IProductModel | undefined) => {
        if (product) {
          console.log(product);
          this.product = {...product};
          this.originalProduct = {...product};
        }
      },
      error: (err: any) => console.log(err)
    };
    // @ts-ignore
    this.route.paramMap.pipe(switchMap((params: ParamMap) => this.productService.getProduct(+params.get('productID'))))
      .subscribe(observer);
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.originalProduct || !this.product){
      return true;
    }
    const flags = Object.keys(this.originalProduct).map(key => {
      // @ts-ignore
      return this.originalProduct[key] === this.product[key];
    });
    if (flags.every(el => el)) {
      return true;
    }
    return false;
  }

  onSave(): void {
    if (!this.product) {
      return;
    }
    const product: IProductModel = {...this.product};
    if (product.id) {
      this.productService.updateProduct(product);
      this.router.navigate(['/admin']);
    }
    else {
      this.productService.addProduct(product);
      this.onGoBack();
    }
    this.originalProduct = {...this.product};
  }

  onGoBack(): void {
    this.router.navigate(['./'], {relativeTo: this.route});
  }
}
