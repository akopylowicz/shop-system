import { ActionReducerMap } from '@ngrx/store';
import { productsReducer }from './products/state/products.reducer';
import { ProductsState } from './products/state/products.state';
import { CartState, cartReducer } from './cart/state/cart.reducer';

export interface AppState {
  products: ProductsState;
  cart : CartState;
}

export const reducers: ActionReducerMap<AppState> = {
  products: productsReducer,
  cart : cartReducer
};