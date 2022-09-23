import React, {FC, useEffect, useState} from 'react';

import axios from "axios";
import Search from "./components/Search";
import Header from "./components/Header";


const App:FC = () => {
    const [state, setState] = useState<string>('')


    // useEffect(() => {
    //     axios.get('http://numbersapi.com/2/trivia')
    //         .then(res => {
    //             setState(res.data)
    //         })
    // }, [])

    return (
    <div className="App dark:bg-gray-900 h-screen">
        <Header/>
        <Search/>
    </div>
  );
}

export default App;
