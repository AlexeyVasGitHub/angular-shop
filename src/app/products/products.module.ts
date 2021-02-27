import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsRoutingModule.components,
    ProductsComponent,
  ],
  imports: [
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    SharedModule
  ]
})
export class ProductsModule { }
