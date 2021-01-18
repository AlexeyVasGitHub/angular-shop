import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [
    CartListComponent
  ],
  providers: [
    CartService
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
