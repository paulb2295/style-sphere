import {ICartItem} from "../../utils/interfaces/cart/ICartItem.ts";
import './cart-item.styles.scss'

const CartItem = (props: ICartItem) => {
    const {name, imageUrl, quantity, price} = props;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={name}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x {`$${price}`}</span>
            </div>
        </div>
    );
}

export default CartItem;
