import {ICartItem} from "../../utils/interfaces/cart/ICartItem.ts";
import {CART_ACTION_TYPES} from "./cart.types.ts";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";

export const setIsCartOpen = (isCartOpen: boolean) => {
    return {
        type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
        payload: isCartOpen
    }
}


export const addItemToCart = (cartItems: ICartItem[], product: IProduct) => {
    const updatedCartItems = addCartItem(cartItems, product);
    return {
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: updatedCartItems
    }
}

export const deleteItemFromCart = (cartItems: ICartItem[], cartItem: ICartItem) => {
    const updatedCartItems = deleteCartItem(cartItems, cartItem);
    return {
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: updatedCartItems
    }
}

export const increaseDecreaseItemQuantity = (cartItems: ICartItem[], cartItem: ICartItem, action: boolean) => {
    const updatedCartItems = increaseDecreaseQuantity(cartItems, cartItem, action);
    return {
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: updatedCartItems
    }
}

export const setCartItems = (cartItems: ICartItem[]) => {
    const updatedCartItems = cartItems;
    return {
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: updatedCartItems
    }
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
