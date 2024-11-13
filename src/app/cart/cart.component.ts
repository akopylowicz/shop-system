import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CartItem {
  id: number;
  name: string;
  price: number;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {

  cartItems: CartItem[] = [
    { id: 1, name: 'Heckenschere Test', price: 5.00 },
    { id: 2, name: 'Auto Test', price: 300000.00 }
  ];
  // Erstmal fest im Code zum Testen, später noch Funktionen um Sachen in den Warenkorb hinzuzufügen/Entfernen

  removeFromCart(item: CartItem) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
