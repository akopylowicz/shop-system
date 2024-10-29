import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full'}, // hoffentlich die Startseite
    // Durch leeren Pfad '' leitet redirect direkt auf Products Seite
    { path: 'products', component: ProductsComponent},
    { path: 'cart', component: CartComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
