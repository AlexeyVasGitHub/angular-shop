import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        CartListComponent,
        CartItemComponent
    ],
    exports: [
        CartListComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class CartModule { }
