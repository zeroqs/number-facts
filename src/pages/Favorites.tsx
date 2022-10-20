import React from 'react';
import Header from "../components/Header";

import {useAppSelector} from "../hook/redux";
import FavoriteOutput from "../components/FavoriteOutput";

const Favorites = () => {
    const data  =  useAppSelector((state) => state.fetch.favorite)
    return (
        <div className="h-screen dark:bg-gray-900">
            <div className="dark:bg-gray-900">
                <Header/>
                <section className="w-full max-w-md px-5 py-4 mx-auto rounded-md">
                    {data.map((element : any,i :any) => <FavoriteOutput key={i} fact={element.fact}/>)}
                </section>
            </div>
        </div>
    );
};

export default Favorites;
