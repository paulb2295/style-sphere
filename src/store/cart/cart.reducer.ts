import {CartState} from "./cart.state.ts";
import {CART_ACTION_TYPES, CartActions} from "./cart.types.ts";

const INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (state: CartState = INITIAL_STATE, action: CartActions): CartState => {
    const {type, payload} = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload
            };
        default:
            return state;
    }
}
