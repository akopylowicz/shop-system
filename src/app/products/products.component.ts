import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ProductsService } from '../products.service';
import { CartService } from '../cart/cart.service';

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers:[ProductsService]
})

export class ProductsComponent {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
    ) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      console.log(data); 
      this.products = data;
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
