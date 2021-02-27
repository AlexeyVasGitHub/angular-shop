import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartListComponent, ProcessOrderComponent } from './components';
import { IsCartEmptyGuard } from './guards/is-cart-empty.guard';


const routes: Routes = [{
  path: 'cart',
  component: CartListComponent,
  children: [
    {
      path: 'order',
      component: ProcessOrderComponent,
      canActivate: [IsCartEmptyGuard]
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {
  static components = [CartListComponent, ProcessOrderComponent];
}
