import { CommonModule } from '@angular/common';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductsModule } from './products/products.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { productsReducer } from './products/state/products.reducer';
import { cartReducer } from './cart/state/cart.reducer';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent
],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    ProductsModule,
    StoreModule.forRoot({
      products: productsReducer,
      cart: cartReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}