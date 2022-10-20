import React, {FC, useEffect} from 'react';
import Button from "./Button";
import Input from "./Input";
import Output from "./Output";
import {useAppSelector} from "../hook/redux";
import {Store} from "../models/models";
import DeleteAll from "./DeleteAll";

const items: string[] = ["math", "trivia", "date"]



const Search: FC = () => {
    const data:Store[]  =  useAppSelector((state) => state.fetch.data)

    return (
        <section className="w-full max-w-md px-5 py-4 mx-auto rounded-md">
            <div className="relative flex items-center gap-1">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                <path
                    d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
        </span>
                <Input/>
                <div>
                    <DeleteAll/>
                </div>

            </div>
            <div className="flex justify-between">
                {items.map((item,i)  => <Button key={i} name={item}/>)}
            </div>
            {data.map((element ,i :number) => <Output key={i} fact={element.fact} data={data[i]}/>)}

        </section>
    );
};

export default Search;