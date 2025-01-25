import "./shop.styles.scss"
import {Route, Routes} from "react-router";
import CategoriesPreview from "../categories-preview/categories-preview.component.tsx";
import Category from "../category/category.component.tsx";


const Shop = () => {

    return (
        <Routes>
            <Route index  element={<CategoriesPreview/>} />
            <Route path=':category' element={<Category/>} />
            {/*<Route path='/all' element={<CategoriesPreview/>} />*/}
        </Routes>
    );


}

export default Shop;
