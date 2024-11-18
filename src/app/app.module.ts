import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';
import { provideHttpClient } from '@angular/common/http';
import { ProductsModule } from './products/products.module';

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
    ProductsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}