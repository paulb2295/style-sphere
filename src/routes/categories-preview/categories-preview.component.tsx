import CategoryPreview from "../../components/category-preview/category-preview.component.tsx";
import {useSelector} from "react-redux";
import {selectAllProducts} from "../../store/products/product.selector.ts";



const CategoriesPreview = () => {
    const allProducts = useSelector(selectAllProducts);
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
