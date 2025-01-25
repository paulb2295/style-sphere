import "./category-item.styles.scss"
import {ICategoryProps} from "../../utils/interfaces/props/ICategoryProps.ts";
import {useContext} from "react";
import {ProductsContext} from "../../contexts/products.context.tsx";
import {useNavigate} from "react-router";

const CategoryItem = (props: ICategoryProps) => {
    const {title, imageUrl} = props;
    const {fetchProductsByCategory} = useContext(ProductsContext);
    const navigate = useNavigate();

    const selectCategoryAndNavigateToShop = () => {
        fetchProductsByCategory(title.toUpperCase());
        navigate(`/shop/${title}`);
    }

    return (
        <div className="category-container" onClick={selectCategoryAndNavigateToShop}>
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;
