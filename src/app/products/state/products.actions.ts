import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/models/product.model';

export const loadProducts = createAction(
  '[Products] Load Products',
  props<{ products: Product[] }>()
);