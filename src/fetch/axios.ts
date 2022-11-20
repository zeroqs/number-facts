import axios from "axios";
import {AppDispatch} from "../redux/store";
import {FetchSlice} from "../redux/Slices/FetchSlice";
import {ServerResponse} from "../models/models";


interface fetchProps {
    number: string;
    name: string;
}

export const fetch = ({number,name} : fetchProps) => {
    const url = `http://numbersapi.com/${number}/${name}`

    return async (dispatch : AppDispatch) => {
        try {
            dispatch(FetchSlice.actions.fetching())
            // @ts-ignore
            const response = await axios.get<ServerResponse[]>(url,{mode: 'no-cors'})
            dispatch(FetchSlice.actions.fetchingSuccess(response.data))
        } catch (e) {
            dispatch(FetchSlice.actions.fetchingError(e as Error))
        }
    }
}