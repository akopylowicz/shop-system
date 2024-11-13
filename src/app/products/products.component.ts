import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Produkt A',
      image: 'assets/images/product-a.jpg',
      description: 'Beschreibung für Produkt A',
      price: 29.99
    },
    {
      id: 2,
      name: 'Produkt B',
      image: 'assets/images/product-b.jpg',
      description: 'Beschreibung für Produkt B',
      price: 19.99
    }
  ];

  addToCart(product: Product) {
    // Noch implementieren
  }
}
