import {ICartItem} from "../../utils/interfaces/cart/ICartItem.ts";
import {CartItemContainer, Image, ItemDetails, Name} from "./cart-item.styles.tsx";


const CartItem = (props: ICartItem) => {
    const {name, imageUrl, quantity, price} = props;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={name}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span >{quantity} x {`$${price}`}</span>
            </ItemDetails>
        </CartItemContainer>
    );
}

export default CartItem;
