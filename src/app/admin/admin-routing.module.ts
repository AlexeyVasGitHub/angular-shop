import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from '../products/products.component';
import { ManageProductComponent, OrdersComponent } from './components';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { AuthGuard } from '../core/guards/auth.guard';


const routes: Routes = [{
  path: '',
  component: AdminComponent,
  canActivate: [AuthGuard],
  canActivateChild: [AuthGuard],
  children: [
    {
      path: 'products',
      component: ProductsComponent,
    },
    {
      path: 'orders',
      component: OrdersComponent,
    },
    {
      path: 'product/add',
      component: ManageProductComponent,
    },
    {
      path: 'product/edit/:productID',
      component: ManageProductComponent,
      canDeactivate: [CanDeactivateGuard]
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [AdminComponent, OrdersComponent, ProductsComponent, ManageProductComponent];
}
