import {createContext, ReactNode, useReducer,} from "react";
import {ICartContextType} from "../utils/interfaces/cart/ICartContextType.ts";
import {ICartItem} from "../utils/interfaces/cart/ICartItem.ts";
import {IProduct} from "../utils/interfaces/shop/IProduct.ts";
import {CartState} from "../utils/interfaces/reducers/cart/CartState.ts";
import {CART_ACTION_TYPES, CartActions} from "../utils/interfaces/reducers/cart/CartActions.ts";

export const CartContext = createContext<ICartContextType>({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    //setCartItems: () => null,
    addItemToCart: () => null,
    deleteItemFromCart: () => null,
    increaseDecreaseItemQuantity: () => null,
    cartTotal: 0,
    cartCount: 0
});

const INITIAL_STATE: CartState = {
    isCartOpen: false,
    cartItems: [],
    cartTotal: 0,
    cartCount: 0
}

const cartReducer = (state: CartState, action: CartActions): CartState => {
    const {type, payload} = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload,
            };
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            };
        default:
            throw new Error(`Unhandled type ${type} in productsReducer`);
    }
}

export const CartProvider = ({children}: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const cartItems = state.cartItems;
    const isCartOpen = state.isCartOpen;
    const cartTotal = state.cartTotal;
    const cartCount = state.cartCount;



    const addItemToCart = (product: IProduct) => {
        const updatedCartItems = addCartItem(cartItems, product);
        dispatchCartItemsAction(updatedCartItems);
    }

    const deleteItemFromCart = (cartItem: ICartItem) => {
        const updatedCartItems = deleteCartItem(cartItems, cartItem);
        dispatchCartItemsAction(updatedCartItems);
    }

    const increaseDecreaseItemQuantity = (cartItem: ICartItem, action: boolean) => {
        const updatedCartItems = increaseDecreaseQuantity(cartItems, cartItem, action);
        dispatchCartItemsAction(updatedCartItems);
    }

    const dispatchCartItemsAction = (updatedCartItems: ICartItem[]) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems: updatedCartItems,
                cartTotal: updatedCartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
                cartCount: updatedCartItems.reduce((total, item) => total + item.quantity, 0)
            }
        });
    }

    const setIsCartOpen = () => {
        dispatch({
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
            payload: !isCartOpen
        })
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
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

