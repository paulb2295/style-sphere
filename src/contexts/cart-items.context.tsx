import {createContext, ReactNode, useState} from "react";
import {ICartItemsContextType} from "../utils/interfaces/cart/ICartItemsContextType.ts";
import {ICartItem} from "../utils/interfaces/cart/ICartItem.ts";
import {IProduct} from "../utils/interfaces/shop/IProduct.ts";

export const CartItemsContext = createContext<ICartItemsContextType>({
    cartItems: [],
    setCartItems: () => null,
    addItemToCart: () => null
});

export const CartItemsProvider = ({children}: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);

    const addItemToCart = (product: IProduct) => {
        const updatedCartItems = addCartItem(cartItems, product);
        setCartItems(updatedCartItems);
    }

    const value = {cartItems, setCartItems, addItemToCart};

    return (
        <CartItemsContext.Provider value={value}>
            {children}
        </CartItemsContext.Provider>
    )
}


const addCartItem = (cartArray: ICartItem[], productToAdd: IProduct): ICartItem[] => {
    const {id, name, imageUrl, price} = productToAdd;

    const existingCartItem = cartArray.find(item => item.id === id);

    if (existingCartItem) {
        return cartArray.map(item =>
            item.id === id ? {...item, quantity: item.quantity + 1} : item
        );
    } else {
        const newCartItem: ICartItem = {id: id, name: name, imageUrl: imageUrl, price: price, quantity: 1};
        return [...cartArray, newCartItem];
    }
};

