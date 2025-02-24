import {ProductsState} from "./products.state.ts";
import {PRODUCTS_ACTIONS_TYPES, ProductsActions} from "./product.types.ts";

const INITIAL_STATE: ProductsState = {
    allProducts: [],
};

export const productsReducer = (state: ProductsState = INITIAL_STATE, action: ProductsActions) => {
    const {type, payload} = action;
    switch (type) {
        case PRODUCTS_ACTIONS_TYPES.SET_PRODUCTS :
            return {
                ...state,
                allProducts: payload
            };
        default:
            return state;
    }
}
