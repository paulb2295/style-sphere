import {IProduct} from "../../shop/IProduct.ts";

interface ProductsState {
    products: IProduct[];
    allProducts: IProduct[];
}

export type {ProductsState};
