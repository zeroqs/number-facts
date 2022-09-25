import React, {FC} from 'react';

import {useAppDispatch, useAppSelector} from "../hook/redux";
import {fetch} from "../fetch/axios";

interface BtnProps {
    name: string;
}

const Button:FC<BtnProps> = ({name}) => {
    const number = useAppSelector(state => state.inputValue.value)
    const dispatch = useAppDispatch();

    const buttonClickType = () => {
        dispatch(fetch({number,name}))
    }



    return (
        <div className="flex mt-6">
            <button
                onClick={buttonClickType}
                value={name}
                className="px-8 py-2.5 leading-5 text-white
                transition-colors duration-300 transform
                bg-gray-700 rounded-md hover:bg-gray-600
                focus:outline-none focus:bg-gray-600">{name}
            </button>
        </div>
    );
};

export default Button;
