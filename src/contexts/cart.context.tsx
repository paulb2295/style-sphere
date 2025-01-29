import {createContext, ReactNode, useEffect, useState} from "react";
import {ICartContextType} from "../utils/interfaces/cart/ICartContextType.ts";
import {ICartItem} from "../utils/interfaces/cart/ICartItem.ts";
import {IProduct} from "../utils/interfaces/shop/IProduct.ts";

export const CartContext = createContext<ICartContextType>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    setCartItems: () => null,
    addItemToCart: () => null,
    deleteItemFromCart: () => null,
    increaseDecreaseItemQuantity: () => null,
    cartTotal: 0,
    cartCount: 0
});

export const CartProvider = ({children}: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<ICartItem[]>([]);
    const [cartTotal, setCartTotal] = useState(0);
    const [cartCount, setCartCount] = useState(0);
    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        const newTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
        setCartTotal(newTotal);
    }, [cartItems]);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])


    const addItemToCart = (product: IProduct) => {
        const updatedCartItems = addCartItem(cartItems, product);
        setCartItems(updatedCartItems);
    }

    const deleteItemFromCart = (cartItem: ICartItem) => {
        const updatedCartItems = deleteCartItem(cartItems, cartItem);
        setCartItems(updatedCartItems);
    }

    const increaseDecreaseItemQuantity = (cartItem: ICartItem, action: boolean) => {
        const updatedCartItems = increaseDecreaseQuantity(cartItems, cartItem, action);
        setCartItems(updatedCartItems);
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        setCartItems,
        addItemToCart,
        deleteItemFromCart,
        increaseDecreaseItemQuantity,
        cartTotal,
        cartCount
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
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

const deleteCartItem = (cartArray: ICartItem[], itemToDelete: ICartItem) => {
    return cartArray.filter(item => item.id !== itemToDelete.id)
}

const increaseDecreaseQuantity = (cartArray: ICartItem[], cartItem: ICartItem, action: boolean) => {
    const existingCartItem = cartArray.find(item => item.id === cartItem.id);

    if (existingCartItem) {
        if (!action && existingCartItem.quantity === 1) {
            return deleteCartItem(cartArray, cartItem)
        }
        return cartArray.map(item =>
            item.id === cartItem.id ? {...item, quantity: item.quantity + (action ? 1 : -1)}
                : item
        )
    }
    return cartArray;
}


