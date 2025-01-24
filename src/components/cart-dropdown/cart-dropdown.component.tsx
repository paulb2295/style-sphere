import Button from "../button/button.component.tsx";
import './cart-dropdown.styles.scss'
import {useContext} from "react";
import {CartItemsContext} from "../../contexts/cart-items.context.tsx";
import CartItem from "../cart-item/cart-item.component.tsx";

const CartDropdown = () => {
    const {cartItems} = useContext(CartItemsContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.length === 0 ?
                    'No products added yet' :
                    cartItems.map(({id, name, imageUrl, price, quantity}) => (
                        <CartItem key={id} quantity={quantity} id={id} imageUrl={imageUrl} name={name} price={price}/>
                    ))}
            </div>
            <Button
                buttonType='normal'
                type='button'
                children='GO TO CHECKOUT'
            />
        </div>
    );
}

export default CartDropdown;
