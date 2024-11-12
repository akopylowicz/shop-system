import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app.routes";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { CartComponent } from "./cart/cart.component";
import { ProductsModule } from "./products/products.module";
import { CartModule } from "./cart/cart.module";
import { SharedModule } from "./shared/shared.module";
import { HeaderComponent } from "./shared/header.component";
import { FooterComponent } from "./shared/footer.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [], 
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}