import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  providers: [
    ProductsService
  ],
  exports: [
    ProductListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ProductsModule { }
