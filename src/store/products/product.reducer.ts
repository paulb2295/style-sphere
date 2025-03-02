import {ProductsState} from "./products.state.ts";
import {fetchProductsFailed, fetchProductsStart, fetchProductsSuccess} from "./product.action.ts";
import {UnknownAction} from "redux";

const INITIAL_STATE: ProductsState = {
    allProducts: [],
    isLoading: false,
    error: null,
};

export const productsReducer = (
    state: ProductsState = INITIAL_STATE,
    action: UnknownAction) : ProductsState => {
    if(fetchProductsStart.match(action)){
        return {
            ...state,
            isLoading: true,
        };
    }
    if(fetchProductsSuccess.match(action)){
        return {
            ...state,
            allProducts: action.payload,
            isLoading: false,
        };
    }
    if(fetchProductsFailed.match(action)){
        return {
            ...state,
            isLoading: false,
            error: action.payload,
        }
    }
    return state;
}
