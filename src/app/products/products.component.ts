import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from '../cart/cart.component';
import { ProductsService } from '../products.service';

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
})
export class ProductsComponent {

  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      console.log(data); 
      this.products = data;
    });
  }

  addToCart(product: Product) {
    
  }
}
