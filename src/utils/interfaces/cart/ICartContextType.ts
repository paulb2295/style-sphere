import {Dispatch, SetStateAction} from "react";
import {ICartItem} from "./ICartItem.ts";
import {IProduct} from "../shop/IProduct.ts";

interface ICartContextType {
    isCartOpen: boolean;
    setIsCartOpen: Dispatch<SetStateAction<boolean>>
    cartItems: ICartItem[];
    setCartItems: Dispatch<SetStateAction<ICartItem[]>>
    addItemToCart: (product: IProduct) => void;
    deleteItemFromCart: (product: ICartItem) => void;
    increaseDecreaseItemQuantity: (product: ICartItem, action: boolean) => void;
    cartTotal: number
    cartCount: number
}

export type {ICartContextType};
