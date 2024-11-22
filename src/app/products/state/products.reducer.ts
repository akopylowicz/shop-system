import { createReducer, on } from '@ngrx/store';
import { ProductsState, initialState } from './products.state';
import * as ProductsActions from './products.actions';

export const productsReducer = createReducer(
  initialState,
  on(ProductsActions.loadProducts, (state, { products }) => ({
    ...state,
    products: products
  }))
);