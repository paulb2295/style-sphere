import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";

export const PRODUCTS_ACTIONS_TYPES = {
    SET_PRODUCTS: 'SET_PRODUCTS',
} as const;

type ProductsActionType = keyof typeof PRODUCTS_ACTIONS_TYPES;

interface ProductsAction<T extends ProductsActionType, P> {
    type: typeof PRODUCTS_ACTIONS_TYPES[T];
    payload: P;
}

type ProductsActions =
    | ProductsAction<'SET_PRODUCTS', IProduct[]>;

export type {ProductsActions}
