import {useContext} from "react";
import {CartItemsContext} from "../../contexts/cart-items.context.tsx";
import CheckoutItem from "../../components/checkout-item/checkout-item.component.tsx";
import './checkout.styles.tsx'
import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles.tsx";

const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartItemsContext)

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock><span>Product</span></HeaderBlock>
                <HeaderBlock><span>Description</span></HeaderBlock>
                <HeaderBlock><span>Quantity</span></HeaderBlock>
                <HeaderBlock><span>Price</span></HeaderBlock>
                <HeaderBlock><span>Remove</span></HeaderBlock>
            </CheckoutHeader>
            {cartItems.map(item =>
                <CheckoutItem key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} price={item.price}
                              quantity={item.quantity}/>)
            }
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;
