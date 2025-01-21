import './product-card.styles.scss'
import Button from "../button/button.component.tsx";
import {IProduct} from "../../utils/interfaces/shop/IProduct.ts";

const ProductCard = ({name, imageUrl, price}: IProduct) => {
    return (
        <div className="product-card-container">
            <img src={imageUrl}  alt={name} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <Button buttonType='inverted' type='button'  children='Add to cart'/>
        </div>
    );
}

export default ProductCard;
