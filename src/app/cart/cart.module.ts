import { NgModule } from '@angular/core';
import { CartItemComponent, CartListComponent, ProcessOrderComponent } from './components';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart.component';
import { RouterModule } from '@angular/router';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartComponent,
    ProcessOrderComponent
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
    SharedModule,
    RouterModule,
    CartRoutingModule
  ]
})
export class CartModule {
}
