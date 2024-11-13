import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full'}, // hoffentlich die Startseite
    // Durch leeren Pfad '' leitet redirect direkt auf Products Seite
    //{ path: 'products', component: ProductsComponent},
    { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
    //{ path: 'cart', component: CartComponent}
    { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
    { path: 'product/:id', loadChildren: () => import('./products/product-detail/product-detail.module').then(m => m.ProductDetailModule) }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
