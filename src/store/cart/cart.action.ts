import {ICartItem} from "../../utils/interfaces/cart/ICartItem.ts";
import {CART_ACTION_TYPES} from "./cart.types.ts";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";
import {ActionWithPayload, createAction, withMatcher} from "../../utils/reducer/reducer.utils.ts";

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

export type setIsCartOpen = ActionWithPayload<CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean>
export type setCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, ICartItem[]>

export const setIsCartOpen = withMatcher((isCartOpen: boolean) => {
    return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
});

export const addItemToCart = withMatcher((cartItems: ICartItem[], product: IProduct) => {
    if(!product){
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
    }
    const updatedCartItems = addCartItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
});

export const deleteItemFromCart = withMatcher((cartItems: ICartItem[], cartItem: ICartItem) => {
    if(!cartItem){
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
    }
    const updatedCartItems = deleteCartItem(cartItems, cartItem);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
});

export const increaseDecreaseItemQuantity = withMatcher((cartItems: ICartItem[], cartItem: ICartItem, action: boolean) => {
    if(!cartItem){
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems);
    }
    const updatedCartItems = increaseDecreaseQuantity(cartItems, cartItem, action);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
})

export const setCartItems = withMatcher((cartItems: ICartItem[]) => {
    const updatedCartItems = cartItems;
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
});


