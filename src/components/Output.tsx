import React, {FC, useState} from 'react';

const Output:FC = () => {

    const [state, setState] = useState(false);

    return (
        <div
            className="absolute inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border rounded-md max-h-72 dark:bg-gray-900 dark:border-gray-700 flex justify-between">
            <a href="#" className="block py-1">
                <h3 className="font-medium text-gray-700 dark:text-gray-100 hover:underline">Software engineer</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">02/04/2020</p>
            </a>
            <button onClick={() => setState(!state)} className="p-2 self-start">
                <svg aria-hidden="true" className="w-5 h-5  text-yellow-400" fill={state ? "currentColor" : "gray"} viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg"><title>Favorites</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
            </button>
        </div>
    );
};

export default Output;