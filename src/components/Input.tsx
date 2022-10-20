import React, {ChangeEvent, FC, useCallback, useState} from 'react';
import {addValue} from "../redux/Slices/InputSlice";

import {debounce} from "lodash";
import {useAppDispatch} from "../hook/redux";
import DeleteButton from "./DeleteButton";

const Input: FC = () => {
    const [searchLocal, setSearchLocal] = useState<string>('');
    const dispatch = useAppDispatch()



    const setSearch = (action : ChangeEvent<HTMLInputElement>) => {
        dispatch(addValue(action))
    }

    const updateSearchValue  = useCallback (
        debounce((searchValue) => {
            setSearch(searchValue)
        },100),[]
    )

    const onChangeSearch = (event : ChangeEvent<HTMLInputElement>) => {
        setSearchLocal(event.target.value)
        updateSearchValue(event.target.value)
    }

    return (

        <>
            <input type="text"
                   className="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-900
               dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300
               focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                   placeholder="Enter a number"
                   value={searchLocal} onChange={onChangeSearch}
            />

        </>

    );
};

export default Input;