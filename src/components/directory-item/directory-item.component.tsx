import "./directory-item.styles.tsx"
import {ICategoryProps} from "../../utils/interfaces/props/ICategoryProps.ts";
import {useContext} from "react";
import {ProductsContext} from "../../contexts/products.context.tsx";
import {useNavigate} from "react-router";
import {BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.styles.tsx";

const DirectoryItem = (props: ICategoryProps) => {
    const {title, imageUrl} = props;
    const {fetchProductsByCategory} = useContext(ProductsContext);
    const navigate = useNavigate();

    const selectCategoryAndNavigateToShop = () => {
        fetchProductsByCategory(title.toUpperCase());
        navigate(`/shop/${title}`);
    }

    return (
        <DirectoryItemContainer onClick={selectCategoryAndNavigateToShop}>
            <BackgroundImage
                 imageUrl={imageUrl}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;
