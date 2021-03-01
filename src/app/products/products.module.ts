import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    ProductsRoutingModule.components,
  ],
  imports: [
    ProductsRoutingModule,
    MatCardModule,
    MatButtonModule,
    CoreModule,
    SharedModule
  ]
})
export class ProductsModule { }
