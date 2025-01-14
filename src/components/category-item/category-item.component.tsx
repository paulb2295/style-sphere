import "./category-item.styles.scss"
import {ICategoryProps} from "../../utils/interfaces/ICategoryProps.ts";

const CategoryItem = (props: ICategoryProps) => {
    const {title, imageUrl} = props;
    return (
        <div className="category-container">
            <div className="background-image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
}

export default CategoryItem;
