import {ICartItem} from "../../utils/interfaces/cart/ICartItem.ts";

interface CartState {
    isCartOpen: boolean;
    cartItems: ICartItem[];
}

export type { CartState };
