import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { selectCartItems, selectCartTotal } from './state/cart.selectors';
import { removeFromCart, clearCart } from './state/cart.actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartItems$: Observable<Product[]>;
  cartTotal$: Observable<number>;

  constructor(private store: Store) {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartTotal$ = this.store.select(selectCartTotal);
  }

  removeFromCart(productId: number): void {
    this.store.dispatch(removeFromCart({ productId }));
  }

  clearCart(): void {
    this.store.dispatch(clearCart());
  }
}