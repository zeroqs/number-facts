import React, {FC} from 'react';
import Number from "./pages/Number";
import {Route, Routes} from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";



const App: FC = () => {


    return (
        <div className="App dark:bg-gray-900 h-screen">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/number" element={<Number/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    );
}

export default App;
