import {CartState} from "./cart.state.ts";
import {UnknownAction} from "redux";
import {
    addItemToCart,
    deleteItemFromCart,
    increaseDecreaseItemQuantity,
    setCartItems,
    setIsCartOpen
} from "./cart.action.ts";

const INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
}

export const cartReducer = (
    state: CartState = INITIAL_STATE,
    action: UnknownAction): CartState => {
    if (setIsCartOpen.match(action)) {
        return {
            ...state,
            isCartOpen: action.payload,
        };
    }
    if (setCartItems.match(action) ||
        addItemToCart.match(action) ||
        deleteItemFromCart.match(action) ||
        increaseDecreaseItemQuantity.match(action)
    ) {
        return {
            ...state,
            cartItems: action.payload
        };
    }
    return state;
}
