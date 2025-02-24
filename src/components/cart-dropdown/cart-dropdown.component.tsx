import Button from "../button/button.component.tsx";
import './cart-dropdown.styles.tsx'
import CartItem from "../cart-item/cart-item.component.tsx";
import {useNavigate} from "react-router";
import {CartDropDownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles.tsx";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector.ts";
import {AppDispatch} from "../../store/store.ts";
import {setIsCartOpen} from "../../store/cart/cart.action.ts";

const CartDropdown = () => {

    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const goToCheckout = () => {
        dispatch(setIsCartOpen(false));
        navigate('/checkout');
    };

    return (
        <CartDropDownContainer>
            <CartItems>
                {cartItems.length === 0 ?
                    <EmptyMessage> No products added yet </EmptyMessage> :
                    cartItems.map(({id, name, imageUrl, price, quantity}) => (
                        <CartItem key={id} quantity={quantity} id={id} imageUrl={imageUrl} name={name} price={price}/>
                    ))}
            </CartItems>
            <Button
                buttonType='base'
                type='button'
                children='GO TO CHECKOUT'
                onClick={goToCheckout}
            />
        </CartDropDownContainer>
    );
}

export default CartDropdown;
