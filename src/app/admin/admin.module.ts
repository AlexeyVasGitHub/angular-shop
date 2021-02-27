import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ManageProductComponent } from './components/manage-product/manage-product.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [ProductsComponent, ManageProductComponent, OrdersComponent, AdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
