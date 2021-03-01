import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageProductComponent, OrdersComponent, ProductsComponent } from './components';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [ProductsComponent, ManageProductComponent, OrdersComponent, AdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    SharedModule,
    MatButtonModule
  ]
})
export class AdminModule {
}
