import './cart-icon.styles.tsx'
import ShoppingIcon from '../../assets/shopping-bag.svg'
import {CartIconContainer, ItemCount, ShoppingIconImage} from "./cart-icon.styles.tsx";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../store/store.ts";
import {setIsCartOpen} from "../../store/cart/cart.action.ts";
import {selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selector.ts";

const CartIcon = () => {
    const dispatch = useDispatch<AppDispatch>();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIconImage src={ShoppingIcon} alt="Shopping Bag Icon"/>
            <ItemCount className='item-count'>{cartCount}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;
