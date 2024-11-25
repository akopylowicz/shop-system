import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full'},
    { path: 'products', loadChildren: () => import('./products/component/products.component').then(m => m.ProductsComponent) },
    { path: 'cart', loadChildren: () => import('./cart/component/cart.component').then(m => m.CartComponent) },
    { path: 'product/:id', loadChildren: () => import('./products/product-detail/product-detail.module').then(m => m.ProductDetailModule) },
    { path: '**', loadComponent: () => import('./route-not-found/route-not-found.component').then(m => m.RouteNotFoundComponent) },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
