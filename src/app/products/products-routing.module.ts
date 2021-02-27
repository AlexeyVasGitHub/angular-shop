import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: '',
  component: ProductsComponent,
  children: [
    {
      path: 'products-list',
      component: ProductListComponent
    },
    {
      path: 'product/:productID',
      component: ProductComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
  static components = [ProductsComponent, ProductListComponent, ProductComponent];
}
