import {Dispatch, SetStateAction} from "react";
import {ICartItem} from "./ICartItem.ts";
import {IProduct} from "../shop/IProduct.ts";

interface ICartItemsContextType {
    cartItems: ICartItem[];
    setCartItems: Dispatch<SetStateAction<ICartItem[]>>
    addItemToCart: (product: IProduct) => void;
}

export type { ICartItemsContextType };
