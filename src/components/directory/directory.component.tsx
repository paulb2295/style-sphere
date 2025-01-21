import CategoryItem from "../category-item/category-item.component.tsx";
import {IDirectoryProps} from "../../utils/interfaces/props/IDirectoryProps.ts";
import "./directory.styles.scss"
const Directory = ({categories}: IDirectoryProps) => {

    return (
        <div className="directory-container">
            {categories.map(({id, title, imageUrl}) => (
                <CategoryItem
                    key={id}
                    title={title}
                    imageUrl={imageUrl} />
            ))}
        </div>
    );
}

export default Directory;
