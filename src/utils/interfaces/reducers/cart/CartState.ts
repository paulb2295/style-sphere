import {ICartItem} from "../../cart/ICartItem.ts";

interface CartState {
    isCartOpen: boolean;
    cartItems: ICartItem[];
    cartTotal: number
    cartCount: number
}

export type { CartState };
