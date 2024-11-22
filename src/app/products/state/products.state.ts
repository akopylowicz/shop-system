import { Product } from "src/app/models/product.model";

export interface ProductsState {
  products: Product[];
}

export const initialState: ProductsState = {
  products: [],
};