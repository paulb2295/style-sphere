import Directory from "../../components/directory/directory.component.tsx";
import {categories} from "../../data/CategoryData.ts";

const Home = () => {
    return (
        <Directory categories={categories}/>
    );
}

export default Home;
