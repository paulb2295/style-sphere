import './cart-icon.styles.tsx'
import ShoppingIcon from '../../assets/shopping-bag.svg'
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context.tsx";
import {CartIconContainer, ItemCount, ShoppingIconImage} from "./cart-icon.styles.tsx";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const {cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconImage src={ShoppingIcon} alt="Shopping Bag Icon"/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
