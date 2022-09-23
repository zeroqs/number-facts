import axios from "axios";
import {AppDispatch} from "../redux/store";
import {FetchSlice} from "../redux/Slices/FetchSlice";
import {useAppSelector} from "../hook/redux";

interface fetchProps {
    number: string;
    type: string;
}

export const fetch = ({number,type} : fetchProps) => {

    return async (dispatch : AppDispatch) => {
        try {
            dispatch(FetchSlice.actions.fetching())
            const response = await axios.get<[]>(`http://numbersapi.com/${number}/${type}`)
            dispatch(FetchSlice.actions.fetchingSuccess(response.data))
        } catch (e) {
            dispatch(FetchSlice.actions.fetchingError(e as Error))
        }
    }
}