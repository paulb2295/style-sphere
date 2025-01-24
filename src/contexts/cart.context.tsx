import {createContext, ReactNode, useState} from "react";
import {ICartContext} from "../utils/interfaces/cart/ICartContext.ts";

export const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    setIsCartOpen: () => {}
});

export const CartProvider = ({children} : {children: ReactNode}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}
