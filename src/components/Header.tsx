import React, {FC} from 'react';
import {Link, NavLink} from "react-router-dom";

const Header:FC = () => {
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">

                <NavLink  to="/number" className={({ isActive }) =>
                    isActive ? 'text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6' : 'text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6'
                } >number</NavLink>

                <NavLink to="/favorites"
                         className={({ isActive }) =>
                             isActive ? 'text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6' : 'text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6'
                         }
                      >favorites</NavLink>

                <NavLink to="/history"
                         className={({ isActive }) =>
                             isActive ? 'text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6' : 'text-gray-800 transition-colors duration-300 transform dark:text-gray-200 mx-1.5 sm:mx-6'
                         }
                   >history</NavLink>
            </div>
        </nav>
    );
};

export default Header;
