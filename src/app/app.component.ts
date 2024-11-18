import { Component } from '@angular/core';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shop-system';
  constructor(public cartService: CartService) {}
}
