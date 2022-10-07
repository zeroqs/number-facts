import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../hook/redux";
import {toggleFavorite} from "../redux/Slices/FetchSlice";

interface favorProps {
    fact : string;
}

const FavoriteOutput:FC<favorProps> = ({fact}) => {


    return (
        <div
            className="inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto
            bg-white border rounded-md max-h-72 dark:bg-gray-900
            dark:border-gray-700 flex justify-between">
            <a href="#" className="block py-1">
                <h3 className="font-medium text-gray-700 dark:text-gray-100 hover:underline">{fact}</h3>
            </a>
            <button className="p-2 self-start">
                <svg aria-hidden="true" className="w-5 h-5  text-yellow-400"  viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"><title>Favorites</title>
                </svg>
            </button>
        </div>
    );
};

export default FavoriteOutput;