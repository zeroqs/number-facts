import React, {FC} from 'react';
import DeleteButton from "./DeleteButton";

interface favorProps {
    fact : string;
}

const FavoriteOutput:FC<favorProps> = ({fact}) => {


    return (
        <div
            className="inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto
            bg-white border rounded-md max-h-72 dark:bg-gray-900
            dark:border-gray-700">
            <a href="#" className="block py-1">
                <h3 className="font-medium text-gray-700 dark:text-gray-100 hover:underline">{fact}</h3>
            </a>
            <div className="text-right">
                <DeleteButton fact={fact}/>
            </div>
        </div>
    );
};

export default FavoriteOutput;