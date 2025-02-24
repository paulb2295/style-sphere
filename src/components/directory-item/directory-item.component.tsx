import "./directory-item.styles.tsx"
import {ICategoryProps} from "../../utils/interfaces/props/ICategoryProps.ts";
import {useNavigate} from "react-router";
import {BackgroundImage, Body, DirectoryItemContainer} from "./directory-item.styles.tsx";

const DirectoryItem = (props: ICategoryProps) => {
    const {title, imageUrl} = props;
    const navigate = useNavigate();

    const selectCategoryAndNavigateToShop = () => {
        navigate(`/shop/${title.toUpperCase()}`);
    }

    return (
        <DirectoryItemContainer onClick={selectCategoryAndNavigateToShop}>
            <BackgroundImage
                $imageUrl={imageUrl}
            />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItem;
