import './cart-icon.styles.scss'
import ShoppingIcon from '../../assets/shopping-bag.svg'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context.tsx";
import {CartItemsContext} from "../../contexts/cart-items.context.tsx";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const {cartItems} = useContext(CartItemsContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    const itemsNumber = () => {
        return cartItems.reduce(
            (sum, item) =>  sum + item.quantity, 0
        );
    }
    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <img className='shopping-icon' src={ShoppingIcon} alt="Shopping Bag Icon" />
            <span className='item-count'>{itemsNumber()}</span>
        </div>
    );
}

export default CartIcon;
