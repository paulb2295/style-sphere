import {useContext} from "react";
import {ProductsContext} from "../../contexts/products.context.tsx";
import CategoryPreview from "../../components/category-preview/category-preview.component.tsx";


const CategoriesPreview = () => {
    const {allProducts} = useContext(ProductsContext)
    const categories = Array.from(new Set(allProducts.map((item) => item.category)));

    return (
        <>
            {categories.map((category) => (
                <CategoryPreview
                    key={category}
                    products={allProducts.filter((product) => product.category === category)}
                    title={category!}
                />
            ))}
        </>
    );


}

export default CategoriesPreview;
