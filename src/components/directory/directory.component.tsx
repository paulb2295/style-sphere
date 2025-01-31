import DirectoryItem from "../directory-item/directory-item.component.tsx";
import {IDirectoryProps} from "../../utils/interfaces/props/IDirectoryProps.ts";
import "./directory.styles.tsx"
import {DirectoryContainer} from "./directory.styles.tsx";

const Directory = ({categories}: IDirectoryProps) => {

    return (
        <DirectoryContainer>
            {categories.map(({id, title, imageUrl}) => (
                <DirectoryItem
                    key={id}
                    title={title}
                    imageUrl={imageUrl}/>
            ))}
        </DirectoryContainer>
    );
}

export default Directory;
