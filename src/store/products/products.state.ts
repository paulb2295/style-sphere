import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";

interface ProductsState {
    allProducts: IProduct[];
    isLoading: boolean;
    error: Error | null;
}

export type {ProductsState};
