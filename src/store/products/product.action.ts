import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import {PRODUCTS_ACTIONS_TYPES} from "./product.types.ts";
import {Action, ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils.ts";

export type FetchCategoriesStart = Action<PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_START>;
export type FetchCategoriesSuccess = ActionWithPayload<PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_SUCCESS, IProduct[]>
export type FetchCategoriesFailure = ActionWithPayload<PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_FAILED, Error>

export const fetchProductsStart = withMatcher((): FetchCategoriesStart => {
    return createAction(PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_START);
});

export const fetchProductsSuccess = withMatcher((products: IProduct[]): FetchCategoriesSuccess => {
    return createAction(PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_SUCCESS, products);
});

export const fetchProductsFailed = withMatcher((err: Error): FetchCategoriesFailure => {
    return createAction(PRODUCTS_ACTIONS_TYPES.FETCH_PRODUCTS_FAILED, err)
});



