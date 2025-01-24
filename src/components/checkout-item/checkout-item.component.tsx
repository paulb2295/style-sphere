import {useContext} from "react";
import {CartItemsContext} from "../../contexts/cart-items.context.tsx";
import {ICartItem} from "../../utils/interfaces/cart/ICartItem.ts";
import './checkout-item.styles.scss'

const CheckoutItem = (cartItem: ICartItem) => {
    const {deleteItemFromCart, increaseDecreaseItemQuantity} = useContext(CartItemsContext)
    const {name, imageUrl, price, quantity} = cartItem;

    const clearItemHandler = () => deleteItemFromCart(cartItem);
    const increaseHandler = () => increaseDecreaseItemQuantity(cartItem, true);
    const decreaseHandler = () => increaseDecreaseItemQuantity(cartItem, false);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decreaseHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={increaseHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>

            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
