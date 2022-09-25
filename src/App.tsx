import React, {FC} from 'react';


import Search from "./components/Search";
import Header from "./components/Header";
import Output from "./components/Output";


const App: FC = () => {


    return (
        <div className="App dark:bg-gray-900 h-screen">
            <Header/>
            <Search/>
        </div>
    );
}

export default App;
