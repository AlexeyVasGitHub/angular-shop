import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { FirstComponent } from './first/first.component';
import { CoreModule } from './core/core.module';
import { PathNotFoundComponent } from './layout/components/path-not-found/path-not-found.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PathNotFoundComponent,
  ],
  imports: [
    CartModule,
    ProductsModule,
    BrowserModule,
    CoreModule,
    MatGridListModule,
    // MUST BE LAST
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
