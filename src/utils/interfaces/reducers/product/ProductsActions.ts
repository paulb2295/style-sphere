import {IProduct} from "../../shop/IProduct.ts";

export const PRODUCTS_ACTIONS_TYPES = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    FETCH_PRODUCTS_BY_CATEGORY: 'FETCH_PRODUCTS_BY_CATEGORY',
} as const;

type ProductsActionType = keyof typeof PRODUCTS_ACTIONS_TYPES;

interface ProductsAction<T extends ProductsActionType, P> {
    type: typeof PRODUCTS_ACTIONS_TYPES[T];
    payload: P;
}

type ProductsActions =
    | ProductsAction<'SET_PRODUCTS', IProduct[]>
    | ProductsAction<'FETCH_PRODUCTS_BY_CATEGORY', IProduct[]>

export type {ProductsActions}


