import Button from "../button/button.component.tsx";
import './cart-dropdown.styles.tsx'
import {useContext} from "react";
import {CartItemsContext} from "../../contexts/cart-items.context.tsx";
import CartItem from "../cart-item/cart-item.component.tsx";
import {useNavigate} from "react-router";
import {CartContext} from "../../contexts/cart.context.tsx";
import {CartDropDownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles.tsx";

const CartDropdown = () => {
    const {cartItems} = useContext(CartItemsContext);
    const {setIsCartOpen} = useContext(CartContext)
    const navigate = useNavigate();

    const goToCheckout = () => {
        setIsCartOpen(false);
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
