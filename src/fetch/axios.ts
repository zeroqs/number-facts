import axios from "axios";
import {AppDispatch} from "../redux/store";
import {FetchSlice} from "../redux/Slices/FetchSlice";
import {ServerResponse} from "../models/models";


interface fetchProps {
    number: string;
    name: string;
}

export const fetch = ({number,name} : fetchProps) => {

    return async (dispatch : AppDispatch) => {
        try {
            dispatch(FetchSlice.actions.fetching())
            const response = await axios.get<ServerResponse<any>>(`http://numbersapi.com/${number}/${name}`)
            dispatch(FetchSlice.actions.fetchingSuccess(response))
        } catch (e) {
            dispatch(FetchSlice.actions.fetchingError(e as Error))
        }
    }
}