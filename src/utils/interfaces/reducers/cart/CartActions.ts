import {ICartItem} from "../../cart/ICartItem.ts";


export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
    DELETE_ITEM_FROM_CART: 'DELETE_ITEM_FROM_CART',
    INCREASE_DECREASE_QUANTITY: 'INCREASE_DECREASE_QUANTITY',
} as const;

type CartActionsTypes = keyof typeof CART_ACTION_TYPES;

interface CartAction<T extends CartActionsTypes, P> {
    type: typeof CART_ACTION_TYPES[T];
    payload: P;
}

type CartActions =
    | CartAction<"SET_IS_CART_OPEN", boolean>
    | CartAction<"SET_CART_ITEMS", {cartItems: ICartItem[], cartTotal: number, cartCount: number}>;

export type {CartActions}
