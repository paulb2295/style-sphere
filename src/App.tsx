import Home from "./routes/home/home.component.tsx";
import {Route, Routes} from "react-router";
import Navigation from "./routes/navigation/navigation.component.tsx";
import Authentication from "./routes/authentication/authentication.component.tsx";

const App = () => {

    return (
        <Routes>
            <Route path='/' element={<Navigation/>} >
                <Route index element={<Home />}/>
                <Route path='/auth' element={<Authentication />} />
            </Route>
        </Routes>
    );
}

export default App


