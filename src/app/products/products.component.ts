import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { loadProducts } from './state/products.actions';
import { addToCart } from '../cart/state/cart.actions';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products$: Observable<Product[]> = of([]);

  //constructor(private store: Store) {
  //  this.products$ = this.store.select(selectAllProducts);
  //}

  constructor(
    private productsService: ProductsService,
    private store: Store
  ) {}


  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.store.dispatch(loadProducts({ products }));
    });

    this.products$ = this.store.select(state => state.products.products);
  }

  addToCart(product: Product): void {
    this.store.dispatch(addToCart({ product }));
  }
}