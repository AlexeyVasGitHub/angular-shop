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
      // не лучшее решение использовать один и тот же компонент
      // как составляющий список элемент и как отдельная страница
      // лучше создать ProductViewComponent или ProductDetailsComponent
      // а то получается, что компонент иногда может отображать что-то через инпут,
      // а иногда сам "где-то" берет данные
      // такой получается гибрид презентационного и непрезентационного компонента
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
