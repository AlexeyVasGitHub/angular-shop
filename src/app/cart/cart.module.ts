import { NgModule } from '@angular/core';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        CartListComponent,
        CartItemComponent
    ],
    exports: [
        CartListComponent,
    ],
  imports: [
    MatCardModule,
    MatButtonModule,
    MatOptionModule,
    MatCheckboxModule,
    MatSelectModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    SharedModule
  ]
})
export class CartModule { }
