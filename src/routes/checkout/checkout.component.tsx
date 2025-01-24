import {useContext} from "react";
import {CartItemsContext} from "../../contexts/cart-items.context.tsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.tsx";
import './checkout.styles.scss'

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartItemsContext)
    // const getTotal = () =>{
    //     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    // }
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
            {cartItems.map(item =>
                <CheckoutItem key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price}
                              quantity={item.quantity}/>)
            }
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
}

export default Checkout;
