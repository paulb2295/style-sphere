import {ICartItem} from "../../utils/interfaces/cart/ICartItem.ts";

export const CART_ACTION_TYPES = {
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
    SET_CART_ITEMS: 'SET_CART_ITEMS',
} as const;

type CartActionsTypes = keyof typeof CART_ACTION_TYPES;

interface CartAction<T extends CartActionsTypes, P> {
    type: typeof CART_ACTION_TYPES[T];
    payload: P;
}

type CartActions =
    | CartAction<"SET_IS_CART_OPEN", boolean>
    | CartAction<"SET_CART_ITEMS",  ICartItem[]>;

export type {CartActions}
